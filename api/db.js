const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.BIO_HOST,
  user: process.env.BIO_USER,
  password: process.env.BIO_PASS,
  databse: process.env.BIO_NAME,
});

// currently debugging 
module.exports = connection;

