// THIS ROUTE WOULD DEFINE ALL THE USER MANIPULATIONS AND QUERY//
// ************************************************************

// Requering the Model

var db = require("../models");
var password = require('password-hash-and-salt')

// Routes //
//***************************************************************/

module.exports = function(app) {

    // //Getting al the user //

    app.get("/api/user", function(req, res) {
        var query = {};

        db.User.findAll({
            where: query,
            include: [db.Post]
        }).then(function(dbUser) {
            res.json(dbUser);
        });

    });

    //Create a New User//

    app.post("/api/user", function(req, res) {
        //Creating a new variable to save a password hash and salted
        var mypassword = '';
        //Here we are processing the hashing of the password with a promise in order to save it
        //into the database. The resolve of the function would result in the addition into the database
        var insert = new Promise(function(resolve, reject) {
            password(req.body.password).hash(function(error, hash) {
                if (error)
                    throw new Error('something is wrong');
                mypassword = hash;
                resolve(mypassword);
            })
        }).then(function() {
            db.User.create({
                full_name: req.body.full_name,
                username: req.body.username,
                email: req.body.email,
                bio: req.body.bio,
                password: mypassword
            }).then(function(dbUser) {
                res.json(dbUser);
            });
        });
    })
};