var express = require("express");
var password = require('password-hash-and-salt')

//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];

router.get("/", function(req, res) {
    res.render("login");
});

router.post("/api-user-login", function(req, res) {
    var password_form = req.body.password;
    //let find the username and password from the database
    User.findOne({
        where: { username: req.body.username }
    }).then(function(userData) {
        var user_info = userData.dataValues;
        console.log(user_info.password);
    })


    //Here we are verify if the password is correct 





    // password(password_form).verifyAgainst(myuser, function(error, verified) {
    //     if (error) {
    //         throw new Error('Something went wrong!');
    //     };



    // });

})

module.exports = router;