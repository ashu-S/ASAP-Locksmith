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
//
  // GET route for getting all of the jobs
  app.get("/api/jobs", function(req, res) {
  	console.log('admin view')
  	 var query = {};
    if (req.query.id) {
      query.TechnicianId = req.query.id;
    }

  	  db.Job.findAll({
  	   attributes:['client_name','description'],
       include: [{ model: db.Technician, attributes: ['id','location','current_job','job_status']}],
      
      }).then(function(dbJob) {
      	console.log('line 28',dbJob)
      	console.log("...................")
      	// console.log(dataValues.description)
      // res.json(dbJob);
     	 res.render("viewjob",{Job:dbJob});
    });
  });
//
  // Get rotue for retrieving a single job
  // app.get("/api/j/", function(req, res) {
  //          db.Technician.findAll({ })
  //       .then(function(result) {
  //         return res.json(result);
  //       });
  // });
//
//   // POST route for saving a new job
//   app.post("/api/jobs", function(req, res) {
//
//   });
// 
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
