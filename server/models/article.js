'use strict';
module.exports = (sequelize, Sequelize) => {
    const article = sequelize.define('article', {
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
    },{
        freezeTableName: true
    })
    article.associate = function(models) {
        article.belongsTo(models.product, { foreignKey: 'product_id', as: 'product', onDelete: 'CASCADE' })
    };

    return article;
}
