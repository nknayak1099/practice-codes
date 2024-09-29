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
//01 DEFIGNING SCHEMA
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number
});
//02 CREATING MODEL
const Movie = mongoose.model("Movie", movieSchema);//It will create a database in plural i.e. movies database
//03 CREATING ENTRIES   --- TO SAVA stree2.save()
const stree2 = new Movie({
    title: "Stree 2",
    year: 2024,
    score: 9.7
})
// INSERTING MANY ENTRIES AT ONCE
// Movie.insertMany([
//     { title: "Vikram", year: 2022, score: 9.5 },
//     { title: "Maharaja", year: 2024, score: 9.6 },
//     { title: "Panchayat", year: 2024, score: 9.0 }
// ]).then(data => {
//     console.log("It Worked!");
//     console.log(data);
// })

// TO FIND ENTRIES
// Movie.findById('66e9613132fff2b53486bf06').then(m => console.log(m));
// Movie.find({}).then(d => console.log(d));

//TO UPDATE ENTRIES

// Movie.updateOne({ title: 'Maharaja' }, { score: 9.4 }).then(m => console.log(m));
// Movie.updateMany({ title: 'Maharaja' }, { score: 9.4 }).then(m => console.log(m));
// Movie.findOneAndUpdate({ title: 'Maharaja' }, { score: 8.9 }, { new: true }).then(m => console.log(m))

// TO DELETE ENTRIES
Movie.deleteMany({ title: 'Maharaja' }).then(m => console.log(m));
Movie.findOneAndDelete({ score: { $gte: 9.5 } }).then(m => console.log(m))