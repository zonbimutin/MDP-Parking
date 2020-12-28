const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    avatar: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    isHost: {
      type: Boolean,
      default: false,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  });
  
  module.exports = mongoose.model("User", UserSchema);