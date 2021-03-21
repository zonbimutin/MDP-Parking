const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ParkingFacilitiesSchema = Schema({
    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parking',
    },

    idFacilities: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Facilities',
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

module.exports = mongoose.model("ParkingFacilities", ParkingFacilitiesSchema);