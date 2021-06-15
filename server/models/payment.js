const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const PaymentSchema = Schema({
    idBooking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },

    amount: {
        type: Number,
        require: true,
    },

    updatedAt: {
        type: Date,
        default: Date.now()
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Payment", PaymentSchema);