const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Invalid token" });
      }
      req.user = user;
      next();
    });
    return;
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    const { role } = req.user;
    if (role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Unauthorized access" });
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
