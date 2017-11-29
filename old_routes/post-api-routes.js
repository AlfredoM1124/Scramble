// THIS ROUTE WOULD DEFINE ALL THE USER MANIPULATIONS AND QUERY//
// ************************************************************

// Requering the Model

var db = require("../models");

// Routes //
//***************************************************************/

module.exports = function(app) {

    // //Getting al the user //

    app.get("/api/post", function(req, res) {
        var query = {};

        db.Post.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbPost) {
            res.json(dbPost);
        });

    });
};