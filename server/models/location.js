const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const LocationSchema = Schema({
    country: {
        type: String,
        require: true,
    },

    state: {
        type: String,
        require: true,
    },

    city: {
        type: String,
        require: true,
    },

    zipcode: {
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

module.exports = mongoose.model("Location", LocationSchema);