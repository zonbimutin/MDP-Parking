const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const HostEarningsSchema = Schema({
    id_payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
    },

    earnings_amount: {
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

module.exports = mongoose.model("HostEarnings", HostEarningsSchema);