'use strict';
const randomWords = require('random-words');
require('dotenv').config();

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateItems(count){
  let items = [];
  for(let i = 1; i <= count; i++){
    items.push({
      name: randomWords(),
      description: randomWords({exactly: 15, join: ' '}),
      price: getRandomInt(10, 1500)
    })
  }
  return items
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product', generateItems(process.env.PRODUCT_SEEDER_COUNT))
  },

  down: async (queryInterface, Sequelize) => {
    return false
  }
};
