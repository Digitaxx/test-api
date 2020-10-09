const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const db = new Sequelize('api','postgres', 'postgres', {
    dialect: 'postgres',
    host: 'db',
    port: '5432',
    define: {
        timestamps: false
    }
})

const productsRouter = require('./routes/products');
const articlesRouter = require('./routes/articles');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productsRouter);
app.use('/articles', articlesRouter);

module.exports = app;
