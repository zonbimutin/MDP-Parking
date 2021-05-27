const Payment       = require("../models/payment");
const Booking       = require("../models/booking");
const ParkiEarnings = require("../models/parki_earnings");
const Refund        = require("../models/refund");
const HostEarnings  = require("../models/host_earnings");

async function createPayment (input, ctx) {
    const payment = await Payment();
    return payment;
};

async function editPayment (id) {
    const payment = await Payment.updateOne();
    return payment;
}

async function deletePayment (id) {
    const payment = await Payment.deleteOne();
    return payment;
}

async function getOnePayment (id) {
    const payment = await Payment.findOne();
    return payment;
}

async function getPayments () {
    const payments = await Payment.find();
    return payments;
}

async function getBookings (){
    const booking = await Booking.find();
    return booking;
}

async function getRefunds () {
    const refunds = await Refund.find();
    return refunds;
}

async function getParkiEarnings () {
    const parkiEarning = await ParkiEarnings.find();
    return parkiEarning;
}

async function getHostEarnings () {
    const hostEarnings = await HostEarnings.find();
    return hostEarnings;
}

module.exports = {
    createPayment,
    editPayment,
    deletePayment,
    getOnePayment,
    getPayments,
    getBookings,
    getRefunds,
    getParkiEarnings,
    getHostEarnings,
};