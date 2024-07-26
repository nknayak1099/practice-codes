const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('Runs everytime for every new request.')
    next();
})

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Home Page!`);
})
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>I am searching for ${q}</h1>`);
})
app.get('/user/:animal', (req, res) => {
    const { animal } = req.params;
    res.send(`<h1>I am looking for ${animal}</h1>`)
})
app.get('*', (req, res) => {
    res.send('NOthing found')
})
app.get
app.listen(3000, (req, res) => {
    console.log('Running')
})