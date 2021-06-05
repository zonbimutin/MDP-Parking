const Parking           = require('../models/parking');
const Review            = require("../models/review");
const Host              = require("../models/host");
const Booking           = require("../models/booking");
const Location          = require("../models/location");
const ParkingFacilities = require("../models/parking_space_facilities");

async function register(input, ctx) {
    const newParking = input;

    //TODO: verify host
    if(!ctx.user.host) throw new Error("L'utilisateur n'est pas considéré comme un hôte");

    // Add host id from context
    newParking.user = ctx.user.id

    // format inputs 
    newParking.address = newParking.address.toLowerCase();

    // Keep parking in database
    try {
        const parking = new Parking(newParking);
        parking.save();
        return parking;
    } catch (error) {
        throw new Error("Erreur, le parking n'a pas pu être créé");
    }
}

async function editParking (id) {
    const parking = await Parking.findByIdAndUpdate(id).populate("idHost");
    return parking;
}

async function deleteParking (id) {
    const parking = await (await Parking.findByIdAndDelete(id).populate("idHost")).populated("idCustomer").populate("idReview");
    return parking;
}

async function getOneParking (id) {
    const parking = await Parking.findById(id).populate("idHost").populate("idCustomer");
    return parking;
}

async function getParkings () {
    const parkingFound = await Parking.find().populate("idHost").populate("idCustomer");
    return parkingFound;
}

async function getReviews () {
    const reviews = await Review.find().populate("idParking").populate("idCustomer");
    return reviews;
}

async function getBookings () {
    const bookings = await Booking.find().populate("idParking").populate("idCustomer");
    return bookings;
}

async function getHosts () {
    const hosts = await Host.find().populate("idParking");
    return hosts;
}

async function getLocations () {
    const locations = await Location.find().populate("idParking");
    return locations;
}

async function getParkingFacilities () {
    const parkingFacilities = await ParkingFacilities.find().populate("idParking");        
    return parkingFacilities;
}

module.exports = {
    register,
    editParking,
    deleteParking,
    getOneParking,
    getParkings,
    getReviews,
    getBookings,
    getHosts,
    getLocations,
    getParkingFacilities,
};