const app = require('express')();
const mongoose = require('mongoose');
const path = require('path');
const { Product } = require('./models/product');
const { Farm } = require('./models/farm');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

async function database() {
    mongoose.connect('mongodb://127.0.0.1:27017/farmHouse');
}

database()
    .then(() => console.log('Database Connected!'))
    .catch(() => console.log('Error connecting database!'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

async function duplicateFarm(req, res, nex) {
    const check = await Farm.findOne({ name: req.body.name });
    const check2 = await Farm.find({ name: req.body.email });
    console.log(!Boolean(check));
    if (Boolean(check)) {
        console.log('You already have Farm with same Name or email: ');
    } else {
        await farm.save();
    }
}

async function duplicateProduct(req, res, nex) {
    const checkProd = await Product.find({ name: req.body.name }).populate('farm');
    let boolrun = true;
    for (check of checkProd) {
        if (check.farm.name == farm.name) {
            console.log(`error, This product is already added in ${farm.name} Farm`);
            boolrun = false;
        } else {
            boolrun = true;
        }
    }
    if (boolrun) {

        const newProduct = await new Product(product)
        farm.products.push(newProduct);
        await farm.save();
        // console.log(newProduct);
        await newProduct.save();
        // res.send('working')
    }
}

app.use(bodyParser.urlencoded({ extended: true }));

//Home Page 
app.get('/', async (req, res) => {
    res.render('home')
})

//Index page for all farms
app.get('/farms', async (req, res) => {
    const allFarms = await Farm.find();
    res.render('farms', { allFarms });
})

// Form to create new Farm
app.get('/farms/new', async (req, res) => {
    res.render('newFarm');
})

// Show page to Individual farm
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('showFarm', { farm })
})

// Post route to create new Farm
app.post('/farms', async (req, res) => {
    const farm = new Farm({ ...req.body });
    await farm.save();
    res.redirect('/farms')
})

// Form to create a new product for a farm
app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params;
    res.render('newProduct', { id });
})

// Post route to create ne
app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        farm
    })
    farm.products.push(product);
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`);
    // res.send('working')
})

// Delete Farm and all its products
app.delete('/farms/:id', async (req, res) => {
    await Farm.findByIdAndDelete(req.params.id);
    res.redirect('/farms');
})

app.use((err, req, res, next) => {
    console.log('Error saving duplicate');
    next(err);
})

app.listen(5000, (req, res) => {
    console.log("Server is listening at http://localhost:5000");
})


