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

    // Create Stripe account
    const account = await stripe.accounts.create({
        type: 'custom',
        country: 'US',
        email: user.email,
        capabilities: {
          card_payments: {requested: true},
          transfers: {requested: true},
        },
    });
    if(!account) throw new Error("Cannot create stripe account");
    console.log(account)

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
        console.log(user)
        user.save();
        return host;

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