const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ReviewSchema = Schema({

    id_customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    id_parkingspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParkingSpace',
    },

    comments: {
        type: String,
        require: true,
    },

    date: {
        type: Date,
        require: true,
        default: Date.now(),
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

module.exports = mongoose.model("Review", ReviewSchema);