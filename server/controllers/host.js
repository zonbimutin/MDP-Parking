const Host = require('../models/host');
const User = require('../models/user');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config({ path : '.env'});

const stripe = require('stripe')(process.env.STRIPE_KEY);

function createToken(user, SECRET_KEY, expiresIn){
    const {id, username, firstname, lastname, email, host} = user;
    const payload = {
        id,
        host,
        username,
        firstname,
        lastname,
        email,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}


async function register( ctx ) {

    // Verify user
    const { id } = ctx.user
    let user = await User.findOne({_id: id})
    if(!user) throw new Error("Utilisateur invalide!");
    // Verify user host 
    if(user.host) throw new Error("L'utilisateur est déjà enregistré comme annonceur!");

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
    if(!account) throw new Error("Impossible de créer un compte Stripe");

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

        let tokenuser = ctx.user
        tokenuser.host = host._id
        
        return {
            token: createToken(tokenuser, process.env.SECRET_KEY, "24h")
        };

    } catch (error) {
        throw new Error(`Impossible d'enregistrer comme annonceur!`)
    }
   
}

async function getAll(){
    
    return null;

}

module.exports = {
    register,
    getAll,
}