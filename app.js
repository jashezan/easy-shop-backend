const express = require("express");
const app = express();
const cookieParser = require("cookie-parser"); // For parsing cookies
const bodyParser = require("body-parser"); // For parsing body
const cors = require("cors"); // For handling CORS

app.use(express.json());
// For parsing application/json (req.body)
app.use(cookieParser());
// For parsing cookies from the HTTP Request Header (req.cookies) and setting cookies in the HTTP Response Header (res.cookie)
app.use(bodyParser.urlencoded({ extended: true }));
/*
For parsing application/x-www-form-urlencoded (req.body) 
(extended: true allows to parse nested objects) 
(extended: false only allows string or array) 
(default: true)
*/

// Importing Routes

// Error Handler

module.exports = app;
// Exporting app to be used in server.js (for starting the server) (see server.js)
