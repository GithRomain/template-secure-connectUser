'use strict'
// require express and bodyParser
const  express = require("express");
const  bodyParser = require("body-parser");
const cors = require('cors')
// Import DB Connection
const db = require("./config/db");

// create express app
const  app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// use bodyParser middleware on express app
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

const corsOptions = {
    //origin: 'http://localhost:8081',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

// Import API route
const UserRoutes = require('./app/routes/user.routes.js'); //importing route
// routes
UserRoutes(app);

// Handle production
if (process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/build/'));

    // Handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/build/index.html'));
}

// define port to run express app
const  port = process.env.PORT || 5000;

// Add endpoint
app.get("/", (req, res) => {
    res.json({ message: "Server lives!!!" });
});

// Listen to server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});