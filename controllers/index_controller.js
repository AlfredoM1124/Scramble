var express = require("express");
// Encryption package
var bcrypt = require('bcrypt');
const saltRounds = 10;
//
var User = require("../models/")["User"];

//==========Routers============================
var router = express.Router();
var passport = require('passport');
//Would render the form to create a new user
router.get("/", function (req, res) {
      res.render('index');
});

router.post("/",
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login'
    })
)

module.exports = router;