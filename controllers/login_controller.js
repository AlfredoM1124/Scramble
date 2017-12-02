var passport = require('passport');


//==========Routers============================
var router = require('express').Router();
var User = require("../models/")["User"];

router.post("/",
    passport.authenticate('local', {
        successRedirect: '/account',
        failureRedirect: '/failed'
    })
)

router.get('/failed', (req, res) => {
    res.render('failed');
});


module.exports = router;