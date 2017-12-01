var express = require("express");
// Encryption package

//

//==========Routers============================
var router = express.Router();
var User = require("../models")["User"];

User.findOne({
    where: {
        id: '1'
    }
}).then(function(data) {
    console.log(data.dataValues);
})