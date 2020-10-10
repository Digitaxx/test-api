'use strict';
const randomWords = require('random-words');
require('dotenv').config();

async function generateItems(count, queryInterface, Sequelize) {
    let product = await queryInterface.sequelize.query(
        'SELECT * FROM "product"', {
            type: queryInterface.sequelize.QueryTypes.SELECT
        });
    let data = [];
    product.forEach((val, ind) => {
        for (let i = 1; i <= process.env.ARTICLE_SEEDER_COUNT; i++) {
            data.push({
                product_id: val.id,
                name: randomWords(),
                content: randomWords({exactly: 15, join: ' '})
            })
        }
    })
    return data;
}

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'article',
                await generateItems(process.env.ARTICLE_SEEDER_COUNT,
                queryInterface,
                Sequelize
            ));
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
