const Joi = require('joi');

module.exports.campgroundSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().min(5).required(),
    image: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    reviews: Joi.array()
}).required();

module.exports.reviewSchema = Joi.object({
    review: Joi.string().required(),
    rating: Joi.number().required()
}).required();