var express = require("express");
var router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("./pool");

router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/add", async function (req, res, next) {
  let { password } = await req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  let [rows, fields] = await pool.query(
    `INSERT INTO user (username, password, firstname, lastname, email) VALUES ('${req.body.username}',
    '${hashedPassword}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.email}')`
  );
  res.status(200).json(rows);
});

module.exports = router;
