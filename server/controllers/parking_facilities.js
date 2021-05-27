const ParkingFacilities = require("../models/parking_space_facilities");
const Parking           = require('../models/parking');
const Facility          = require('../models/facility');

async function createParkingFacilities (input, ctx) {
    const parkingFacilities = await ParkingFacilities();
    return parkingFacilities;
}

async function editParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.updateOne();
    return parkingFacilities;
}

async function deleteParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.deleteOne();
    return parkingFacilities;
}

async function getOneParkingFacilities (id) {
    const parkingFacilities = await ParkingFacilities.findOne();
    return parkingFacilities;
}

async function getParkingFacilities () {
    const parkingFacilities = await ParkingFacilities.find();
    return parkingFacilities;
}

async function getParkings () {
    const parkingFound = await Parking.find();
    return parkingFound;
}

async function getFacilities () {
    const facilities = await Facility.find();
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