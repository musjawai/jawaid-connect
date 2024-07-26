const userProfile = require("../model/userProfile");

const myProfile = async (req, res) => {
  console.log("hello");
  const profile = await userProfile.findOne({ _id: req._id });
  if (!profile) return res.status(204).json({ message: "No one is logged in" });
  res.json(profile);
};

const viewProfile = async (req, res) => {
  if (!req?.params.user)
    return res.status(400).json({ message: "Username required" });
  const profile = await userProfile.findOne({ username: req.params.user });
  if (!profile)
    return res.status(204).json({ message: `$(user) does not exist` });
  res.json(profile);
};

module.exports = { viewProfile, myProfile };
