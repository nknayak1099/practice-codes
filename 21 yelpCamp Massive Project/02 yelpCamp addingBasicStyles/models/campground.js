const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campgroundSchema = new Schema({
    name: String,
    price: Number,
    description: String,
    city: String
})

module.exports = mongoose.model('Campground', campgroundSchema);