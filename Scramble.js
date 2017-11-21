// Declare Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./controllers/scramble_controller.js");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================
// Create an instance of the express app 
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  }); 