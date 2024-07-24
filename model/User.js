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
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  createdAt: {
    required: true,
    default: Date.now,
  },
  updatedAt: {
    required: true,
    default: Date.now,
  },
  refreshToken: String,
});

module.exports = mongoose.model("User", userSchema);
