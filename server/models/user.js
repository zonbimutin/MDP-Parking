const mongoose = require("mongoose");
const Customer = require("../models/customer");
const Host     = require("../models/host");
const Schema   = mongoose.Schema;

const UserSchema = Schema({
    username: {
      type: String,
      require: true,
      trim: true,
      unique: true
    },
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
<<<<<<< HEAD
    wishlist: [
      {
        parkingId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Parking",
          unique: true
        }
      }
    ],
    host: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Host",
=======

    photo: {
        type: String,
        require: true,
>>>>>>> server
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
        enum: ["Active", "Inactive"],
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

module.exports = mongoose.model("User", UserSchema);