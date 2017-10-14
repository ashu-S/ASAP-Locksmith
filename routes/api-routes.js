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

  app.get("/api/accept/", function(req, res) {
             db.Job.findAll({
               where: {
                 job_status: "unaccepted"
               }
             })
          .then(function(result) {
            // return res.json(result);
            res.render("accept", {Job:result});
        });
    });

  // Delete a Job
  app.post("/api/delete", function(req, res) {
    console.log("Job Data:");
    console.log(req.body);
    db.Job.destroy({
      where: {
        id: req.body.job_id
      }
    })
    .then(function(result) {
      res.redirect("/api/accept")
    })
  });

  app.post("/api/update", function(req, res) {
    db.Job.update({
       job_status: "accepted"
     },
     {
       where: {
         id: req.body.job_id
       }
     })
     .then(function(result) {
       res.redirect("/api/accept")
     })
  });

};
