const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const randNum = Math.random() * 10;
    const stuMathMarks = [{ name: 'Raj', marks: 88 }, { name: 'Sita', marks: 99 }, { name: 'Ram', marks: 69 }];
    res.render('home', { randNum, stuMathMarks })
})








app.listen(3000, (req, res) => {
    console.log('Listening')
})

// Serve static files from the 'public' directory   and using html file plain
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'home.html'));
// });
