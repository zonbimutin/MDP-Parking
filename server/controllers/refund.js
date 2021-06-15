const Refund  = require("../models/refund");
const Payment = require("../models/payment");

async function createRefund (input, ctx) {
    const refund = await Refund();
    return refund;
}

async function editRefund (id) {
    const refund = await Refund.findByIdAndUpdate(id).populate("idPayment");
    return refund;
}

async function deleteRefund (id) {
    const refund = await Refund.findByIdAndDelete(id).populate("idPayment");
    return refund;
}

async function getOneRefund (id) {
    const refund = await Refund.findById(id).populate("idPayment");
    return refund;
}

async function getRefunds () {
    const refunds = await Refund.find().populate("idPayment");
    return refunds;
}

async function getPayments () {
    const payments = await Payment.find().populate("idBooking");
    return payments;
}

module.exports = {
    createRefund,
    editRefund,
    deleteRefund,
    getOneRefund,
    getRefunds,
    getPayments,
};