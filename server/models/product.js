'use strict';
module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define('product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.INTEGER
    },{
        freezeTableName: true
    })
    product.associate = function(models) {
        product.hasMany(models.article, {foreignKey: 'product_id'})
    };

    return product;
}
