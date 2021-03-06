const mongoose = require("mongoose");
<<<<<<< HEAD
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
=======
const Schema   = mongoose.Schema;
const User     = require("./user");

function extendSchema (Schema, definition, options) { 
    return new mongoose.Schema( Object.assign({}, Schema.obj, definition), options ); 
} 

const HostSchema = extendSchema(User, {
    bankName: {
        type: String,
        require: true,
    },

    accountType: {
        type: String,
        require: true,
    },

    accountNumber: {
        type: String,
        require: true,
    },

    routingNumber: {
        type: String,
        require: true,
    },    

    updatedAt: {
        type: Date,
        default: Date.now(),
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Host", HostSchema);
>>>>>>> server
