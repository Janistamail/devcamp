var express = require("express");
var router = express.Router();
let mysql = require("../models/employeeConnection.js");

router.get("/", function (req, res, next) {
  connection.connect();
  connection.query("SELECT * from person", (err, results, fields) => {
    if (err) throw err;
    res.json(results);
  });

  connection.end();
  console.log("test");
});

module.exports = router;
