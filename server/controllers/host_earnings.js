const HostEarnings = require("../models/host_earnings");
const Payment      = require("../models/payment");

async function createHostEarnings (input, ctx) {
    const hostEarning = await HostEarnings();
    return facility;
}

async function editHostEarnings (id) {
    const hostEarning = await HostEarnings.findByIdAndUpdate(id).populate("idPayment");
    return hostEarning;
}

async function deleteHostEarnings (id) {
    const hostEarning = await HostEarnings.findByIdAndDelete(id).populate("idPayment");
    return hostEarning;
}

async function getOneHostEarnings (id) {
    const hostEarning = await HostEarnings.findById(id).populate("idPayment");
    return hostEarning;
}

async function getHostEarnings () {
    const hostEarnings = await HostEarnings.find().populate("idPayment");
    return hostEarnings;
}

async function getPayments () {
    const payments = await Payment.find().populate("idBooking");
    return payments;
}

module.exports = {
    createHostEarnings,
    editHostEarnings,
    deleteHostEarnings,
    getOneHostEarnings,
    getHostEarnings,
    getPayments,
}