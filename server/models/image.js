const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ImageSchema = Schema({
    idParking: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Parking"
    },

    name: {
        type: String,
        require: true
    },

    path: {
        type: String,
        require: true
    },
});

module.exports = mongoose.model("Image", ImageSchema);