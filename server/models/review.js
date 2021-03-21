const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ReviewSchema = Schema({

    idCustomer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    },

    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Parking',
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