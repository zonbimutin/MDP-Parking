const Parking           = require('../models/parking');
const ParkingFacilities = require("../models/parking_space_facilities");
const Facility          = require('../models/facility');

async function createFacility (input, ctx) {
    const facility = await Facility();
    return facility;
}

async function editFacility (id) {
    const facility = await Facility.updateOne();
    return facility;
}

async function deleteFacility (id) {
    const facility = await Facility.find();
    return facility;
}

async function getOneFacility (id) {
    const facility = await Facility.findOne(id);
    return facility;
}

async function getFacilities () {
    const facilities = await Facility.find();
    return facilities;
}

async function getParkingFacilities () {
    const parkingFacilities = await ParkingFacilities.find();        
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