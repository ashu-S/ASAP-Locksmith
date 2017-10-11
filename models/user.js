// Model structure for User

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("Authentication",{
    // 'user_name' field stores User's name
    prefix: DataTypes.CHAR CHAR(30) NOT NULL,
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // 'Password' field stores the password
    password: {
      type: DataTypes.STRING,
      allowNull: false
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
    },
    last_login: {
      type: DataTypes.DATE
    },

  });

  return User;
};
