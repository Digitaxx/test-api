'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('article', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            product_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'product',
                    key: 'id'
                }
            },
            name: Sequelize.STRING,
            content: Sequelize.TEXT,
            created_at: {
                allowNull: false,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                type: Sequelize.DATE
            }
        })
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.dropTable('article');
    }
};
