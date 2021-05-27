const Customer = require("../models/customer");
const Parking  = require("../models/parking");
const Review   = require("../models/review");

async function createReview (input, ctx) {
    const review = await Review();
    return review;
}

async function editReview (id) {
    const review = await Review.updateOne();
    return review;
}

async function deleteReview (id) {
    const review = await Review.deleteOne();
    return review;
}

async function getOneReview (id) {
    const review = await Review.findOne();
    return review;
}

async function getReviews () {
    const review = await Review.find();
    return review;
}

async function getCustomers () {
    const customers = await Customer.find();
    return customers;
}

async function getParkings () {
    const parkingFound = await Parking.find();
    return parkingFound;
}

module.exports = {
    createReview,
    editReview,
    deleteReview,
    getOneReview,
    getReviews,
    getCustomers,
    getParkings,
};