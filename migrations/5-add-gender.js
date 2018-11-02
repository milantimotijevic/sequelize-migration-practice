'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'gender', Sequelize.ENUM('MALE', 'FEMALE'));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'gender').then(function() {
            return queryInterface.sequelize.query('DROP TYPE enum_users_gender');
        });
    }
};