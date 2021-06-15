const Rating   = require("../models/rating");
const Customer = require("../models/customer");
const Host     = require("../models/host");
const Booking  = require("../models/booking");

async function createRating (input, ctx) {
    const rating = await Rating();
    return rating;
}

async function editRating (id) {
    const rating = await Rating.findByIdAndUpdate(id).populate("idHost").populate("idCustomer");
    return rating;
}

async function deleteRating (id) {
    const rating = await Rating.findByIdAndDelete(id).populate("idHost").populate("idCustomer");
    return rating;
}

async function getOneRating (id) {
    const rating = await Rating.findById(id).populate("idHost").populate("idCustomer");
    return rating;
}

async function getRatings () {
    const ratings = await Rating.find().populate("idHost").populate("idCustomer");
    return ratings;
}

async function getCustomers () {
    const customers = await Customer.find();
    return customers;
}

async function getHosts () {
    const host = await Host.find();
    return host;
}

async function getBookings (){
    const booking = await Booking.find().populate("idParking");
    return booking;
}

module.exports = {
    createRating,
    editRating,
    deleteRating,
    getOneRating,
    getRatings,
    getCustomers,
    getHosts,
    getBookings,
}