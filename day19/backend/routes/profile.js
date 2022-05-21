var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
var bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/add", function (req, res, next) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "day19",
    port: 8889,
  });
  console.log("test");
  connection.connect();
  connection.query(
    `INSERT INTO profile (id_card, company_name, company_address, duration, position) VALUES ('${req.body.id_card}', '${req.body.company_name}', '${req.body.company_address}', '${req.body.duration}', '${req.body.position}')`,
    (err, result, fields) => {
      if (result.affectedRows === 1) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Something went wrong!!!!!!");
      }
    }
  );

  connection.end();
});

module.exports = router;
