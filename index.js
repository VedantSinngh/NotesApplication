const express = require('express');
// path module is used to set the path of the file
const path = require('path');
const app = express();
// fs module is used to read and write the file
const fs = require('fs');

// middleware
// app.use is used to set up the middleware
// middleware is a function that has access to the request and response object

// setting up the form 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting to view EJS
app.set('view engine', 'ejs');

// setting up the static files
app.use(express.static(path.join(__dirname, 'public')));

// setting up the routes
app.get('/', (req, res) => {
    fs.readdir(`./files`, (err, files) => {
        res.render("index");
    });
});

app.listen(3000, () => {
    console.log("Its Running");
});