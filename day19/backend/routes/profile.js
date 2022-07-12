var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
var bodyParser = require("body-parser");
let connection = require("../models/employeeConnection");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/add", async function (req, res, next) {
  // connection.query(
  //   `INSERT INTO profile (id_card, company_name, company_address, duration, position) VALUES ('${req.body.id_card}', '${req.body.company_name}', '${req.body.company_address}', '${req.body.duration}', '${req.body.position}')`,
  //   (err, result, fields) => {
  //     if (result.affectedRows === 1) {
  //       res.status(200).json(result);
  //     } else {
  //       res.status(400).send("Something went wrong!!!!!!");
  //     }
  //   }
  // );
  let [result, fields] = await connection.query(
    `INSERT INTO profile (id_card, company_name, company_address, duration, position) VALUES ('${req.body.id_card}', '${req.body.company_name}', '${req.body.company_address}', '${req.body.duration}', '${req.body.position}')`
  );

  result.affectedRows === 1
    ? res.status(200).json(result)
    : res.status(400).send("Something went wrong!!!!!!");
});

module.exports = router;
