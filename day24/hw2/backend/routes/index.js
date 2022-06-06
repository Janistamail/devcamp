var express = require("express");
var router = express.Router();
const pool = require("./pool");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/stock", async function (req, res, next) {
  let [rows, fields] = await pool.query(`SELECT * FROM my_stock`);
  res.json(rows);
});

module.exports = router;
