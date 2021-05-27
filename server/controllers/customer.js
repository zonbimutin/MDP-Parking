const User     = require("../models/user");
const Customer = require("../models/customer");
const Rating   = require("../models/rating");
const Booking  = require("../models/booking");
const Review   = require("../models/review");

async function createCustomer (input, ctx) {
    const customer = await Customer;
    return customer;
}

async function editCustomer (id) {
    const customers = await Customer.find();
    return customers;
}

async function deleteCustomer (id) {
    const customers = await Customer.find();
    return customers;
}

async function getOneCustomer () {
    const customers = await Customer.findOne(id);
    return customers;
}

async function getCustomers () {
    const customers = await Customer.find();
    return customers;
}

async function getBookings (){
    const booking = await Booking.find();
    return booking;
}

async function getRatings () {
    const ratings = await Rating.find();
    return ratings;
}

async function getReviews () {
    const reviews = await Review.find();
    return reviews;
}

module.exports = {
    createCustomer,
    editCustomer,
    deleteCustomer,
    getOneCustomer,
    getCustomers,
    getBookings,
    getRatings,
    getReviews,
};