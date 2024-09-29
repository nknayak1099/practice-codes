const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

const Campground = require('./models/campground');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
})().then(() => {
    console.log('Database Connected!');
}).catch(() => {
    console.log('Connection Error!!!')
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// home page
app.get('/', async (req, res) => {
    res.render('home');
})
// index of all campgrounds
app.get('/campgrounds', async (req, res) => {
    const allCampgrounds = await Campground.find({});
    res.render('./campgrounds/index', { allCampgrounds })
})
// get form for new campground
app.get('/campgrounds/new', async (req, res) => {
    res.render('./campgrounds/new');
})
// new campground get submitted to database
app.post('/campgrounds/new', async (req, res) => {
    const newCamp = new Campground({ name: req.body.name, city: `${req.body.city}, ${req.body.state}` });
    await newCamp.save();
    res.redirect('/campgrounds');
})
// gets to edit form
// updates campground
app.post('/campgrounds/edit/:id', async (req, res) => {
    await Campground.findByIdAndUpdate(req.params.id, { name: req.body.name, city: `${req.body.city}, ${req.body.state}` })
    res.redirect('/campgrounds');
})
app.get('/campgrounds/edit/:id', async (req, res) => {
    const foundCamp = await Campground.findById(req.params.id);
    res.render('./campgrounds/edit', { foundCamp })
})
// delete single campground
app.delete('/campgrounds/:id', async (req, res) => {
    const foundCamp = await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');

})
// shows individual campground in details 
app.get('/campgrounds/:id', async (req, res) => {
    const foundCampground = await Campground.findById(req.params.id);
    res.render('./campgrounds/show', { foundCampground })
})

// runs the yelp-camp to run on localhost at port 3000
app.listen(3000, (req, res) => {
    console.log('Server Listening at http://localhost:3000');
})