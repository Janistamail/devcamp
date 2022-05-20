const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/product/:id", (req, res) => {
  // เปิด connection ไปที่ database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "day18",
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  connection.connect();
  connection.query(
    `SELECT * from list WHERE id = ${req.params.id}`,
    (err, rows, fields) => {
      console.log(rows);
      if (rows.length === 0) {
        res.status(400).send("ข้อมูลไม่ถูกต้อง");
      } else {
        res.status(200).json(rows);
      }
      //   if (err) throw err;
    }
  );

  // ปิด connection
  connection.end();
});

app.delete("/api/product/:id", (req, res) => {
  // เปิด connection ไปที่ database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "day18",
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  connection.connect();
  connection.query(
    `DELETE FROM list WHERE id = ${req.params.id}`,
    (err, rows, fields) => {
      console.log(rows);
      if (rows.affectedRows === 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("ข้อมูลไม่ถูกต้อง");
      }
    }
  );

  // ปิด connection
  connection.end();
});

app.post("/api/product", (req, res) => {
  // เปิด connection ไปที่ database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "day18",
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  connection.connect();
  connection.query(
    `INSERT INTO list (product_name, stock_left, category) values ("${req.body.product_name}", ${req.body.stock_left}, "${req.body.category}")`,
    (err, rows, fields) => {
      if (rows.affectedRows === 1) {
        res.status(200).json(rows.insertId);
      } else {
        res.status(400).send("ข้อมูลไม่ถูกต้อง");
      }
    }
  );

  // ปิด connection
  connection.end();
});

app.put("/api/product/:id", (req, res) => {
  // เปิด connection ไปที่ database
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "day18",
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  connection.connect();
  connection.query(
    `UPDATE list SET product_name = "${req.body.product_name}", stock_left =  ${req.body.stock_left}, category = "${req.body.category}" WHERE id = ${req.params.id}`,
    (err, rows, fields) => {
      if (rows.affectedRows === 1) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("ข้อมูลไม่ถูกต้อง");
      }
    }
  );

  // ปิด connection
  connection.end();
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
