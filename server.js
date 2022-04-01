// Require Express to run server and routes
const bodyParser = require('body-parser');
const express = require('express');
// Start up an instance of app
const app = express();
const cors = require('cors');
// Setup Server
const port = 3000;
const path = require('path');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance (cors allows to disable the security concern for browsers and allow acces to resources.) Essentially allowing your web app to make calls to web API and vice versa.
app.use(cors());

//This is how we can call index.html using express on server load. There are also dynamic ways of linking the app. 
app.use(express.static('website'))

const server = app.listen(port, ()=>{
    console.log(`Server running on local host: ${port}`)
});




