const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// username: Unique, required.
// firstName: Required.
// lastName: Required.
// bio: Optional.
// profilePicture: URL to the profile picture.
// location: Optional.
// website: Optional.
// followersCount: Default 0.
// followingCount: Default 0.
// tweetsCount: Default 0.
// createdAt: Timestamp of profile creation.
// updatedAt: Timestamp of last profile update

const userProfileSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  followerCount: {
    type: Number,
    default: 0,
  },
  followingCount: {
    type: Number,
    default: 0,
  },
  tweetsCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("userProfile", userProfileSchema);
