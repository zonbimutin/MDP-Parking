const Refund  = require("../models/refund");
const Payment = require("../models/payment");

async function createRefund (input, ctx) {
    const refund = await Refund();
    return refund;
}

async function editRefund (id) {
    const refund = await Refund.updateOne();
    return refund;
}

async function deleteRefund (id) {
    const refund = await Refund.deleteOne();
    return refund;
}

async function getOneRefund (id) {
    const refund = await Refund.findOne();
    return refund;
}

async function getRefunds () {
    const refunds = await Refund.find();
    return refunds;
}

async function getPayments () {
    const payments = await Payment.find();
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