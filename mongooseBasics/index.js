const mongoose = require('mongoose');

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:27017/mongoosebasics');
}

database()
    .then(() => {
        console.log('Database connected.');
    })
    .catch((e) => {
        console.log('Error!');
        console.log(e);
    })