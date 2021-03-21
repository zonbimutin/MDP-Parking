const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const BookingSchema = Schema({
    idCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parking',
    },

    startBooking: {
        type: Date,
        require: true,
    },

    endBooking: {
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