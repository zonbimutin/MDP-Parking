const User    = require("../models/user");
const Host    = require("../models/host");
const Rating  = require("../models/rating");
const Parking = require('../models/parking');

exports.createHost = (req, res, next) => {
    delete req.body._id;
    const host = new Host({
        ...req.body
    });

    host.save()
        .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.editHost = (req, res, next) => {
    Host.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteHost = (req, res, next) => {
    Host.deleteOne({ _id: req.params.id })
        .then(()     => res.status(200).json({message: 'Objet suprimé'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneHost = (req, res, next) => {
    Host.findOne({ _id: req.params.id })
        .then(host   => res.status(200).json(host))
        .catch(error => res.status(404).json({ error }));
};

exports.getHosts = (req, res, next) => {
    Host.find()
        .then(hosts  => res.status(200).json(hosts))
        .catch(error => res.status(400).json({ error }))
};

exports.getRatings = (req, res, next) => {
    Rating.find()
        .then(ratings => res.status(200).json(ratings))
        .catch(error  => res.status(400).json({ error }))
};

exports.getParkings = (req, res, next) => {
    Parking.find()
        .then(parkings => res.status(200).json(parkings))
        .catch(error   => res.status(400).json({ error }));
};

/* async function index(req, res, next) {
    const hosts = await Host.find({});
    res.status(200).json(hosts);
}

async function newHost (req, res, next) {
    const newHost = new Host(req.body);
    const host = await newhost.save();
    res.status(201).json(host);
}

async function getHost (req, res, next) {
    const { hostId } = req.params;
    const host = await Host.findById(hostId);
    res.status(200).json(host);
}

async function replaceHost (req, res, next) {
    const { hostId } = req.params;
    const newhost = req.body;
    const result = await host.findByIdAndUpdate(hostId, newhost);
    res.status(200).json({ success: true });
}

async function updateHost (req, res, next) {
    const { hostId } = req.params;
    const newhost = req.body;
    const result = await Host.findByIdAndUpdate(hostId, newhost);
    res.status(200).json({ success: true });
}

async function getHostParking (req, res, next) {
    const { hostId } = req.params;
    const host = await Host.findById(hostId);
    console.log('host', host);
}

async function newHostParking (req, res, next) {host
    const { parkingId } = req.params;
    const newhost = new Host(req.body);
    const parking = await Parking.findById(parkingId);

    newhost.parking = parking;
    await newhost.save();
    parking.hosts.push(newhost);
    await parking.savee();
    res.status(201).json(newhost);
}

async function getHostRating (req, res, next) {
    const { hostId } = req.params;
    const host = await Host.findById(hostId);
    console.log('host', host);
}

async function newHostRating (req, res, next) {
    const { ratingId } = req.params;
    const newhost = new Host(req.body);
    const rating = await Rating.findById(ratingId);

    newhost.rating = rating;
    await newhost.save();
    rating.hosts.push(newhost);
    await rating.savee();
    res.status(201).json(newhost);
}

module.exports = {
    index,
    newHost,
    getHost,
    repolaceHost,
    updateHost,
    getHostParking,
    newHostParking,
    getHostRating,
    newHostRating,
} */