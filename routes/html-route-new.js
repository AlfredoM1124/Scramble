var express = require("express");

var router = express.Router();
var users = require("../models/")["user"];
var post = require("../models/")["post"];

router.get("/user_create", function(req, res) {
    res.render("user-create");

})
router.get("/admin/", function(req, res) {
    res.render("admin-index");
})

module.exports = router;