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
        }).then(function(dbUser) {
            res.json(dbUser);
        });

    });
};