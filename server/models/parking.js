const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ParkingSchema = Schema({
    idLocation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },

    idHost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
    },

    streetNumber: {
        type: String,
        require: true,
    },

    streetName: {
        type: String,
        require: true,
    },

    availability: {
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

module.exports = mongoose.model("Parking", ParkingSchema);