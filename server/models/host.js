const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const HostSchema = Schema({
    bank_name: {
        type: String,
        require: true,
    },

    account_type: {
        type: String,
        require: true,
    },

    account_number: {
        type: String,
        require: true,
    },

    routing_number: {
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