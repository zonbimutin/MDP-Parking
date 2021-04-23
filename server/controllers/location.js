const Location = require("../models/location");
const Parking  = require("../models/parking");

exports.createLocation = (req, res, next) => {
    delete req.body._id;
    const location = new Location({ ...req.body });

    location.save()
            .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
            .catch(error => res.status(400).json({ error }));
};

exports.editLocation = (req, res, next) => {
    Location.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }));
};

exports.deleteLocation = (req, res, next) => {
    Location.deleteOne({ _id: req.params.id })
            .then(()     => res.status(200).json({message: 'Objet suprimé'}))
            .catch(error => res.status(400).json({ error }));
};

exports.getOneLocation = (req, res, next) => {
    Location.findOne({ _id: req.params.id })
            .then(location => res.status(200).json(location))
            .catch(error   => res.status(404).json({ error }));
};

exports.getLocations = (req, res, next) => {
    Location.find()
            .then(locations => res.status(200).json(locations))
            .catch(error    => res.status(400).json({ error }))
};

exports.getParkings = (req, res, next) => {
    Parking.find()
           .then(parkings => res.status(200).json(parkings))
           .catch(error   => res.status(400).json({ error }));
};