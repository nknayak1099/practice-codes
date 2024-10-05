const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        required: true,
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref: 'Farm'
    }
})

module.exports.Product = mongoose.model('Product', productSchema);