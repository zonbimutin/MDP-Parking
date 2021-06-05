const Parking           = require('../models/parking');
const ParkingFacilities = require("../models/parking_space_facilities");
const Facility          = require('../models/facility');

async function createFacility (input, ctx) {
    const facility = await Facility();
    return facility;
}

async function editFacility (id) {
    const facility = await Facility.findByIdAndUpdate(id).populate("idParking");
    return facility;
}

async function deleteFacility (id) {
    const facility = await Facility.findByIdAndDelete(id).populate("idParking");
    return facility;
}

async function getOneFacility (id) {
    const facility = await Facility.findById(id).populate("idParking");
    return facility;
}

async function getFacilities () {
    const facilities = await Facility.find().populate("idParking");
    return facilities;
}

async function getParkingFacilities (idParking) {
    const parkingFacilities = await ParkingFacilities.find({ idParking }).populate("idParking");        
    return parkingFacilities;
}

module.exports = {
    createFacility,
    editFacility,
    deleteFacility,
    getOneFacility,
    getFacilities,
    getParkingFacilities,
}