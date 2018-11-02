'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    stuff: {type: DataTypes.INTEGER, defaultValue: 555333},
    info: {type: Sequelize.STRING, defaultValue: 'MUHAHAHAHAHA'},
    gender: {type: Sequelize.ENUM('MALE', 'FEMALE', 'CRAZY CAT PERSON')}

  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};