// Declare Dependencies
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');
// Import the Model to use its function
var db = require("../models");

var router = express.Router();
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

// Create all our logic and routes
router.get('/', (req, res) => {
    res.redirect('/index');
});

/**
 * index page
 */
router.get('/index', (req, res) => {
    db.User.findAll({}).then((results) => {
        res.render('index', { burgs: results });
    });
});

// Functions for USER 
var UserSearch = function(user, interests){
    this.user = user;
    this.interests = interests;
    this.date = Date.now();

};

function editUser (req, res){

};

function LoginUser (req, res){

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