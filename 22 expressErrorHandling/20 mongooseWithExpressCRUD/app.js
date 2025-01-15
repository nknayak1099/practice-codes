const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const AppError = require('./AppError');
const port = 3000;

const Product = require('./models/product');

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Grocery');
}

database()
    .then(() => console.log(`Database Connected!`))
    .catch(err => console.log(`Error Connecting Database! ${err}`))

app.use(bodyParser.urlencoded({ extended: true }))
// This will a app to keep record of Grocery Expenditure & Quantity.
//new
//view
//update
//delete




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// wrapAsync function to wrap a function and return with try and catch
const wrapAsync = func => {
    return function (req, res, next) {
        func(req, res, next).catch(e => next(e))
    }
}


app.get('/', async (req, res) => {
    // res.send("Hi! There.")
    const allProducts = await Product.find();
    res.render('home', { allProducts: allProducts })
})

// Handling error with async function, we have to pass error to next()
app.get('/edit/:id', async (req, res, next) => {
    const foundProduct = await Product.findById(req.params.id);
    if (!foundProduct) {
        return next(new AppError('Product not found!', 404))
    }
    res.render('edit', { foundProduct: foundProduct })
})

app.get('/new', async (req, res) => {
    res.render('new');
})


//  More better way to handle async fucntions for errors is using try{}catch{}
// app.post('/new', async (req, res, next) => {
//     try {
//         const product = req.body;
//         const newItem = new Product({
//             name: product.name,
//             price: product.price,
//             quantity: product.qty,
//             measurment: product.unit
//         })
//         await newItem.save();
//         res.redirect('/');
//     } catch (e) {
//         console.log(e)
//         next(e)
//     }
// })


// Much More better way to handle async fucntions for errors is using a wrapAsync function that wraps code around try{}catch{} 
app.post('/new', wrapAsync(async (req, res, next) => {
    const product = req.body;
    const newItem = new Product({
        name: product.name,
        price: product.price,
        quantity: product.qty,
        measurment: product.unit
    })
    await newItem.save();
    res.redirect('/');
}))

app.post('/update/:id', wrapAsync(async (req, res) => {
    const updatedProduct = { name: req.body.name, price: req.body.price, quantity: req.body.qty, measurment: req.body.unit };
    await Product.findByIdAndUpdate(req.params.id, updatedProduct, { runValidators: true });
    console.log(updatedProduct);
    // console.log(req.body)
    res.redirect('/')
}))

app.post('/delete/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/')
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`);
})


app.use((err, req, res, next) => {
    const { status = 404, message = "something went wrong!" } = err;
    res.status(status).send(message);
})