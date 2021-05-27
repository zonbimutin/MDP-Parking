const Feedback = require("../models/feedback");

async function createFeedback (input, ctx) {
    const facility = await Facility();
    return facility;
}

async function editFeedback (id) {
    const feedback = await Feedback.updateOne();
    return feedback;
}

async function deleteFeedback (id) {
    const feedback = await Feedback.deleteOne();
    return feedback;
}

async function getOneFeedback (id) {
    const feedback = await Feedback.findOne();
}

async function getFeedbacks () {
    const feedback = await Feedback.find();
    return feedback;
}

module.exports = {
    createFeedback,
    editFeedback,
    deleteFeedback,
    getOneFeedback,
    getFeedbacks,
};