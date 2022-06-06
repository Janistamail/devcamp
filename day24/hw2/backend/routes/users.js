var express = require("express");
var router = express.Router();
const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const pool = require("./pool");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "day22",
//   port: 8889,
// });

// const comparePassword = (password, inputPassword) => {
// return new Promise(function (resolve, reject) {
//   bcrypt.compare(password, inputPassword, function (err, result) {
//     if (err) {
//       reject(err);
//     }
//     if (result) {
//       resolve(result);
//     } else {
//       resolve(false);
//     }
//   });
// });
// };

router.post("/login", async function (req, res, next) {
  let { username, password } = req.body;
  let [rows, fields] = await pool.query(
    `SELECT * FROM user WHERE username = '${username}'`
  );
  try {
    if (rows.length > 0) {
      const passwordMatch = await bcrypt.compare(password, rows[0].password);
      console.log(passwordMatch);
      if (passwordMatch) {
        const privateKey = "privatekey";
        const token = jwt.sign(
          {
            id: rows[0].id,
            username: rows[0].username,
          },
          privateKey,
          { expiresIn: "24h" }
        );
        res.json({ token: token });
      } else {
        res.status(401).send({ error: "invalid credential" });
        return;
      }
    } else {
      res.status(401).send({ error: "user not found" });
      return;
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
