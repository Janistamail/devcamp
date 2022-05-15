const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/Portfolio", (req, res) => {
  res.render("Portfolio");
});

app.get("/register_form", (req, res) => {
  res.render("Portfolio");
});

app.get("/ContactMe", (req, res) => {
  res.render("ContactMe");
});

app.get("/Skill", (req, res) => {
  res.render("Skill");
});

// custom 404 page
app.use(function (req, res) {
  res.type("text/plain");
  res.status(404);
  res.send("404 - Not Found");
});

app.listen(3000, () => {
  console.log("server started on port 3000!");
});
