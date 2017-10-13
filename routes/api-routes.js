// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // If a user sends data to add a new job...
  app.post("/api/new", function(req, res) {

    // Then add the job to the database using sequelize
    db.Job.create({
      client_name: req.body.client_name,
      client_location: req.body.client_location,
      client_contact: req.body.client_contact,
      services: req.body.services,
      specific_service: req.body.specific_service,
    })
    .then(function(result) {
      res.redirect("/api/accept/");
    });
  });

  //   db.Job.create({
  //     client_name: req.body.client_name,
  //     client_location: req.body.client_location,
  //     client_contact: req.body.client_contact,
  //     services: req.body.services,
  //     specific_service: req.body.specific_service,
  //     assigned: req.body.assigned
  //   })
  //   .then(function(result) {
  //     res.redirect("/api/accept");
  //   });
  // });

  app.get("/api/accept/", function(req, res) {
             db.Job.findAll({})
          .then(function(result) {
            // return res.json(result);
            res.render("accept", {Job:result});
        });
    });

//   // DELETE route for deleting jobs
//   app.delete("/api/jobs/:id", function(req, res) {
//
//   });
//
//   // PUT route for updating jobs
//   app.put("/api/jobs", function(req, res) {
//
//   });
};
