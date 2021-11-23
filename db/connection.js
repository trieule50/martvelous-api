//=============================================================================
// Mongo Atlas Connection
//=============================================================================
// Mongo URL and Connection
require('dotenv').config()
const mongoose = require('mongoose');

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

module.exports = mongoose;