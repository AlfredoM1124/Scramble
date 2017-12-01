var express = require("express");
var passport = require('passport');


//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];

router.get("/", function(req, res) {
    res.render("login");
});

router.post("/",
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login'
    })
)
module.exports = router;