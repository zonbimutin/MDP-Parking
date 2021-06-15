const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RefundSchema = Schema({
    idPayment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },

    refundDate: {
        type: Date,
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

module.exports = mongoose.model("Refund", RefundSchema);