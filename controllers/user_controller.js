var express = require("express");
var bcrypt = require('bcrypt');
const saltRounds = 10;


//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];
var Post = require("../models/")["Post"];

//Would render the form to create a new user
router.get("/user_create", function(req, res) {
    res.render("user-create"); // *****We need to change this to the front end form  * ***
});


/////////////////////////////////////
// this is the response of the form
//////////////////////////////////////
router.post("/api-user-create", function(req, res) {
    //Create a New User//

    //Creating a new variable to save a password hash and salted
    var mypassword = '';
    //Here we are processing the hashing of the password with a promise in order to save it
    //into the database. The resolve of the function would result in the addition into the database
    var insert = new Promise(function(resolve, reject) {
        var hash = bcrypt.hashSync(req.body.password, saltRounds);
        mypassword = hash;
        resolve(mypassword);
    }).then(function() {
        User.create({
            full_name: req.body.full_name,
            username: req.body.username,
            email: req.body.email,
            bio: req.body.bio,
            password: mypassword
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });

});



router.get("/admin/", function(req, res) {
    var query = {};
    User.findAll({
        where: query,
        include: [Post]
    }).then(function(user_data) {



        res.render('admin-index', { user_data });
        // res.json({ user_data });
    });

})

module.exports = router;