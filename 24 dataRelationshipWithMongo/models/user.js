const mongoose = require('mongoose');
const { Schema } = mongoose;


// One to Many
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    },
    addresses: [{
        _id: false,
        street: String,
        city: String,
        state: String
    }],
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

module.exports.User = mongoose.model('User', userSchema);