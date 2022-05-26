var express = require("express");
const { token } = require("morgan");
var router = express.Router();
const jwt = require("jsonwebtoken");
const pool = require("./pool");
const bcrypt = require("bcrypt");

router.post("/token", async (req, res, next) => {
  const { username, password } = await req.body;
  let [rows, fields] = await pool.query(
    `SELECT * FROM user WHERE username='${username}'`
  );
  try {
    if (rows.length > 0) {
      const passwordMatch = await bcrypt.compare(password, rows[0].password);
      if (passwordMatch) {
        const privateKey = "myprivatekey";
        const token = jwt.sign(
          {
            id: rows[0].id,
            username: rows[0].username,
            firstname: rows[0].firstname,
            email: rows[0].email,
          },
          privateKey,
          { expiresIn: "1h" }
        );
        console.log(token);
        res.status(200).json({ token: token });
      } else {
        res.status(401).send({ error: "invalid credential" });
        return;
      }
    } else {
      res.status(401).send({ error: "user not found" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
