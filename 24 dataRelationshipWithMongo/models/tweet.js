const mongoose = require('mongoose');
const { Schema } = mongoose;

// One to Bajillion
const tweetSchema = new Schema({
    username: String,
    text: String,
    users: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

module.exports.Tweet = mongoose.model('Tweet', tweetSchema);