const User = require("../model/User");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403);
  console.log;

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser._id.toString() !== decoded._id) {
      return res.sendStatus(403);
    }
    const accessToken = jwt.sign(
      { _id: decoded._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
