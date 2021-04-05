const User     = require("../models/user");
const Customer = require("../models/customer");
const Rating   = require("../models/rating");
const Booking  = require("../models/booking");
const Review   = require("../models/review");

exports.createCustomer = (req, res, next) => {
    delete req.body._id;
    const customer = new Customer({
        ...req.body
    });

    customer.save()
        .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
        .catch(error => res.status(400).json({ error }));
};

exports.editCustomer = (req, res, next) => {
    Customer.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
        .catch(error => res.status(400).json({ error }));
};

exports.deleteCustomer = (req, res, next) => {
    Customer.deleteOne({ _id: req.params.id })
        .then(()     => res.status(200).json({message: 'Objet suprimé'}))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneCustomer = (req, res, next) => {
    Customer.findOne({ _id: req.params.id })
        .then(customer => res.status(200).json(customer))
        .catch(error   => res.status(404).json({ error }));
};

exports.getCustomers = (req, res, next) => {
    Customer.find()
        .then(customers => res.status(200).json(customers))
        .catch(error    => res.status(400).json({ error }))
};

exports.getBookings = (req, res, next) => {
    Booking.find()
        .then(bookings => res.status(200).json(bookings))
        .catch(error   => res.status(400).json({ error }))
};

exports.getRatings = (req, res, next) => {
    Rating.find()
        .then(ratings => res.status(200).json(ratings))
        .catch(error  => res.status(400).json({ error }))
};

exports.getReviews = (req, res, next) => {
    Review.find()
        .then(reviews => res.status(200).json(reviews))
        .catch(error  => res.status(400).json({ error }));
};

/* async function index(req, res, next) {
    const customers = await Customer.find({});
    res.status(200).json(customers);
}

async function newCustomer (req, res, next) {
    const newCustomer = new Customer(req.body);
    const customer = await newCustomer.save();
    res.status(201).json(customer);
}

async function getCustomer (req, res, next) {
    const { customerId } = req.params;
    const customer = await Customer.findById(customerId);
    res.status(200).json(customer);
}

async function replaceCustomer (req, res, next) {
    const { customerId } = req.params;
    const newcustomer = req.body;
    const result = await customer.findByIdAndUpdate(customerId, newcustomer);
    res.status(200).json({ success: true });
}

async function updateCustomer (req, res, next) {
    const { customerId } = req.params;
    const newcustomer = req.body;
    const result = await Customer.findByIdAndUpdate(customerId, newcustomer);
    res.status(200).json({ success: true });
}

async function getCustomerParking (req, res, next) {
    const { customerId } = req.params;
    const customer = await Customer.findById(customerId);
    console.log('customer', customer);
}

async function newCustomerParking (req, res, next) {
    const { parkingId } = req.params;
    const newcustomer = new Customer(req.body);
    const parking = await Parking.findById(parkingId);

    newcustomer.parking = parking;
    await newcustomer.save();
    parking.customers.push(newcustomer);
    await parking.save();
    res.status(201).json(newcustomer);
}

async function getCustomerRating (req, res, next) {
    const { customerId } = req.params;
    const customer = await Host.findById(customerId);
    console.log('customer', customer);
}

async function newCustomerRating (req, res, next) {host
    const { ratingId } = req.params;
    const newcustomer = new Host(req.body);
    const rating = await Rating.findById(ratingId);

    newcustomer.rating = rating;
    await newcustomer.save();
    rating.hosts.push(newcustomer);
    await rating.save();
    res.status(201).json(newcustomer);
}

module.exports = {
    index,
    newCustomer,
    getCustomer,
    replaceCustomer,
    updateCustomer,
    getCustomerParking,
    newCustomerParking,
};*/