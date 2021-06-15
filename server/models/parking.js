const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

<<<<<<< HEAD
const ParkingShema = Schema({
    user: {
=======
const ParkingSchema = Schema({
    idLocation: {
>>>>>>> server
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },
<<<<<<< HEAD
    address: {
        type: String,
        require: true
    },
    coordinates: {
        longitud: {type: Number, require: true},
        latitud: {type: Number, require: true}
    },
    parkingNumber: {
        type: Number
=======

    idHost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
    },

    streetNumber: {
        type: String,
        require: true,
>>>>>>> server
    },

    streetName: {
        type: String,
        require: true,
    },

    availability: {
        type: Boolean,
        require: true,
<<<<<<< HEAD
=======
        default: 'annecy'
>>>>>>> client
    },
<<<<<<< HEAD
    images: [
        { 
            data: Buffer, 
            contentType: String 
        }
    ],
    parkingType: [
        {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "ParkingType",

        }
    ],
    bookings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            require: true,
            ref: "Booking",
        }
    ],
    createAt: {
        type: Date,
        default: Date.now(),
    }
=======

    updatedAt: {
        type: Date,
        default: Date.now()
    },
>>>>>>> server

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Parking", ParkingSchema);