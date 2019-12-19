const mongoose = require('mongoose');

const KeymapSchema = new mongoose.Schema({
    A1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    A2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    A3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    }, 
    A4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    }, 
    A5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    }, 
    B1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    }, 
    B2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    B3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    B4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    B5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    C1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    C2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    C3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    C4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    C5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    D1: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    D2: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    D3: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    D4: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    D5: { 
        filled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: ""
        },
        price: {
            type: Number,
            default: ""
        },
        imageurl: {
            type: String,
            default: ""
        },
    },
    
}, {timestamps: true});

mongoose.model("Keymap", KeymapSchema);
