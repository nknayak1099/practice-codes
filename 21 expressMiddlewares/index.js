const express = require('express');
const app = express();

//Middleware
app.use((req, res, next) => {
    console.log('This is first Middleware');
    next();
    console.log('This is first middleware after next();')
})

app.use((req, res, next) => {
    console.log('This is second middleware.')
    next();
    console.log('This is second middleware after next();')
})

app.use('/dogs', (req, res, next) => {
    console.log('This is third middleware, runs only for /dogs');
    next();
})

const secretMiddleware = (req, res, next) => {
    if (req.query.password == 'secret') {
        next();
    } else {
        res.send('Your password is incorrect!');
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

app.get('/secret', secretMiddleware, secret, (req, res) => {
    res.send('You got my secret!');
})

app.listen(3000, async (req, res) => {
    console.log('Server is listening at http://localhost:3000');
})