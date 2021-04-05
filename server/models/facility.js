const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const FacilitySchema = Schema({
    name: {
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

module.exports = mongoose.model("Facility", FacilitySchema);