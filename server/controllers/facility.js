const Parking  = require('../models/parking');
const Facility = require('../models/facility');

async function index (req, res, next) {
    const facilities = await Facility.find({});
    res.status(200).json(facilities);
}

async function newFacility (req, res, next) {
    const newFacility = new Facility(req.body);
    const facility = await newFacility.save();
    res.status(201).json(facility);
}

async function getFacility (req, res, next) {
    const { facilityId } = req.params;
    const facility = await Facility.findById(facilityId);
    res.status(200).json(facility);
}

async function replaceFacility (req, res, next) {
    const { facilityId } = req.params;
    const newFacility = req.body;
    const result = await Facility.findByIdAndUpdate(facilityId, newFacility);
    res.status(200).json({ success: true });
}

async function updateFacility (req, res, next) {
    const { facilityId } = req.params;
    const newFacility = req.body;
    const result = await Facility.findByIdAndUpdate(facilityId, newFacility);
    res.status(200).json({ success: true });
}

async function getFacilityParking (req, res, next) {
    const { facilityId } = req.params;
    const facility = await Facility.findById(facilityId);
    console.log('facility', facility);
}

async function newFacilityParking (req, res, next) {
    const { parkingId } = req.params;
    const newFacility = new Facility(req.body);
    const parking = await Parking.findById(parkingId);

    newFacility.parking = parking;
    await newFacility.save();
    parking.facilities.push(newFacility);
    await parking.savee();
    res.status(201).json(newFacility);
}

module.exports = {
    index,
    newFacility,
    getFacility,
    replaceFacility,
    updateFacility,
    getFacilityParking,
    newFacilityParking,
}