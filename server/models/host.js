const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HostSchema = Schema({
    createAt: {
      type: Date,
      default: Date.now(),
    },
  });
  
  module.exports = mongoose.model("Host", HostSchema);