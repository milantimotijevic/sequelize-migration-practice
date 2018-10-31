'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.changeColumn(
            'users',
            'gender',
            {
                type: Sequelize.TEXT,
            },
        );
          return queryInterface.sequelize.query('drop type enum_users_gender;')
                .then(() => queryInterface.changeColumn(
                    'users',
                    'gender',
                    {
                        type: Sequelize.ENUM('MALE','FEMALE', 'CRAZY CAT PERSON'),
                    },
                ));
    },
    down: (queryInterface, Sequelize) => {
        queryInterface.changeColumn(
            'users',
            'gender',
            {
                type: Sequelize.TEXT,
            },
        );
        return queryInterface.sequelize.query('drop type enum_users_gender;')
            .then(() => queryInterface.changeColumn(
                'users',
                'gender',
                {
                    type: Sequelize.ENUM('MALE','FEMALE'),
                },
            ));
    }
};