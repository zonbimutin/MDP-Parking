const Customer = require("../models/customer");
const Parking  = require("../models/parking");
const Review   = require("../models/review");

exports.createReview = (req, res, next) => {
    delete req.body._id;
    const review = new Review({ ...req.body });

    review.save()
          .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
          .catch(error => res.status(400).json({ error }));
};

exports.editReview = (req, res, next) => {
    Review.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
          .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
          .catch(error => res.status(400).json({ error }));
};

exports.deleteReview = (req, res, next) => {
    Review.deleteOne({ _id: req.params.id })
          .then(()     => res.status(200).json({ message: 'Objet suprimé' }))
          .catch(error => res.status(400).json({ error }));
};

exports.getOneReview = (req, res, next) => {
    Review.findOne({ _id: req.params.id })
          .then(review => res.status(200).json(review))
          .catch(error => res.status(404).json({ error }));
};

exports.getReviews = (req, res, next) => {
    Review.find()
          .then(reviews => res.status(200).json(reviews))
          .catch(error  => res.status(400).json({ error }));
};

exports.getCustomers = (req, res, next) => {
    Customer.find()
            .then(customers => res.status(200).json(customers))
            .catch(error    => res.status(400).json({ error }))
};

exports.getParkings = (req, res, next) => {
    Parking.find()
        .then(parkings => res.status(200).json(parkings))
        .catch(error   => res.status(400).json({ error }));
};

/*async function index(req, res, next) {
    const reviews = await Review.find({});
    res.status(200).json(reviews);
}

async function newReview (req, res, next) {
    const newCustomer = new Customer(req.body);
    const customer = await newCustomer.save();
    res.status(201).json(customer);
}

async function getReview (req, res, next) {
    const { reviewId } = req.params;
    const review = await Review.findById(reviewId);
    res.status(200).json(review);
}

async function replaceReview (req, res, next) {
    const { reviewId } = req.params;
    const newreview = req.body;
    const result = await Review.findByIdAndUpdate(reviewId, newreview);
    res.status(200).json({ success: true });
}

async function updateCustomer (req, res, next) {
    const { customerId } = req.params;
    const newcustomer = req.body;
    const result = await Customer.findByIdAndUpdate(customerId, newcustomer);
    res.status(200).json({ success: true });
}

module.exports = {
    index,
    newCustomer,
    getCustomer,
    replaceCustomer,
    updateCustomer,
    getCustomerParking,
    newCustomerParking,
}; */