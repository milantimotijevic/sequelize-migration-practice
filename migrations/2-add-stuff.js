'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'stuff', Sequelize.STRING);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'stuff');
    }
};