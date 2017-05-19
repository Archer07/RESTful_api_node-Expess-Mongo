const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

let app = express();


// connect to mongoose
mongoose.connect('mongodb://localhost:27017/bookstore');

// db object

let db = mongoose.connection;


// set up the route for the home page

app.get('/', function(req, res) {
    res.send('changed with nodemon');
});


app.listen(5000);

console.log('app listening on port 5000');
