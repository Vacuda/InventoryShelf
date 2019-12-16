
require('../models/####');

const mongoose = require('mongoose'),
    #### = mongoose.model('####');

module.exports = {

    all: (req, res) => {
        Tasks.find()
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    show: (req, res) => {
        Tasks.findById(req.params.id)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    create: (req, res) => {    
        Tasks.create(req.body)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    update: (req, res) => {
        Tasks.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, useFindAndModifty:false})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    destroy: (req, res) => {
        
        Tasks.findOneAndDelete({_id: req.params.id})
            .then(results => {res.json({results: `${req.params.id} deleted.`});})
            .catch(err => res.json({errors: err.errors}));
    },


}






