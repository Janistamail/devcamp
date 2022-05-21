var express = require("express");
var router = express.Router();
let mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "day19",
  port: 8889,
});

module.exports = router;
