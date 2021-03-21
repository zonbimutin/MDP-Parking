const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const HostSchema = Schema({
    banName: {
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