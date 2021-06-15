const ParkiEarnings = require("../models/parki_earnings");
const Payment       = require("../models/payment");

async function createParkiEarnings (input, ctx) {
    const parkiEarning = await ParkiEarnings();
    return parkiEarning;
}

async function editParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.findByIdAndUpdate(id).populate("idPayment");
    return parkiEarning;
}

async function deleteParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.findByIdAndDelete(id).populate("idPayment");
    return parkiEarning;
}

async function getOneParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.findById(id).populate("idPayment");
    return parkiEarning;
}

async function getParkiEarnings () {
    const parkiEarning = await ParkiEarnings.find().populate("idPayment");
    return parkiEarning;
}

async function getPayments () {
    const payments = await Payment.find().populate("idBooking");
    return payments;
}

module.exports = {
    createParkiEarnings,
    editParkiEarnings,
    deleteParkiEarnings,
    getOneParkiEarnings,
    getParkiEarnings,
    getPayments,
};