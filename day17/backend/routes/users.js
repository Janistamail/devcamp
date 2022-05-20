var express = require("express");
var router = express.Router();
var mysql = require("mysql2/promise");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root", // <== ระบุให้ถูกต้อง
    password: "root", // <== ระบุให้ถูกต้อง
    database: "day17", // <== ระบุ database ให้ถูกต้อง
    port: 8889, // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
  });
  try {
    const users = await connection.query(
      "select courses.name as course, instructors.name as teacher from courses left join instructors on instructors.id = courses.teach_by order by courses.id"
    );
    res.json({
      users: users[0],
    });
    await connection.end();
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
