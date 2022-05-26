var express = require("express");
var router = express.Router();
let mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "day19",
  port: 8889,
});

module.exports = connection;

// let myVar = "Hello World";
// let myVar2 = { prop1: 1, prop2: 2 };
// module.exports.myVar = myVar;
// module.exports.myVar2 = myVar2;
