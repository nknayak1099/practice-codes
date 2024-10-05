const mongoose = require('mongoose');
const { Schema } = mongoose;
const { Product } = require('./product');

const farmSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Farm must have a name!']
    },
    city: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, "Email required!"]
    },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]

})

farmSchema.post('findOneAndDelete', async function (farm) {
    if (farm) {
        await Product.deleteMany({ _id: { $in: farm.products } })
    } else {
        console.log('no products')
    }
})

module.exports.Farm = mongoose.model('Farm', farmSchema);