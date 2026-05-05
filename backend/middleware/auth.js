const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json("No token");

  try {
    req.user = jwt.verify(token, "secret123");
    next();
  } catch {
    res.status(400).json("Invalid token");
  }
};
