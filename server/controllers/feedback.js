const Feedback = require("../models/feedback");

exports.createFeedback = (req, res, next) => {
    delete req.body._id;
    const feedback = new Feedback({ ...req.body });

    feedback.save()
            .then(()     => res.status(201).json({ message: 'Objet enrtegistré' }))
            .catch(error => res.status(400).json({ error }));
};

exports.editFeedback = (req, res, next) => {
    Feedback.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(()     => { res.status(200).json({ message: 'Objet modifié' }) })
            .catch(error => res.status(400).json({ error }));
};

exports.deleteFeedback = (req, res, next) => {
    Feedback.deleteOne({ _id: req.params.id })
            .then(()     => res.status(200).json({message: 'Objet suprimé'}))
            .catch(error => res.status(400).json({ error }));
};

exports.getOneFeedback = (req, res, next) => {
    Feedback.findOne({ _id: req.params.id })
            .then(feedback => res.status(200).json(feedback))
            .catch(error   => res.status(404).json({ error }));
};

exports.getFeedbacks = (req, res, next) => {
    Feedback.find()
            .then(feedbacks => res.status(200).json(feedbacks))
            .catch(error    => res.status(400).json({ error }))
};