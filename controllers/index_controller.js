var express = require("express");
// Encryption package
var bcrypt = require('bcrypt');
const saltRounds = 10;
//

//==========Routers============================
var router = express.Router();

//Would render the form to create a new user
router.get("/", function (req, res) {
      res.render('index');
});


module.exports = router;