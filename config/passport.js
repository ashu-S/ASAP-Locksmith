//load bcrypt
var bCrypt = require("bcrypt-nodejs");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

module.exports = function(passport, user) {
  var User = user;
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });
  });

  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "user_name",
        passwordField: "password",
        roleField:"role",
        access_level: "access_level",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function(req, user_name, password,role,access_level, done) {
        var generateHash = function(password) {
          return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };

        User.findOne({ where: { user_name: user_name } }).then(function(user) {
          if (user) {
            return done(null, false, {
              message: "That user_name is already taken"
            });
          } else {
            var userPassword = generateHash(password);
            var data = {
              user_name: user_name,
              password: userPassword,
            };

            User.create(data).then(function(newUser, created) {
              if (!newUser) {
                return done(null, false);
              }

              if (newUser) {
                return done(null, newUser);
              }
            });
          }
        });
      }
    )
  );

  //LOCAL SIGNIN
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        // by default, local strategy uses username and password, we will override with user_name
        usernameField: "user_name",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function(req, user_name, password, done) {
        var User = user;

        var isValidPassword = function(userpass, password) {
          return bCrypt.compareSync(password, userpass);
        };

        User.findOne({ where: { user_name: user_name } })
          .then(function(user) {
            if (!user) {
              return done(null, false, { message: "Username does not exist" });
            }

            if (!isValidPassword(user.password, password)) {
              return done(null, false, { message: "Incorrect password." });
            }

            var userinfo = user.get();

            return done(null, userinfo);
          })
          .catch(function(err) {
            console.log("Error:", err);

            return done(null, false, {
              message: "Something went wrong with your Signin"
            });
          });
      }
    )
  );
};

// Exporting our configured passport
module.exports = passport;