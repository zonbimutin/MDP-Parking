const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ParkingSpaceFacilitiesSchema = Schema({
    id_parkingspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingSpace',
    },

    id_facilities: {
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

module.exports = mongoose.model("ParkingSpaceFacilities", ParkingSpaceFacilitiesSchema);