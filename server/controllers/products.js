
require('../models/product');

const mongoose = require('mongoose'),
    Products = mongoose.model('Product');

module.exports = {

    all: (req, res) => {
        Products.find()
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    show: (req, res) => {
        Products.findById(req.params.id)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    create: (req, res) => {    
        Products.create(req.body)
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    update: (req, res) => {
        Products.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, useFindAndModifty:false})
            .then(results => {res.json({results: results});})
            .catch(err => res.json({errors: err.errors}));
    },

    destroy: (req, res) => {
        
        Products.findOneAndDelete({_id: req.params.id})
            .then(results => {res.json({results: `${req.params.id} deleted.`});})
            .catch(err => res.json({errors: err.errors}));
    },


}






