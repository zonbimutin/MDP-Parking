const ParkiEarnings = require("../models/parki_earnings");
const Payment       = require("../models/payment");

exports.createParkiEarnings = (req, res, next) => {
    delete req.body._id;
    const parkiEarnings = new ParkiEarnings({ ...req.body });

    payment.save()
           .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
           .catch(error => res.status(400).json({ error }));
};

exports.editParkiEarnings = (req, res, next) => {
    ParkiEarnings.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
                 .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
                 .catch(error => res.status(400).json({ error }));
};

exports.deleteParkiEarnings = (req, res, next) => {
    ParkiEarnings.deleteOne({ _id: req.params.id })
                 .then(()     => res.status(200).json({message: 'Objet suprimé'}))
                 .catch(error => res.status(400).json({ error }));
};

exports.getOneParkiEarnings = (req, res, next) => {
    ParkiEarnings.findOne({ _id: req.params.id })
                 .then(parkiEarning => res.status(200).json(parkiEarning))
                 .catch(error   => res.status(404).json({ error }));
};

exports.getParkiEarnings = (req, res, next) => {
    ParkiEarnings.find()
                 .then(parkiEarnings => res.status(200).json(parkiEarnings))
                 .catch(error    => res.status(400).json({ error }));
};

exports.getPayments = (req, res, next) => {
    Payment.find()
           .then(payments => res.status(200).json(payments))
           .catch(error    => res.status(400).json({ error }));
};