const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  let token = req.headers.authorization;
  console.log("test");
  if (!token) {
    res.status(401).send("Unauthorized");
  } else {
    try {
      // remove 'Bearer' prefix to validate pure token value
      const decoded = jwt.verify(
        token.replace("Bearer", "").trim(),
        "myprivatekey"
      );
      console.log(decoded);

      next();
    } catch (e) {
      res.status(401).send("Unauthorized");
    }
  }
};
module.exports = middleware;
