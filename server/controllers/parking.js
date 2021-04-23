const Parking           = require('../models/parking');
const Review            = require("../models/review");
const Host              = require("../models/host");
const Booking           = require("../models/booking");
const Location          = require("../models/location");
const ParkingFacilities = require("../models/parking_space_facilities");

async function register( input, ctx ) {

    const newParking = input;

    // Add user id from context
    newParking.idUser = ctx.user.id

    // format inputs 
    newParking.streetName = newParking.streetName.toLowerCase();

    // Guardar el parking en la DB
    try {
        const parking = new Parking(newParking);
        parking.save();
        return parking;
    } catch (error) {
        throw new Error('No se pudo crear el parking')
    }
}

/* 
async function getAll(){    
    const parkingFound = await Parking.find();
    console.log(parkingFound);
    return parkingFound;
}

module.exports = {
    register,
    getAll,
    getParkingCustomer,
    newParkingCustomer,
}
*/

exports.createParking = (req, res, next) => {
    delete req.body._id;
    const parking = new Parking({ ...req.body });

    parking.save()
           .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
           .catch(error => res.status(400).json({ error }));
};

exports.editParking = (req, res, next) => {
    Parking.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
           .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
           .catch(error => res.status(400).json({ error }));
};

exports.deleteParking = (req, res, next) => {
    Parking.deleteOne({ _id: req.params.id })
           .then(()     => res.status(200).json({message: 'Objet suprimé'}))
           .catch(error => res.status(400).json({ error }));
};

exports.getOneParking = (req, res, next) => {
    Parking.findOne({ _id: req.params.id })
           .then(facility => res.status(200).json(facility))
           .catch(error   => res.status(404).json({ error }));
};

exports.getParkings = (req, res, next) => {
    Parking.find()
           .then(parkings => res.status(200).json(parkings))
           .catch(error   => res.status(400).json({ error }));
};

exports.getReviews = (req, res, next) => {
    Review.find()
          .then(reviews => res.status(200).json(reviews))
          .catch(error  => res.status(400).json({ error }));
};

exports.getBookings = (req, res, next) => {
    Booking.find()
           .then(bookings => res.status(200).json(bookings))
           .catch(error   => res.status(400).json({ error }))
};

exports.getHosts = (req, res, next) => {
    Host.find()
        .then(hosts  => res.status(200).json(hosts))
        .catch(error => res.status(400).json({ error }))
};

exports.getLocations = (req, res, next) => {
    Location.find()
            .then(locations => res.status(200).json(locations))
            .catch(error    => res.status(400).json({ error }))
};

exports.getParkingFacilities = (req, res, next) => {
    ParkingFacilities.find()
                     .then(parkingFacilities => res.status(200).json(parkingFacilities))
                     .catch(error    => res.status(400).json({ error }));
};

module.exports = {
    register,
}