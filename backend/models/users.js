var Sequelize = require("sequelize");

module.exports = function (sequelize, DataTypes) {

   var Users = sequelize.define("Users", {
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      firstName: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [1]
         }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
   })

   return Users;

}
