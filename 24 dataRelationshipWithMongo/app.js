const app = require('express')();
const mongoose = require('mongoose');
const { User } = require('./models/user');
const { Product } = require('./models/product');
const { Tweet } = require('./models/tweet');

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationshipDB');
}

database()
    .then(() => console.log('Database connected!'))
    .catch((e) => console.log("error connecting database!"))

const p1 = new Product({
    name: 'Rice',
    price: 50
})

const p2 = new Product({
    name: 'Milk',
    price: 70
})

const newUser = new User({
    name: 'Ricky Sharma',
    gender: 'male',
    addresses: [
        { street: '11 st. 02', city: 'south delhi', state: 'new delhi' },
        { street: '45 st. 3', city: 'central delhi', state: 'new delhi' }
    ],
    products: [p1, p2]
})

const tweet1 = new Tweet({
    username: 'nikekumar369',
    name: 'nikesh',
    users: [newUser]
})

async function saveToDatabase() {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Tweet.deleteMany({});
    await p1.save();
    await p2.save();
    await newUser.save();
    await tweet1.save();
}

saveToDatabase();

app.get('/', async (req, res) => {
    const allUsers = await User.findOne({}).populate('products');
    const tweets = await Tweet.findOne({}).populate('users');
    console.log(tweets)
    // console.log(allUsers)
    res.send('working')
})

app.listen(400, (req, res) => {
    console.log("Listening at http://localhost:400");
})