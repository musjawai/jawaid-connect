const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// username: String, unique, required
// email: String, unique, required
// firstName: String, required
// lastName: String, required
// password: String, required
// createdAt: Date, default to current date
// updatedAt: Date, default to current date, updated on modification

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
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
  refreshToken: String,
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("User", userSchema);
