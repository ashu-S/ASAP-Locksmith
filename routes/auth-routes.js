//load passport strategies
var db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var bodyParser = require("body-parser");
var passport = require("../config/passport");

module.exports = function(app) {
	// post Login route
	app.post('/api/login', passport.authenticate('local-login', {successRedirect: '/admin', failureRedirect: '/login'}), function(req, res){ 
			console.log('route fires');
		  	console.log("user name: " + req.body.user_name);
		  	console.log("password: " + req.body.password);
			// res.json(res);
	});

	app.post("/api/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/login",

      failureRedirect: "/signup"
    })
  );

	// logout route
 	app.get("/api/logout", function(req, res) {
    	req.session.destroy(function(err) {
    		res.redirect("/");
    	});
  	});
};