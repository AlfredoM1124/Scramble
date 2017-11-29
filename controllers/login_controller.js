var express = require("express");
var password = require('password-hash-and-salt')

//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];

router.get("/login", function(res, reg) {

    res.render("login");
})