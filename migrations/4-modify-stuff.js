'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('users', 'stuff', {type: 'INTEGER USING CAST("stuff" as INTEGER)', defaultValue: 555333});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('users', 'stuff', Sequelize.STRING);
    }
};