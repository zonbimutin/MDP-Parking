const Payment       = require("../models/payment");
const Booking       = require("../models/booking");
const ParkiEarnings = require("../models/parki_earnings");
const Refund        = require("../models/refund");
const HostEarnings  = require("../models/host_earnings");

exports.createPayment = (req, res, next) => {
    delete req.body._id;
    const payment = new Payment({ ...req.body });

    payment.save()
           .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
           .catch(error => res.status(400).json({ error }));
};

exports.editPayment = (req, res, next) => {
    Payment.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
           .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
           .catch(error => res.status(400).json({ error }));
};

exports.deletePayment = (req, res, next) => {
    Payment.deleteOne({ _id: req.params.id })
           .then(()     => res.status(200).json({message: 'Objet suprimé'}))
           .catch(error => res.status(400).json({ error }));
};

exports.getOnePayment = (req, res, next) => {
    Payment.findOne({ _id: req.params.id })
           .then(payment => res.status(200).json(payment))
           .catch(error  => res.status(404).json({ error }));
};

exports.getPayments = (req, res, next) => {
    Payment.find()
           .then(payments => res.status(200).json(payments))
           .catch(error   => res.status(400).json({ error }));
};

exports.getBookings = (req, res, next) => {
    Booking.find()
           .then(bookings => res.status(200).json(bookings))
           .catch(error   => res.status(400).json({ error }))
};

exports.getRefunds = (req, res, next) => {
    Refund.find()
          .then(refunds => res.status(200).json(refunds))
          .catch(error  => res.status(400).json({ error }));
};

exports.getParkiEarnings = (req, res, next) => {
    ParkiEarnings.find()
                 .then(parkiEarnings => res.status(200).json(parkiEarnings))
                 .catch(error        => res.status(400).json({ error }));
};

exports.getHostEarnings = (req, res, next) => {
    HostEarnings.find()
                .then(hostEarnings => res.status(200).json(hostEarnings))
                .catch(error       => res.status(400).json({ error }));
};