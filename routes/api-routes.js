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

  // GET route for getting all of the jobs
  app.get("/api/jobs", function(req, res) {
 
  });

  // Get rotue for retrieving a single job
  app.get("/api/jobs/:id", function(req, res) {
 
  });

  // POST route for saving a new job
  app.post("/api/jobs", function(req, res) {
  
  });

  // DELETE route for deleting jobs
  app.delete("/api/jobs/:id", function(req, res) {
   
  });

  // PUT route for updating jobs
  app.put("/api/jobs", function(req, res) {
    
  });
};
