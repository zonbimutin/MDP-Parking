const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CustomerSchema = Schema({
    payment_type: {
        type: String,
        require: true,
    },

    card_number: {
        type: String,
        require: true,
    },

    security_code: {
        type: String,
        require: true,
    },

    name_on_card: {
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