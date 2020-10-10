const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const bodyParser = require('body-parser')

const productRouter = require('./routes/product');
const articleRouter = require('./routes/article');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/product', productRouter);
app.use('/article', articleRouter);

module.exports = app;
