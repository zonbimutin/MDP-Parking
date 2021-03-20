const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RatingSchema = Schema({
    id_booking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },

    id_customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    id_host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
    },

    customer_rating: {
        type: String,
        require: true,
    },

    customer_comment: {
        type: String,
        require: true,
    },

    host_rating: {
        type: Boolean,
        require: true,
    },

    host_comment: {
        type: Boolean,
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

module.exports = mongoose.model("Rating", RatingSchema);