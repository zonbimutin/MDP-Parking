const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const CommentSchema = Schema({
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

    idBooking: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Booking"
    },

    comment: {
        type: Text,
        require: true
    },

    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Comment", CommentSchema);