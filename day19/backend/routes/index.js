var express = require("express");
var router = express.Router();
let connection = require("../models/employeeConnection");

router.get("/", async function (req, res, next) {
  connection.query("SELECT * from person", (err, results, fields) => {
    if (err) throw err;
    res.json(results);
  });

  console.log("test");
});

module.exports = router;

// const myModule = require("./my_module");
// console.log(myModule.myVar); // Hello World
// console.log(myModule.myVar2.prop1); // print 1
