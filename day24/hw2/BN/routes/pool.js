const mysql = require("mysql2/promise");

let pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "day22",
  port: 8889,
});

module.exports = pool;
