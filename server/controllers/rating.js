const Rating   = require("../models/rating");
const Customer = require("../models/customer");
const Host     = require("../models/host");
const Booking  = require("../models/booking");

async function createRating (input, ctx) {
    const rating = await Rating();
    return rating;
}

async function editRating (id) {
    const rating = await Rating.updateOne();
    return rating;
}

async function deleteRating (id) {
    const rating = await Rating.deleteOne();
    return rating;
}

async function getOneRating (id) {
    const rating = await Rating.findOne();
    return rating;
}

async function getRatings () {
    const ratings = await Rating.find();
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
    const booking = await Booking.find();
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