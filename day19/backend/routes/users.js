var express = require("express");
var router = express.Router();
let mysql = require("mysql2");
var bodyParser = require("body-parser");
let connection = require("../models/employeeConnection");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

/* GET users listing. */
router.get("/person/:id", (async = (req, res, next) => {
    let [rows, fields] = await connection.query(`SELECT * from person WHERE id = ${req.params.id}`, (err, result, fields) => {
        if (err) throw err;
        res.status(200).json(result);
      }
    );
  })
);

router.post("/add", function (req, res, next) {
  connection.query(
    `INSERT INTO person (id_card, firstname, lastname, phone, email, address, tumbol, ampher, province, postal_number) VALUES ('${req.body.id_card}', '${req.body.firstname}', '${req.body.lastname}', '${req.body.phone}', '${req.body.email}', '${req.body.address}', '${req.body.tumbol}', '${req.body.ampher}', '${req.body.province}', '${req.body.postal_number}')`,
    (err, result, fields) => {
      console.log(result);
      if (result.affectedRows === 1) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Something went wrong!!!!!!");
      }
    }
  );
});

router.delete("/delete/:id", function (req, res, next) {
  connection.query(
    `DELETE FROM person WHERE id = ${req.params.id}`,
    (err, result, fields) => {
      if (result.affectedRows === 1) {
        res.status(200).json(result);
      } else {
        res.status(400).send("Something went wrong!!!!!!");
      }
    }
  );
});

router.put("/update/:id", function (req, res, next) {
  connection.query(
    `UPDATE person SET 
    id_card = '${req.body.id_card}',
    firstname = '${req.body.firstname}',
    lastname = '${req.body.lastname}', 
    phone = '${req.body.phone}', 
    email = '${req.body.email}', 
    address = '${req.body.address}', 
    tumbol = '${req.body.tumbol}', 
    ampher = '${req.body.ampher}', 
    province = '${req.body.province}', 
    postal_number = '${req.body.postal_number}' WHERE id = ${req.params.id}`,
    (err, results, fields) => {
      if (results.affectedRows === 1) {
        res.status(200).json(results);
      } else {
        res.status(400).send("Something went wrong!!!");
      }
    }
  );
});

module.exports = router;

// map(x, i);
