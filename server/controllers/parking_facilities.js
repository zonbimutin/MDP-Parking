const ParkingFacilities = require("../models/parking_space_facilities");
const Parking           = require('../models/parking');
const Facility          = require('../models/facility');

exports.createParkingFacilities = (req, res, next) => {
    delete req.body._id;
    const parkingFacilities = new ParkingFacilities({
        ...req.body
    });

    parkingFacilities.save()
        .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.editParkingFacilities = (req, res, next) => {
    ParkingFacilities.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteParkingFacilities = (req, res, next) => {
    ParkingFacilities.deleteOne({ _id: req.params.id })
        .then(()     => res.status(200).json({message: 'Objet suprimé'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneParkingFacilities = (req, res, next) => {
    ParkingFacilities.findOne({ _id: req.params.id })
        .then(parkingFacility => res.status(200).json(parkingFacility))
        .catch(error   => res.status(404).json({ error }));
};

exports.getParkingFacilities = (req, res, next) => {
    ParkingFacilities.find()
        .then(parkingFacilities => res.status(200).json(parkingFacilities))
        .catch(error    => res.status(400).json({ error }));
};

exports.getParkings = (req, res, next) => {
    Parking.find()
        .then(parkings => res.status(200).json(parkings))
        .catch(error   => res.status(400).json({ error }));
};

exports.getFacilities = (req, res, next) => {
    Facility.find()
        .then(facilities => res.status(200).json(facilities))
        .catch(error => res.status(400).json({ error }))
};