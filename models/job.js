// Model structure for Jobs

module.exports = function(sequelize, DataTypes) {
  var Job = sequelize.define("Job", {
    // 'client_name' field stores Client name
    client_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // 'client_location' field stores Client location
    client_location: {
      type: DataTypes.STRING,
      allowNull: false
    },

    client_contact: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // 'description' field stores Job description
    services: {
      type: DataTypes.STRING,
      allowNull: false
    },
    specific_service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assigned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

  });
//
// //A Job belongsTo Technician
//
//   Job.associate = function(models){
//     Job.belongsTo(models.Technician, {foreignKey: {
//        allowNull: false
//       }
//      }); // closes belong to
//   }

  return Job;
};