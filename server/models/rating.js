const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RatingSchema = Schema({
    idBooking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },

    idCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    idHost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
    },

    customerRating: {
        type: String,
        require: true,
    },

    customerComment: {
        type: String,
        require: true,
    },

    hostRating: {
        type: Boolean,
        require: true,
    },

    hostComment: {
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