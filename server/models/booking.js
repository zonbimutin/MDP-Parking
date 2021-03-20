const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const BookingSchema = Schema({
    id_customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    id_parkingspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingSpace',
    },

    start_booking: {
        type: Date,
        require: true,
    },

    end_booking: {
        type: Date,
        require: true,
    },

    date: {
        type: String,
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

module.exports = mongoose.model("Booking", BookingSchema);