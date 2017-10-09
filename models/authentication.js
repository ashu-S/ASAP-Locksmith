// Model structure for Authentication 

module.exports = function(sequelize, DataTypes) {
  var Authentication = sequelize.define("Authentication", {
    // 'user_name' field stores User's name
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'role' field stores user's role
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'access_level' field stores user's access level
    // 0 - admin level access
    // 1 - technician level access
    access_level:{
      type:DataTypes.NUMBER,
      allowNull: false;
    }
  });

  return Authentication;
};
