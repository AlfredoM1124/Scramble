var express = require("express");
var password = require('password-hash-and-salt')

//==========Routers============================
var router = express.Router();
var User = require("../models/")["User"];


var search = function(username, password) {
    User.findOne({
        where: { username: username }
    }).then(function(dbUser) {
        console.log(dbUser);
    })
}

search("rcastro", null);