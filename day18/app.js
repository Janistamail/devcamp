const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const mysql = require("mysql2");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let users = require("./user.json");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root", // <== ระบุให้ถูกต้อง
  password: "root", // <== ระบุให้ถูกต้อง
  database: "devCap2",
  port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

app.post("/user", function (req, res, next) {
  let user = {};
  //   user.id = users.length + 1;
  user.name = req.body.name;
  user.age = Number(req.body.age);
  user.movie = req.body.movie;
  //   users.push(user);
  console.log("Users :", user.name, "Created!");
  connection.connect();

  connection.query(
    " insert into user (firstname, age, movie) values ('" +
      req.body.name +
      "' , '" +
      req.body.age +
      "', '" +
      req.body.movie +
      "' )",
    (err, rows, fields) => {
      if (err) throw err;

      // return response กลับไปหา client โดยแปลง record เป็น json array
      res.json(rows);
    }
  );

  connection.end();
  return res.status(201).json({
    code: 1,
    message: "OK",
    data: users,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
