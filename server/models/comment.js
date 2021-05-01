const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    parkingId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Parking",
    },
    comment: {
        type: String,
        require: true
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  });
  
  module.exports = mongoose.model("Comment", CommentSchema);