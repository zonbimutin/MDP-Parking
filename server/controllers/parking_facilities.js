const ParkingFacilities = require("../models/parking_space_facilities");
const Parking           = require('../models/parking');
const Facility          = require('../models/facility');

async function createParkingFacilities (input, ctx) {
    const parkingFacilities = await ParkingFacilities();
    return parkingFacilities;
}

async function editParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.findByIdAndUpdate(id).populate("idParking");
    return parkingFacilities;
}

async function deleteParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.findByIdAndDelete(id).populate("idParking");
    return parkingFacilities;
}

async function getOneParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.findOne(id).populate("idParking");
    return parkingFacilities;
}

async function getParkingFacilities () {
    const parkingFacilities = await ParkingFacilities.find().populate("idParking");
    return parkingFacilities;
}

async function getParkings () {
    const parkingFound = await Parking.find().populate("idHost");
    return parkingFound;
}

async function getFacilities () {
    const facilities = await Facility.find().populate("idParking");
    return facilities;
}

module.exports = {
    createParkingFacilities,
    editParkingFacilities,
    deleteParkingFacilities,
    getOneParkingFacilities,
    getParkingFacilities,
    getParkings,
    getFacilities,
};