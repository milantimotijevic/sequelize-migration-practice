'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@gmail.com',
        stuff: 5,
        info: 'Crazy',
        gender: 'MALE',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },
  down: (queryInterface, Sequelize) => {
      return queryInterface.sequelize.query('DELETE from users where "firstName"=\'John\' AND "lastName"=\'Doe\'');
  }
};
