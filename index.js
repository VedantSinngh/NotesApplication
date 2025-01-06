const express = require('express');
// path module is used to set the path of the file
const path = require('path');
// app:- express() is a function to create an express application
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
// readdir :- iske help se read krskte hai kisi directory ko or uske content ko 
app.get('/', (req, res) => {
    fs.readdir('./files', (err, files) => {
        if (err) {
            console.error("Error reading directory:", err);
            return res.status(500).send("Internal Server Error");
        }
        res.render("index", { files }); // Pass files to the template
    });
});

app.listen(3000, () => {
    console.log("Its Running");
});