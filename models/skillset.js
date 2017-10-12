// Model structure for Skillset 

module.exports = function(sequelize, DataTypes) {
  var Skillset = sequelize.define("Skillset", {
    // 'service_type' field stores different types of services eg. Residential, Commercial,Car etc. 
    service_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'skill' field stores skills required for different types of services
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  return Skillset;
};
