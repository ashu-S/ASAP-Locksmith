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
  	console.log('admin view')
  	 var query = {};
    if (req.query.id) {
      query.TechnicianId = req.query.id;
    }

  	  db.Job.findAll({
  	   attributes:['TechnicianId','client_name','services'],
       include: [{ model: db.Technician, attributes: ['id','location','current_job','job_status']}],

      }).then(function(dbJob) {
      	console.log('line 28',dbJob)
      	console.log("...................")
        res.render("viewjob",{Job:dbJob});
    });
  });

  // POST route for saving a new job

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

app.get("/api/getDate", function(req, res) {
  console.log('req.body');
  db.Job.findAll({

   attributes:['TechnicianId','client_name','services','createdAt'],
     where : {
     createdAt: {
        $between: [req.query.startdate, req.query.endDate]
        }},
       include: [{ model: db.Technician, attributes: ['location','current_job','job_status']}]
      }).then(function(result) {
        console.log("...................")
        console.log('line 28',result)
        console.log("...................")
      res.render("report",{Job:result});

    });
});


 // Get for monthly report
  app.get("/api/getDetails", function(req, res) {
    var sequelize=require('sequelize');
    db.Job.findAll({
     attributes:['TechnicianId','client_name','services',[sequelize.fn('DATE_FORMAT', sequelize.col('Job.createdAt'),'%m-%d-%Y'),'createdAt']],
     where:
     //{createdAt:'2016-01-11T00:00:00.000Z'},
       sequelize.where(sequelize.fn('DATE_FORMAT', sequelize.col('Job.createdAt'),'%b-%Y'),req.query.date3),
       include: [{ model: db.Technician, attributes: ['location','current_job','job_status']}]
      }).then(function(result) {
        console.log('line 28',result)
        console.log("...................")
      // res.redirect("/api/month/");
      res.render("monthlyReport",{Job:result});
      // res.render("report",{Job:result});

    });
  });

};
