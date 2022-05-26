var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authRouter = require("./routes/auth");
var profileRouter = require("./routes/profile");

var app = express();

// const myMiddleWare = async (req, res, next) => {
//   let token = req.headers.authorization;
//   console.log(token);
//   if (!token) {
//     res.status(401).send("Unauthorized");
//   } else {
//     try {
//       // remove 'Bearer' prefix to validate pure token value
//       const decoded = jwt.verify(
//         token.replace("Bearer", "").trim(),
//         "codecamp_very_$secr3T!"
//       );
//       console.log(decoded);
//       // query user-specific information with decoded as a JSON object

//       res.send([
//         { item: "Product A selected" },
//         { item: "Product B selected" },
//       ]);
//     } catch (e) {
//       res.status(401).send("Unauthorized");
//     }
//   }
// };

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
// app.use(myMiddleWare);
app.use("/api/profile", profileRouter);

module.exports = app;
