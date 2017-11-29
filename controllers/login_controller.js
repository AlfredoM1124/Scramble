var express = require("express");
var password = require('password-hash-and-salt')

//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];

router.get("/", function(req, res) {

    res.render("login");
})

module.exports = router;