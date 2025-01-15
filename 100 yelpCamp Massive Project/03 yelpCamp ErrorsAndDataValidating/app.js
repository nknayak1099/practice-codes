const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const { campgroundSchema } = require('./schemas');
const app = express();
const catchAsync = require('./views/utilities/catchAsync');
const YelpErrors = require('./views/utilities/YelpErrors');
const Campground = require('./models/campground');

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');
})().then(() => {
    console.log('Database Connected!');
}).catch(() => {
    console.log('Connection Error!!!')
})

const validateCampground = (req, res, next) => {
    const camp = { title, location, description, image, price } = req.body;
    const { error } = campgroundSchema.validate(camp);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        throw new YelpErrors(msg, 400);
    } else {
        next();
    }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// home page
app.get('/', catchAsync(async (req, res) => {
    res.render('home');
}))
// index of all campgrounds
app.get('/campgrounds', catchAsync(async (req, res) => {
    const allCampgrounds = await Campground.find({});
    res.render('./campgrounds/index', { allCampgrounds })
}))
// get form for new campground
app.get('/campgrounds/new', catchAsync(async (req, res) => {
    res.render('./campgrounds/new');
}))
// new campground get submitted to database
app.post('/campgrounds/new', validateCampground, catchAsync(async (req, res) => {
    const { title, location, description, image, price } = req.body;
    const newCamp = new Campground({ title, location, description, image, price });
    await newCamp.save();
    res.redirect('/campgrounds');
}))
// updates campground
app.put('/campgrounds/edit/:id', validateCampground, catchAsync(async (req, res) => {
    const { title, location, description, image, price } = req.body;
    await Campground.findByIdAndUpdate(req.params.id, { title, location, description, image, price })
    res.redirect('/campgrounds');
}))
// gets to edit form
app.get('/campgrounds/edit/:id', catchAsync(async (req, res) => {
    const foundCamp = await Campground.findById(req.params.id);
    res.render('./campgrounds/edit', { foundCamp })
}))
// shows individual campground in details 
app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    const foundCampground = await Campground.findById(req.params.id);
    res.render('./campgrounds/show', { foundCampground })
}))
// delete single campground
app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const foundCamp = await Campground.findByIdAndDelete(req.params.id);
    res.redirect('/campgrounds');

}))

app.get("*", catchAsync(async (req, res, next) => {
    throw next(new YelpErrors('Errorrrr!!!!!'))
}))

app.use((err, req, res, next) => {
    err.statusCode = (!err.statusCode) ? 404 : err.statusCode;
    err.message = (!err.message) ? "Something went wrong!" : err.message;
    console.dir(err)
    res.status(err.statusCode).render('error', { err });
})



// runs the yelp-camp to run on localhost at port 3000
app.listen(3000, (req, res) => {
    console.log('Server Listening at http://localhost:3000');
})