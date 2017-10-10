// Model structure for Skillset 

module.exports = function(sequelize, DataTypes) {
  var Skillset = sequelize.define("Skillset", {
    // 'skill' field stores skills 
    skill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Skillset;
};
