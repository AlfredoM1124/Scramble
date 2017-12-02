var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");
var User = require("./models")["User"];

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

// Password check and handle
// =============================================================

app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy(
    function(username, password, done) {
        console.log(username, password);
        User.findOne({
            where: { username: username }
        }).then(function(user) {
            if (!user) {
                return done(null, false, )
            }
            if (bcrypt.compareSync(password, user.password)) {
                return done(null, user);
            }
            return done(null, false)
        })
    }
));

passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(function(id, done) {
    User.findOne({
        where: { id: id }
    }).then(function(user) {
        if (user == null) {
            done(new Error('Wrong user id'))
        }
        done(null, user)
    })
})


// Routes
// =============================================================
// require("./old_routes/user-api-routes.js")(app);
// require("./old_routes/post-api-routes.js")(app);
// require("./old_routes/html-routes.js")(app)

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes and give the server access to them
var index = require("./controllers/index_controller.js");
var routes = require("./controllers/user_controller.js");
var routes_login = require("./controllers/login_controller.js");

app.use("/", index);
app.use("/", routes);
app.use("/admin", routes);
app.use("/login", routes_login);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});