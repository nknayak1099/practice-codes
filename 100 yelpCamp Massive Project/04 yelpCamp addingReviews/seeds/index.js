const mongoose = require('mongoose');
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');
const Campground = require('../models/campground');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
})().then(() => {
    console.log('Database Connected!');
}).catch(() => {
    console.log('Connection Error!!!')
});

const arrOfCamp = [];
const sample = array => array[Math.floor(Math.random() * array.length)];

for (let i = 0; i < 10; i++) {
    const price = Math.floor(Math.random() * 500 + 100);
    arrOfCamp.push({
        title: `${sample(descriptors)} ${sample(places)}`,
        location: `${sample(cities).city}, ${sample(cities).state}`,
        price,
        image: `http://surl.li/jpimtd`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis sunt animi, cumque similique, hic deserunt itaque cupiditate inventore corrupti numquam? Fuga maxime rerum libero est? Aperiam iste, aliquam neque cupiditate illo odit laudantium ullam fugiat enim totam quae assumenda officia minima ex excepturi corporis ipsum laborum eaque beatae, ipsa, sint fuga fugit. Magni blanditiis ex necessitatibus obcaecati assumenda. Ipsam laudantium quod maiores nemo labore ex facere, perspiciatis natus dolores vel earum nesciunt voluptatibus odit harum eius incidunt eos fugiat tenetur deserunt! Quisquam, possimus consequuntur!`
    })
}
// console.log(arrOfCamp)

const seed = async function () {
    await Campground.deleteMany({});
    await Campground.insertMany(arrOfCamp);
    const foundCamps = await Campground.find();
    console.log(foundCamps);
    console.log(`Total Entries: ${foundCamps.length}`);
    // console.log(arrOfCamp)
}

seed()