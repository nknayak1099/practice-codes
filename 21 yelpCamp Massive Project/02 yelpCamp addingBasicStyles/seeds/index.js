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

for (let i = 0; i < 50; i++) {
    const location = Math.floor(Math.random() * cities.length);
    const campName1 = Math.floor(Math.random() * descriptors.length);
    const campName2 = Math.floor(Math.random() * places.length);
    if (location <= 0 || location == cities.length) {
        console.log(locaiton)
        break;
    } else {
        arrOfCamp.push({
            name: `${descriptors[campName1]} ${places[campName2]}`,
            city: `${cities[location].city}, ${cities[location].state}`
        })
    }
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