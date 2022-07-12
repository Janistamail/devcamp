const express = require("express"); //เรียกใช่้ module
const app = express(); // เรียกใข้ express

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("test World!");
});

app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(3000, () => {
  console.log("server started on port 3000!"); //ขึ้นที่ debug console เพระา run serverside
});
