const HostEarnings = require("../models/host_earnings");
const Payment      = require("../models/payment");

exports.createHostEarnings = (req, res, next) => {
    delete req.body._id;
    const payment = new HostEarnings({ ...req.body });

    payment.save()
           .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
           .catch(error => res.status(400).json({ error }));
};

exports.editHostEarnings = (req, res, next) => {
    HostEarnings.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
                .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
                .catch(error => res.status(400).json({ error }));
};

exports.deleteHostEarnings = (req, res, next) => {
    HostEarnings.deleteOne({ _id: req.params.id })
                .then(()     => res.status(200).json({message: 'Objet suprimé'}))
                .catch(error => res.status(400).json({ error }));
};

exports.getOneHostEarnings = (req, res, next) => {
    HostEarnings.findOne({ _id: req.params.id })
                .then(hostEarning => res.status(200).json(hostEarning))
                .catch(error      => res.status(404).json({ error }));
};

exports.getHostEarnings = (req, res, next) => {
    HostEarnings.find()
                .then(hostEarnings => res.status(200).json(hostEarnings))
                .catch(error       => res.status(400).json({ error }));
};

exports.getPayments = (req, res, next) => {
    Payment.find()
           .then(payments => res.status(200).json(payments))
           .catch(error    => res.status(400).json({ error }));
};