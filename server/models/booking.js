const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const BookingSchema = Schema({
<<<<<<< HEAD

    userId: {
=======
    idCustomer: {
>>>>>>> server
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },
<<<<<<< HEAD
    parkingId: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Parking"
    },
    bookingStatus: {
        type: String,
        enum: ["active", "canceled", "validation"],
        default: "active"
=======

    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parking',
>>>>>>> server
    },

    startBooking: {
        type: Date,
        require: true,
    },

    endBooking: {
        type: Date,
        require: true,
    },

    status: {
        type: String,
        require: true
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