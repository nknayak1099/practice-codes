const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
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

app.get('/', async (req, res) => {
    // res.send("Hi! There.")
    const allProducts = await Product.find();
    res.render('home', { allProducts: allProducts })
})

app.get('/edit/:id', async (req, res) => {
    const foundProduct = await Product.findById(req.params.id);
    res.render('edit', { foundProduct: foundProduct })
})

app.get('/new', async (req, res) => {
    res.render('new');
})

app.post('/new', async (req, res) => {
    const product = req.body;
    const newItem = new Product({
        name: product.name,
        price: product.price,
        quantity: product.qty,
        measurment: product.unit
    })
    await newItem.save();
    res.redirect('/');
})

app.post('/update/:id', async (req, res) => {
    const updatedProduct = { name: req.body.name, price: req.body.price, quantity: req.body.qty, measurment: req.body.unit };
    await Product.findByIdAndUpdate(req.params.id, updatedProduct);
    console.log(updatedProduct);
    // console.log(req.body)
    res.redirect('/')
})

app.post('/delete/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/')
})

app.listen(port, (req, res) => {
    console.log(`Listening to port ${port}`);
})
