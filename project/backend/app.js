const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileupload = require("express-fileupload");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(fileupload());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DBHOST,
  user: process.env.DBUSER, // <== ระบุให้ถูกต้อง
  password: process.env.DBPASSWORD, // <== ระบุให้ถูกต้อง
  database: process.env.DBDATABASE,
  port: process.env.DBPORT ? +process.env.DBPORT : 3306, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

app.get("/", async (req, res) => {
  const [rows, fields] = await pool.query(`SELECT * FROM product`);
  console.log("getData", rows);
  if (rows.length > 0) {
    res.status(200).json(rows);
  } else {
    res.status(400).send("ข้อมูลไม่ถูกต้อง");
  }
});

app.delete("/del/:id", (req, res) => {
  console.log(req.params.id);
  const [rows, fields] = pool.query(
    `DELETE FROM product WHERE id = "${req.params.id}"`
  );
  rows.affectedRows > 0
    ? res.status(200).json(rows)
    : res.status(400).send("ข้อมูลไม่ถูกต้อง");
});

app.post("/create", async (req, res) => {
  console.log(req.body);
  console.log(req.files);
  // return null;

  const newpath = __dirname + "/public/upload-files/";
  const file = req.files?.photo ? req.files.photo : null;
  // console.log(req.body.photo[0]);

  // console.log(file.originFileObj);

  try {
    if (file) {
      const dotIndex = file.name.lastIndexOf(".");
      const fileExtension = file.name.substr(dotIndex);
      const randomFilename = new Date().getTime();
      const filename = randomFilename + fileExtension;

      file.mv(`${newpath}${filename}`, async (err) => {
        if (err) {
          return res.status(500).json({ message: "File upload failed" });
        }
        // else {
        //   return res
        //     .status(200)
        //     .json({ message: "success", filename: filename });
        // }
        else {
          const [rows, fields] = await pool.query(
            `INSERT INTO product (product_name, stock_left, category, photo) VALUES ("${req.body.product_name}", "${req.body.stock_left}", "${req.body.category}","${filename}")`
          );
          return rows.affectedRows > 0
            ? res.status(200).json(rows)
            : res.status(400).json("ข้อมูลไม่ถูกต้อง");
        }
      });
    }
    // throw new Error("file is not found.");
  } catch (e) {
    console.log(e);
    // return res.status(500).send("error data!");
  }
});

app.put("/update/:id", async (req, res) => {
  console.log("idshow", req.params.id);
  const [rows, fileds] = await pool.query(
    `UPDATE product SET product_name = "${req.body.product_name}", stock_left =  "${req.body.stock_left}", category = "${req.body.category}" WHERE id = ${req.params.id}`
  );
  rows.affectedRows > 0
    ? res.status(200).json(rows.affectedRows)
    : res.status(400).send("ข้อมูลไม่ถูกต้อง");
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
