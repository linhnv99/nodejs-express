var mysql = require('mysql');

var connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || "3390",
  user: process.env.DB_USER || "username",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_DATABASE || "shop",
});

connection.connect(err => {
  if (err) {
    console.log("Error connect db!")
    throw err;
  }
})

module.exports = connection;