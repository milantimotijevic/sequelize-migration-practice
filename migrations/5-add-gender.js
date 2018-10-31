'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'gender', Sequelize.ENUM('MALE', 'FEMALE'));
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'gender');
    }
};