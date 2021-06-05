const User     = require("../models/user");
const Customer = require("../models/customer");
const Rating   = require("../models/rating");
const Booking  = require("../models/booking");
const Review   = require("../models/review");

async function createHost(input, ctx) {
    // Verify user
    const { id } = ctx.user
    let user = await User.findOne({_id: id})

    if(!user) throw new Error("Erreur, utilisateur invalide");
    // Verify user host 
    if(user.host) throw new Error("L'utilisateur est un hote");

    // Create Stripe account
    const account = await stripe.accounts.create({
        type: 'express',
        // country: 'FR',
        // email: user.email,
        // capabilities: {
        //   card_payments: {requested: true},
        //   transfers: {requested: true},
        // },
    });
    
    if(!account) throw new Error("Erreur, impossible de créer un compte stripe");

    // create Host
    try {
        // Create host
        const host = new Host();
        // Set Stripe account
        host.stripeAccount = account;
        // Save host
        host.save();
        // Update user host
        await User.findByIdAndUpdate(id, { host: host._id });
        user.save();

        return host;
    } catch (error) {
        throw new Error("Erreur, le parking n'a pas pu être créé");
    } 
}

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