const mysql = require('mysql');

//SQL Database Configuration
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tkh123!',
    database: 'masrgodb'
});

//connect to database
connection.connect(function(err) {
    if (err) throw err;
    console.log("you have connected to the database");
  });

module.exports = connection;