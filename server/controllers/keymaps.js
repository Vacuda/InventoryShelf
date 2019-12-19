
require('../models/keymap');

const mongoose = require('mongoose'),
    Keymaps = mongoose.model('Keymap');

module.exports = {

    all: (req, res) => {
        Keymaps.find()
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    show: (req, res) => {
        Keymaps.findOne({})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    create: (req, res) => {   
        Keymaps.create({})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    update: (req, res) => {
        Keymaps.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, useFindAndModifty:false})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },


}






