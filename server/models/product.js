const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { 
        type: String,
        maxlength: [32, "Name too long"],
        required: [true, "You need to add a name"]
    }, 
    price: { 
        type: Number,
        required: [true, "You need to add a price"]
    },
    boxcount: { 
        type: Number,
        required: [true, "You need to add a boxcount"]
    },
    imageurl: { 
        type: String,
        required: [true, "You need to add an image url"],
    },
    inventory: { 
        type: Number,
        default: 0,
    },
    
}, {timestamps: true});

mongoose.model("Product", ProductSchema);
