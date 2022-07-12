var express = require("express");
var router = express.Router();
const pool = require("../model/indexmodel");

/* GET users listing. */
router.get("/from_user/:id", async function (req, res, next) {
  let [rows, fields] = await pool.query("SELECT * from user WHERE id = ?", [
    req.params.id,
  ]);
  res.data2 = rows[0];
  next();
});

router.get("/from_student/:id", async function (req, res, next) {
  let [rows, fields] = await pool.query("SELECT * from user WHERE id = ?", [
    req.params.id,
  ]);
  res.data2 = rows[0];
  next();
});

module.exports = router;
