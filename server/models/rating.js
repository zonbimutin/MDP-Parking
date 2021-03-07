const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const RatingSchema = Schema({
    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Parking"
    },

    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },

    note: {
        type: Number,
        require: true
    },

    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Rating", RatingSchema);