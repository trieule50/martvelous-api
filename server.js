//=============================================================================
// Basic Config
//=============================================================================
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;

//=============================================================================
// Middleware
//=============================================================================

//=============================================================================
// Mongo Atlas Connection
//=============================================================================
// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI );

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Open the Connection
db.on( 'open' , ()=>{
  console.log('✅ connection made!');
});

//=============================================================================
// START SERVER
//=============================================================================
app.listen(PORT, () => {
    console.log(`✅ martvelous app listening on port: ${PORT}`);
});