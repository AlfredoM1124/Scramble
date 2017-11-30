var express = require("express");

//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];

router.get("/", function(req, res) {
    res.render("login");
});

router.post("/api-user-login", function(req, res) {
    // This password is commming from the Form//
    var password_form = req.body.password;
    //let find the username and password from the database
    User.findOne({
        where: { username: req.body.username }
    }).then(function(userData) {
        if (userData) {
            var user_info = {
                id: userData.dataValues.id,
                username: userData.dataValues.username,
                password: userData.dataValues.password
            };
            console.log(user_info);
            if (!user_info.id) { console.log("is not null") };
        }
    })

})

module.exports = router;