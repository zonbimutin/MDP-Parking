const User    = require("../models/user");
const Host    = require("../models/host");
const Rating  = require("../models/rating");
const Parking = require('../models/parking');

async function createHost() {
    // Verify user
    const { id } = ctx.user
    let user = await User.findOne({_id: id})

    if(!user) throw new Error("Utilisateur invalide");
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
        host.stripeAccount = account
        // Save host
        host.save();
        // Update user host
        await User.findByIdAndUpdate(id, { host: host._id });
        user.save();

        return host;

    } catch (error) {
        throw new Error('No se pudo crear el parking')
    } 
}

async function editHost (id) {
    const host = await Host;
    return host;
}

async function deleteHost (id) {
    const host = await Host.deleteOne();
    return host;
}

async function getOneHost (id) {
    const host = await Host.findOne();
    return host;
}

async function getHosts () {
    const host = await Host.find();
    return host;
}

async function getRatings () {
    const ratings = await Rating.find();
    return ratings;
}

async function getParkings () {
    const parkings = await Parking.find();
    return parkings;
}

module.exports = {
    createHost,
    editHost,
    deleteHost,
    getOneHost,
    getHosts,
    getRatings,
    getParkings,
};