const mongoose = require('mongoose');

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:27017/schemaValidation');
}

database()
    .then(() => {
        console.log('Database connected.');
    })
    .catch((e) => {
        console.log('Error!');
        console.log(e);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive.']
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    onSale: {
        type: Boolean,
        default: false
    }
})

// ADDING MODEL STATIC METHODS
productSchema.statics.diwaliSale = function () {
    return this.updateMany({}, { price: 0, onSale: true })
}

// MODEL INSTANCE METHODS 
productSchema.methods.greet = function () {
    console.log("Hi! There, How are you?");
}

productSchema.methods.toggleIsAvailable = function () {
    this.isAvailable = !this.isAvailable;
    this.save();
}

const Product = mongoose.model("Product", productSchema);

const p1 = new Product({
    name: 'Rice',
    price: 75
})
// p1.save().then(m => console.log(m))
// Product.findOneAndUpdate({ name: 'Colgate' }, { price: 100 }, { new: true }, { runValidators: true }).then(m => console.log(m))
Product.find({}).then(d => console.log(d)).then(() => console.log("=========="))


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Colgate' });
    console.log("the product is", foundProduct)
    console.log("***********")
    foundProduct.greet();
    foundProduct.toggleIsAvailable();
}

findProduct();

Product.diwaliSale().then(res => console.log(res))
