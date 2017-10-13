//load passport strategies
var db = require("../models");
var LocalStrategy = require("passport-local").Strategy;
var passport = require("../config/passport");

module.exports = function(app) {

  app.post('/api/login',
  passport.authenticate('local', { successRedirect: '/admin',
                                   failureRedirect: '/contact'
                                    }));

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });
};