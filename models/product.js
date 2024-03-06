const { Timestamp } = require('bson');
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true},
},
    {
        Timestamp: true
    }
);

const Product = mongoose.model('product', schema);
module.exports = Product;