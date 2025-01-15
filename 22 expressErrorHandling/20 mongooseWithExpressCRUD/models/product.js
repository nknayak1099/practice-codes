const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    measurment: {
        type: String,
        enum: ['kgs', 'ltr', 'nos', 'dozen']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;