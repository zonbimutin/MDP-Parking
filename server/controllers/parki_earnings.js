const ParkiEarnings = require("../models/parki_earnings");
const Payment       = require("../models/payment");

async function createParkiEarnings (input, ctx) {
    const parkiEarning = await ParkiEarnings();
    return parkiEarning;
}

async function editParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.updateOne();
    return parkiEarning;
}

async function deleteParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.deleteOne();
    return parkiEarning;
}

async function getOneParkiEarnings (id) {
    const parkiEarning = await ParkiEarnings.findOne();
    return parkiEarning;
}

async function getParkiEarnings () {
    const parkiEarning = await ParkiEarnings.find();
    return parkiEarning;
}

async function getPayments () {
    const payments = await Payment.find();
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