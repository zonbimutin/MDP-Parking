const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const LikeSchema = Schema({
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
});

module.exports = mongoose.model("Like", LikeSchema);