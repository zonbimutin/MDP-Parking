const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CustomerSchema = Schema({
    paymentType: {
        type: String,
        require: true,
    },

    cardNumber: {
        type: String,
        require: true,
    },

    securityCode: {
        type: String,
        require: true,
    },

    nameOnCard: {
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

module.exports = mongoose.model("Customer", CustomerSchema);