const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HostSchema = Schema({
    stripeAccount: {
        type: Schema.Types.Mixed,
        require: true
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  });
  
  module.exports = mongoose.model("Host", HostSchema);