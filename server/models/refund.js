const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RefundSchema = Schema({
    id_payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },

    refund_date: {
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