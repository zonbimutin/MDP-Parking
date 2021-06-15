<<<<<<< HEAD
const Host = require('../models/host');
const User = require('../models/user');

require("dotenv").config({ path : '.env'});

const stripe = require('stripe')(process.env.STRIPE_KEY);

async function register( input, ctx ) {

    // Verify user
    const { id } = ctx.user
    let user = await User.findOne({_id: id})
    if(!user) throw new Error("Invalid user!");
    // Verify user host 
    if(user.host) throw new Error("User is a host!");
=======
const User    = require("../models/user");
const Host    = require("../models/host");
const Rating  = require("../models/rating");
const Parking = require('../models/parking');

async function createHost(input, ctx) {
    // Verify user
    const { id } = ctx.user;
    let user = await User.findOne({_id: id});

    if(!user)
        throw new Error("Erreur, l'utilisateur est invalide");
    // Verify user host 
    if(user.host)
        throw new Error("L'utilisateur est un hote");
>>>>>>> server

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
<<<<<<< HEAD
    if(!account) throw new Error("Cannot create stripe account");
=======
    
    if(!account)
        throw new Error("Erreur, impossible de créer un compte stripe");
>>>>>>> server

    // create Host
    try {
        // Create host
        const host = new Host();
        // Set Stripe account
<<<<<<< HEAD
        host.stripeAccount = account
=======
        host.stripeAccount = account;
>>>>>>> server
        // Save host
        host.save();
        // Update user host
        await User.findByIdAndUpdate(id, { host: host._id });
        user.save();

        return host;
<<<<<<< HEAD

    } catch (error) {
        throw new Error('No se pudo crear el parking')
    }
   
}

async function getAll(){
    
    return null;

}

module.exports = {
    register,
    getAll,
}
=======
    } catch (error) {
        throw new Error("Erreur, Le parking n'a pas pu être créé");
    } 
}

async function editHost (id) {
    const host = await Host.findByIdAndUpdate(id).populate("idUser");
    return host;
}

async function deleteHost (id) {
    const host = await Host.findByIdAndDelete(id).populate("idUser");
    return host;
}

async function getOneHost (id) {
    const host = await Host.findById(id).populate("idUser");
    return host;
}

async function getHosts () {
    const host = await Host.find();
    return host;
}

async function getRatings () {
    const ratings = await Rating.find().populate("idBooking");
    return ratings;
}

async function getParkings () {
    const parkings = await Parking.find().populate("idParking");
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
>>>>>>> server
