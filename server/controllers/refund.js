const Refund  = require("../models/refund");
const Payment = require("../models/payment");

exports.createRefund = (req, res, next) => {
    delete req.body._id;
    const refund = new Refund({ ...req.body });

    refund.save()
          .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
          .catch(error => res.status(400).json({ error }));
};

exports.editRefund = (req, res, next) => {
    Refund.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
          .catch(error => res.status(400).json({ error }));
};

exports.deleteRefund = (req, res, next) => {
    Refund.deleteOne({ _id: req.params.id })
          .then(()     => res.status(200).json({message: 'Objet suprimé'}))
          .catch(error => res.status(400).json({ error }));
};

exports.getOneRefund = (req, res, next) => {
    Refund.findOne({ _id: req.params.id })
          .then(refund => res.status(200).json(refund))
          .catch(error => res.status(404).json({ error }));
};

exports.getRefunds = (req, res, next) => {
    Refund.find()
          .then(refunds => res.status(200).json(refunds))
          .catch(error    => res.status(400).json({ error }));
};

exports.getPayments = (req, res, next) => {
    Payment.find()
           .then(payments => res.status(200).json(payments))
           .catch(error    => res.status(400).json({ error }));
};