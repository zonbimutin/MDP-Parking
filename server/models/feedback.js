const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const FeedbackSchema = Schema({
    idPerson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },

    description: {
        type: String,
        require: true,
    },

    date: {
        type: String,
        require: true,
    }, 

    updatedAt: {
        type: Date,
        default: Date.now()
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);