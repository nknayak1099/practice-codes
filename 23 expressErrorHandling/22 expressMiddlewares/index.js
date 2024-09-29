const express = require('express');
const AppError = require('./AppError');
const app = express();


// Error Handling Middleware


const secretMiddleware = (req, res, next) => {
    if (req.query.password == 'secret') {
        next();
    } else {
        throw new AppError('Password incorrect!!!!', 403)
        // res.send('Your password is incorrect!');
    }
}

const secret = (req, res, next) => {
    console.log('Now, Do you know my secret!');
    next();
}

app.get('/', async (req, res) => {
    console.log('This is / route')
    res.send('Hi');
})

app.get('/dogs', async (req, res) => {
    res.send('Hi there! from dogs route');
})

// Default Error by express
app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/secret', secretMiddleware, secret, (req, res) => {
    res.send('You got my secret!');
})

app.listen(3000, async (req, res) => {
    console.log('Server is listening at http://localhost:3000');
})

app.use((error, req, res, next) => {
    console.log('######ERROR#########');
    res.status(404)
    console.dir(Error.message)
    // res.status(404).send('Something broke!')
    next(error);
})