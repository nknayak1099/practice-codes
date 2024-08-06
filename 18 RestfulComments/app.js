const express = require('express');
const { v4: uuid } = require('uuid');
const app = express();
const path = require('path');
const comments = [
    { _id: uuid(), name: 'Kittu', comment: 'This is a good day.' },
    { _id: uuid(), name: 'Rishu', comment: 'I want icecream to make my day.' },
    { _id: uuid(), name: 'Jitu', comment: 'It looks rainy today.' },
    { _id: uuid(), name: 'Pihu', comment: 'I like drawing.' }
]
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home Page
app.get('/', (req, res) => {
    res.render('home');
})
// Route to view all comments
app.get('/view-comments', (req, res) => {
    res.render('comments', { comments })
})
// Route to create a new comment
app.get('/new-comment', (req, res) => {
    res.render('new');
})
// Post Route to add a new comment to data and redirect to view comments page
app.post('/new-comment', (req, res) => {
    const newEntry = req.body;
    newEntry._id = uuid();
    comments.push(newEntry);
    res.redirect('/view-comments')
})
// Get route to delete a comment
app.get('/delete/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const itemIndex = comments.findIndex(item => item._id === id);

    if (itemIndex !== -1) {
        comments.splice(itemIndex, 1);
        // res.status(200).json({ message: 'Item deleted successfully' });
        res.redirect('/view-comments')
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
})

//Get route for edit form
app.get('/update/:id', (req, res) => {
    const id = req.params.id;
    const itemIndex = comments.findIndex(item => item._id === id);
    const comment = comments[itemIndex];
    res.render('edit', { comment })
    // res.send(comment)
})
//post route for update entry
app.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const itemIndex = comments.findIndex(item => item._id === id);
    // res.send(req.body.name)
    comments[itemIndex].name = req.body.name;
    comments[itemIndex].comment = req.body.comment;
    res.redirect('/view-comments');
})


// app.delete('/p', (req, res) => {
//     res.send('this is a delete request.')
// })

app.listen(3000, (req, res) => {
    console.log('Server is listening at port 3000')
    console.log('http://localhost:3000')
})