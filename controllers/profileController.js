const userProfile = require("../model/userProfile");
const mongoose = require("mongoose");

const myProfile = async (req, res) => {
  console.log(req._id);
  if (!req._id) return res.sendStatus(204);
  try {
    const profile = await userProfile.findOne({ userId: req._id });
    console.log(profile);
    if (!profile)
      return res.status(204).json({ message: "No one is logged in" });
    res.json(profile);
  } catch (error) {
    console.error("Error fetching your profile: ", error);
    res.status(500).json({ message: "Server Error" });
  }
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
