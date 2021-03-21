const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const PersonSchema = Schema({
    firstname: {
        type: String,
        require: true,
    },

    lastname: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true,
    },

    photo: {
        type: String,
        require: true,
    },

    birthDate: {
        type: Date,
    },

    phone_number: {
        type: String,
        require: true,
    },

    gender: {
        type: String,
        enum: ["Homme", "Femme"],
    },

    accountStatus: {
        type: String,
        enum: ["Active","Inactive"],
        default: "ACTIVE",
    },

    updatedAt: {
        type: Date,
        default: Date.now(),
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("Person", PersonSchema);