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
        successRedirect: '/login/user_info',
        failureRedirect: '/login'
    })
)

router.get("/user_info", function(req, res) {
    User.findOne({
        where: { id: req.user.id }
    }).then(function(data_user) {
        res.json(data_user);
    })
})

module.exports = router;