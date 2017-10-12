// Model structure for Technicians 

module.exports = function(sequelize, DataTypes) {
  var Technician = sequelize.define("Technician", {
    // 'name' field stores Technician's name
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'location' field stores Technician's location
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'phNo' field stores Technician's phone number
    phNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // 'current_job' field stores Technician's phone number
    current_job: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // 'job_status' field stores status of assigned job
    job_status: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

// Technician has many jobs and many skills

  
  Technician.associate = function(models){
    Technician.hasMany(models.Job,{
      onDelete:"cascade"
    });
    Technician.hasMany(models.Skillset,{
      onDelete:"cascade"
    });
  };

  return Technician;
};
