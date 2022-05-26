var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const middleware = require("./middleware");

router.get("/", middleware, function (req, res) {
  let token = req.headers.authorization;
  console.log(token);
  res.send([{ item: "Product A selected" }, { item: "Product B selected" }]);
  // if (!token) {
  //   res.status(401).send("Unauthorized");
  // } else {
  //   try {
  //     // remove 'Bearer' prefix to validate pure token value
  //     const decoded = jwt.verify(
  //       token.replace("Bearer", "").trim(),
  //       "myprivatekey"
  //     );
  //     console.log(decoded);

  //     res.send([
  //       { item: "Product A selected" },
  //       { item: "Product B selected" },
  //     ]);
  //   } catch (e) {
  //     res.status(401).send("Unauthorized");
  //   }
  // }
});

module.exports = router;
