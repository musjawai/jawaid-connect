const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  console.log("Reaching");
  const authHeader = req.headers.authorization || req.headers.Authorization;
  console.log(authHeader);
  if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req._id = decoded._id;
    console.log(decoded._id);
    next();
  });
};

module.exports = verifyJWT;
