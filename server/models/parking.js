const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingShema = Schema({
    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User",
    },
    parkingNumber: {
        type: Number
    },
    streetNumber: {
        type: Number,
        require: true,
        trim: true,
    },
    streetName: {
        type: String,
        require: true,
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
        enum: ['annecy'],
        default: 'annecy'
    },
    createAt: {
        type: Date,
        default: Date.now(),
      },

});

module.exports = mongoose.model("Parking", ParkingShema);