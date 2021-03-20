const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ParkingSpaceSchema = Schema({
    id_location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },

    id_host: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Host',
    },

    street_number: {
        type: String,
        require: true,
    },

    street_name: {
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

module.exports = mongoose.model("ParkingSpace", ParkingSpaceSchema);