'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'info', {type: Sequelize.STRING, defaultValue: 'MUHAHAHAHAHA'});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'info');
    }
};