const Rating   = require("../models/rating");
const Customer = require("../models/customer");
const Host     = require("../models/host");
const Booking  = require("../models/booking");

exports.createRating = (req, res, next) => {
    delete req.body._id;
    const rating = new Rating({
        ...req.body
    });

    rating.save()
        .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.editRating = (req, res, next) => {
    Rating.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteRating = (req, res, next) => {
    Rating.deleteOne({ _id: req.params.id })
        .then(()     => res.status(200).json({message: 'Objet suprimé'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneRating = (req, res, next) => {
    Rating.findOne({ _id: req.params.id })
        .then(rating => res.status(200).json(rating))
        .catch(error => res.status(404).json({ error }));
};

exports.getRatings = (req, res, next) => {
    Rating.find()
        .then(ratings => res.status(200).json(ratings))
        .catch(error  => res.status(400).json({ error }))
};

exports.getCustomers = (req, res, next) => {
    Customer.find()
        .then(customers => res.status(200).json(customers))
        .catch(error   => res.status(400).json({ error }))
};

exports.getHosts = (req, res, next) => {
    Host.find()
        .then(hosts => res.status(200).json(hosts))
        .catch(error   => res.status(400).json({ error }))
};

exports.getBookings = (req, res, next) => {
    Booking.find()
        .then(bookings => res.status(200).json(bookings))
        .catch(error   => res.status(400).json({ error }))
};