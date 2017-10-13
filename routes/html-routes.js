// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
    res.render("index.handlebars");
  });

  
  // services route loads services.html
  app.get("/contact", function(req, res) {
    res.render("contact.handlebars");
  });

  // admin route loads admin.html
  app.get("/admin", function(req, res) {
    res.render("admin.handlebars");
  });

   app.get("/admin/view", function(req, res) {
    res.render("viewjob.handlebars");
  });
};
