const mongoose = require('mongoose');

async function database() {
    await mongoose.connect('mongodb://127.0.0.1:270117/schemaValidation');
}

database()
    .then(() => {
        console.log('Database connected.');
    })
    .catch((e) => {
        console.log('Error!');
        console.log(e);
    })

const manSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
})

// Mongoose Virtuals
manSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
})

// Mongoose Middlewares
manSchema.pre('save', function () {
    console.log('Going to Save!')
})

manSchema.post('save', function () {
    console.log('Saved to Database!')
})

const Man = mongoose.model("Man", manSchema);