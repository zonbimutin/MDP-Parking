const Feedback = require("../models/feedback");

async function createFeedback (input, ctx) {
    const facility = await Facility();
    return facility;
}

async function editFeedback (id) {
    const feedback = await Feedback.findByIdAndUpdate(id).populate("idPerson");
    return feedback;
}

async function deleteFeedback (id) {
    const feedback = await Feedback.findByIdAndDelete(id).populate("idPerson");
    return feedback;
}

async function getOneFeedback (id) {
    const feedback = await Feedback.findOne(id).populate("idPerson");
}

async function getFeedbacks () {
    const feedbacks = await Feedback.find().populate("idPerson");
    return feedbacks;
}

module.exports = {
    createFeedback,
    editFeedback,
    deleteFeedback,
    getOneFeedback,
    getFeedbacks,
};