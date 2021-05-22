const mongoose = require("mongoose");
const User     = require("./user");
const Schema   = mongoose.Schema;

/*const CustomerSchema = Schema({
    paymentType: {
        type: String,
        require: true,
    },

    cardNumber: {
        type: String,
        require: true,
    },

    securityCode: {
        type: String,
        require: true,
    },

    nameOnCard: {
        type: String,
        require: true,
    },    

    updatedAt: {
        type: Date,
        default: Date.now(),
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
});*/

function extendSchema (Schema, definition, options) { 
    return new mongoose.Schema( Object.assign({}, Schema.obj, definition), options ); 
}

const CustomerSchema = extendSchema(User, {
    paymentType: {
        type: String,
        require: true,
    },

    cardNumber: {
        type: String,
        require: true,
    },

    securityCode: {
        type: String,
        require: true,
    },

    nameOnCard: {
        type: String,
        require: true,
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

module.exports = mongoose.model("Customer", CustomerSchema);