'use strict';
module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
        id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.INTEGER
    })
    product.associate = (models) => {
        product.hasMany(models.article, { as: 'employes' })
    };

    return product;
}
