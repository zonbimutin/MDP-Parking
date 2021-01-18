const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = Schema({

    idUser: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "User"
    },
    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Parking"
    },
    bookingStatus: {
        type: String,
        enum: ["active", "canceled", "validation"],
        default: "validation"
    },
    startDate: {
        type: Date,
        require: true
    },
    endDate: {
        type: Date,
        require: true
    },
    createAt: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model("Booking", BookingSchema);