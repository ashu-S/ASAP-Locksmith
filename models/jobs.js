// Model structure for Jobs 
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    // 'description' field stores Job description
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'client_location' field stores Client location
    client_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'client_name' field stores Client name
    client_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    client_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

//A Job belongsTo Technician

  
  Job.associate = function(models){
    Job.belongsTo(models.Technician, {foreignKey: { 
       allowNull: false 
      }
    }); // closes belong to
  }

  return Job;
};
