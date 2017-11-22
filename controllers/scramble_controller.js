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
function editInterests (req, res){

};
function profilePicture (req, res){

};
function editBio (req, res){

};
// End USER Functions
// --------------------------
// Start ADMIN functions
var createAdmin = function (name, bio){
    this.name = name;
    this.bio = bio;
};
// End ADMIN functions
// ---------------------------
// Start POST functions
var newPost = function(title, author, ratins){
    this.title = title;
    this.author = author;
    this.ratings = ratings;
    
};
function postReview (req, res){
    
};
function postComment (req, res){
    
};
// End POST function
// ---------------------------

// Export routes for scramble.js to use.
module.exports = router;