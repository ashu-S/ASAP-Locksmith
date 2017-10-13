//load passport strategies
var db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var passport = require("../config/passport");

module.exports = function(app) {

  app.post('/api/login', function(req,res){
  	console.log('route fires');
  	console.log("user name: " + req.body.user_name);
  	console.log("password: " + req.body.password);
	  passport.authenticate(req.body.user_name,req.body.password,function(a,user,err){
	  	console.log("in passport.auth");
			if(user){
				console.log("inside if(user)");
				res.redirect("/admin");
			}
			else
			{
				console.log("inside if not user");
				res.redirect("/services");
			}
	  	});
});

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });
};