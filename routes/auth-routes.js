//load passport strategies
var db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var bodyParser = require("body-parser");
var passport = require("../config/passport");

module.exports = function(app) {

  app.post('/api/login', function(req,res,next){
  	console.log('route fires');
  	console.log("user name: " + req.body.user_name);
  	console.log("password: " + req.body.password);
	  passport.authenticate(req.body.user_name,req.body.password,function(info,user,err){
	  	console.log("in passport.auth");
	  		if (err) { return next(err) }
	  		if (!user) {
                console.log('bad');
                req.session.messages = [info.message];
                return res.redirect('/login')
            }
			req.logIn(user, function (err) {
                    console.log('good');
                    if (err) { return next(err); }
                    return res.redirect('/admin');
               });
          })

});

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });
};