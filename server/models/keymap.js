const mongoose = require('mongoose');

const KeymapSchema = new mongoose.Schema({
    A1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    }, 
    A2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    A3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    }, 
    A4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    }, 
    A5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    }, 
    B1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    }, 
    B2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    B3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    B4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    B5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    C1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    C2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    C3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    C4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    C5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    D1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    D2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    D3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    D4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    D5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: String,
        price: Number,
        imageurl: String,
    },
    
}, {timestamps: true});

mongoose.model("Keymap", KeymapSchema);
