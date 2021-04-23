const Parking           = require('../models/parking');
const ParkingFacilities = require("../models/parking_space_facilities");
const Facility          = require('../models/facility');

exports.createFacility = (req, res, next) => {
    delete req.body._id;
    const facility = new Facility({ ...req.body });

    facility.save()
            .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
            .catch(error => res.status(400).json({ error }));
};

exports.editFacility = (req, res, next) => {
    Facility.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }));
};

exports.deleteFacility = (req, res, next) => {
    Facility.deleteOne({ _id: req.params.id })
            .then(()     => res.status(200).json({message: 'Objet suprimé'}))
            .catch(error => res.status(400).json({ error }));
};

exports.getOneFacility = (req, res, next) => {
    Facility.findOne({ _id: req.params.id })
            .then(facility => res.status(200).json(facility))
            .catch(error   => res.status(404).json({ error }));
};

exports.getFacilities = (req, res, next) => {
    Facility.find()
            .then(facilities => res.status(200).json(facilities))
            .catch(error => res.status(400).json({ error }))
};

exports.getParkingFacilities = (req, res, next) => {
    ParkingFacilities.find()
                     .then(parkingFacilities => res.status(200).json(parkingFacilities))
                     .catch(error    => res.status(400).json({ error }));
};

/*
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
}*/