const Booking  = require("../models/booking");
const Parking  = require("../models/parking");
const Rating   = require("../models/rating");
const Payment  = require("../models/payment");
const Customer = require("../models/customer");

exports.createBooking = (req, res, next) => {
    delete req.body._id;
    const booking = new Booking({
        ...req.body
    });

    booking.save()
           .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
           .catch(error => res.status(400).json({ error }));
};

exports.editBooking = (req, res, next) => {
    Booking.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
           .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
           .catch(error => res.status(400).json({ error }));
};

exports.deleteBooking = (req, res, next) => {
    Booking.deleteOne({ _id: req.params.id })
           .then(()     => res.status(200).json({message: 'Objet suprimé'}))
           .catch(error => res.status(400).json({ error }));
};

exports.getOneBooking = (req, res, next) => {
    Booking.findOne({ _id: req.params.id })
           .then(booking => res.status(200).json(booking))
           .catch(error  => res.status(404).json({ error }));
};

exports.getBookings = (req, res, next) => {
    Booking.find()
           .then(bookings => res.status(200).json(bookings))
           .catch(error   => res.status(400).json({ error }))
};

exports.getCustomers = (req, res, next) => {
    Customer.find()
            .then(customers => res.status(200).json(customers))
            .catch(error    => res.status(400).json({ error }))
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

exports.getPayments = (req, res, next) => {
    Payment.find()
           .then(payments => res.status(200).json(payments))
           .catch(error   => res.status(400).json({ error }));
};

/*
async function index(req, res, next) {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);
}

async function newBooking (req, res, next) {
    const newBooking = new Booking(req.body);
    const booking = await newBooking.save();
    res.status(201).json(booking);
}

async function getBooking (req, res, next) {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    res.status(200).json(booking);
}

async function replaceBooking (req, res, next) {
    const { bookingId } = req.params;
    const newBooking = req.body;
    const result = await Booking.findByIdAndUpdate(bookingId, newBooking);
    res.status(200).json({ success: true });
}

async function updateBooking (req, res, next) {
    const { bookingId } = req.params;
    const newBooking = req.body;
    const result = await Booking.findByIdAndUpdate(bookingId, newBooking);
    res.status(200).json({ success: true });
}

async function getBookingParking (req, res, next) {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    console.log('booking', booking);
}

async function newBookingParking (req, res, next) {
    const { parkingId } = req.params;
    const newbooking = new Booking(req.body);
    const parking = await Parking.findById(parkingId);

    newBooking.parking = parking;
    await newBooking.save();
    parking.bookings.push(newBooking);
    await parking.save();
    res.status(201).json(newBooking);
}

async function getBookingRating (req, res, next) {
    const { bookingId } = req.params;
    const booking = await Booking.findById(bookingId);
    console.log('booking', booking);
}

async function newBookingRating (req, res, next) {host
    const { ratingId } = req.params;
    const newbooking = new Booking(req.body);
    const rating = await Rating.findById(ratingId);

    newBooking.parking = rating;
    await newBooking.save();
    rating.bookings.push(newBooking);
    await rating.save();
    res.status(201).json(newBooking);
}

module.exports = {
    index,
    newBooking,
    getBooking,
    replaceBooking,
    updateBooking,
    getBookingParking,
    newBookingParking,
    getBookingRating,
    newBookingRating,
} */