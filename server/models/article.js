'use strict';
module.exports = (sequelize, DataTypes) => {
    const article = sequelize.define('article', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        product_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'product',
                key: 'id'
            }
        },
        name: DataTypes.STRING,
        content: DataTypes.TEXT,
        created_at: {
            allowNull: false,
            type: DataTypes.DATE
        }
    })
    article.associate = function(models) {
        article.belongsTo(models.product, { foreignKey: 'id', as: 'product' })
    };

    return article;
}
