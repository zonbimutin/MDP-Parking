const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkingShema = Schema({
    host: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Host",
    },
    address: {
        type: String,
        require: true
    },
    coordinates: {
        longitud: {type: Number, require: true},
        latitud: {type: Number, require: true}
    },
    parkingNumber: {
        type: Number
    },
    zipCode: {
        type: Number,
        min: 5,
        trim: true,
        default: 74000,
        require: true,
    },
    country: {
        type: String,
        enum: ['france'],
        default: 'france',
        require: true,
    },
    city: {
        type: String,
        require: true,
        enum: ['annecy'],
        default: 'annecy'
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                require: true,
                ref: "User",
            },
            comment: {
                type: String, 
                require: true
            },
            note: {
                type: Number,
                enum: [1,2,3,4,5]
            },
            createAt: {
                type: Date,
                default: Date.now(),
            }
        }
    ],
    images: [
        { 
            img: { data: Buffer, contentType: String }
        }
    ],
    createAt: {
        type: Date,
        default: Date.now(),
    }

});

module.exports = mongoose.model("Parking", ParkingShema);