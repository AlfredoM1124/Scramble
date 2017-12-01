var passport = require('passport');


//==========Routers============================
var router = require('express').Router();
var User = require("../models/")["User"];

router.post("/",
    passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/login'
    })
)
module.exports = router;