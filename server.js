// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes
app.length('/', function(req, res){
    res.send('<h1>Hello Express</h1>');
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
    console.log('Listening on port 3000');
});