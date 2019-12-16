const mongoose = require('mongoose');

const ####Schema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "You need to add a name"]
    }, 
    age: { 
        type: Number,
        required: [true, "You need to add an age"]
    },
    mates: { 
        type: Number,
        required: [true, "Every Monkey Needs A Monkey"]
    },
    description: { 
        type: String,
        required: [true, "You need to add a description"],
        maxlength: [30, "Way Too Long"]
    },
    
}, {timestamps: true});

mongoose.model("####", ####Schema);