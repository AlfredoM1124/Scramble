// Declare Dependencies
var express = require("express");
var passport = require("passport");

var router = express.Router();
var app = express();

// Import the Model to use its function
var scramble = require("../models/users");

// Create all our logic and routes


// Functions for USER 
var UserSearch = function(user, interests){
    this.user = user;
    this.interests = interests;
    this.date = Date.now();

};

var createUser = function(name, gender, bio, interests){
    this.name = name;
    this.gender = gender;
    this.bio = bio;
    this.interests = interests;

    
};

function createProfile (req, res){

};
function postReview (req, res){

};
function postComment (req, res){

};
function editInterests (req, res){

};
function profilePicture (req, res){

};
function editBio (req, res){

};
// End USER Functions

// Start ADMIN functions

// End ADMIN functions

// Export routes for scramble.js to use.
module.exports = router;