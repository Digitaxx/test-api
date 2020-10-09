'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('articles', {
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
     content: Sequelize
   })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
