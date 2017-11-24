// THIS ROUTE WOULD DEFINE ALL THE USER MANIPULATIONS AND QUERY//
// ************************************************************

// Requering the Model

var db = require("../models");

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
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        })
    })
};