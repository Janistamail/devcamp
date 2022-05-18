const express = require("express");

const mysql = require("mysql2/promise");

const app = express();

app.use("/api/users", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "devCap2", // <== ระบุ database ให้ถูกต้อง
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  try {
    const users = await connection.query("SELECT * from user");
    res.json(users[0]);
    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
