const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingShema = Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
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
    },
    zipCode: {
        type: Number,
        min: 5,
        trim: true,
        default: 74000,
        require: true,
    },
    country: {
        type: String,
        enum: ['france'],
        default: 'france',
        require: true,
    },
    city: {
        type: String,
        require: true,
        default: 'annecy'
    },
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
    description: {
        type: String,
    },
    access: {
        type: String,
    },
    disponibility: {
        type: Number,
        enum:[24,12],
        require: true,
        default: 12
    },

    prices: {
        single: {
            type: Number,
            require: true,
            default: 12
        },
        multiple: {
            type: Number,
            require: true,
            default: 6
        },
        subscription: {
            type: Number,
            require: true,
            default: 4
        },

    },

    isActive: {
        type: Boolean,
        default: false,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now(),
    }

});

module.exports = mongoose.model("Parking", ParkingShema);