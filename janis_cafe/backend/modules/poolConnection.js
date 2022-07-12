var mysql = require("mysql2/promise");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "easyCafe",
  port: 8889,
  // connectionLimit: 10,
  // host: "54.169.218.17",
  // user: "root",
  // password: "mypassword",
  // database: "easyCafe",
  // port: 8889,
});

module.exports = pool;
