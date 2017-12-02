var express = require("express");



//==========Routers============================
var router = express.Router();

router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;