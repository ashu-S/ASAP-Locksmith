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
  	   attributes:['TechnicianId','client_name','description'],
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

//   // GET route for getting all of the jobs
//   app.get("/api/jobs", function(req, res) {
//
//   });
//
  // POST route for saving a new job
  app.post("/api/accept", function(req, res) {
    console.log(req.body);
    db.Job.create({
      client_name: req.body.client_name,
      client_location: req.body.client_location,
      client_contact: req.body.client_contact,
      services: req.body.services,
      specific_service: req.body.specific_service,
      assigned: req.body.assigned
    })
    .then(function(result) {
      res.redirect("/api/accept");
    });
  });

  app.get("/api/accept/", function(req, res) {
             db.Job.findAll({})
          .then(function(result) {
            // return res.json(result);
            res.render("accept", {Job:result});
        });
    });

  //
  // app.get("/api/jobs", function(req, res) {
  //     console.log('admin view')
  //      var query = {};
  //   if (req.query.id) {
  //     query.TechnicianId = req.query.id;
  //   }
  //
  //      db.Job.findAll({
  //        attributes:['description'],
  //      include: [{ model: db.Technician, attributes: ['current_job']}],
  //
  //    }).then(function(dbJob) {
  //         console.log('line 28',dbJob)
  //         console.log("...................")
  //         // console.log(dataValues.description)
  //     res.json(dbJob);
  //     // res.render("viewjob.handlebars",dbJob);
  //   });
  // });

  //
  // // post route -> back to index
  // app.post("/burgers/create", function(req, res) {
  //   // takes the request object using it as input for buger.addBurger
  //   db.Jobs.create(req.body.client_name, function(error) {
  //     if (error) {
  //       console.log("Please enter a name then hit submit!");
  //     }
  //     // render back to index with handle
  //     res.redirect("/");
  //   });
  // });



//   // DELETE route for deleting jobs
//   app.delete("/api/jobs/:id", function(req, res) {
//
//   });
//
//   // PUT route for updating jobs
//   app.put("/api/jobs", function(req, res) {
//
//   });

// Get Route for weekly report

app.get("/api/getDate", function(req, res) {
  console.log('req.body');
  db.Job.findAll({

   attributes:['TechnicianId','client_name','description','createdAt'],
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
    //var date1= $("#date3").val().trim();
    console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM');
    console.log(req.body.date3)
console.log(req.query);
 console.log('MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM');
  db.Job.findAll({
   attributes:['TechnicianId','client_name','description',[sequelize.fn('DATE_FORMAT', sequelize.col('Job.createdAt'),'%m-%d-%Y'),'createdAt']],
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

