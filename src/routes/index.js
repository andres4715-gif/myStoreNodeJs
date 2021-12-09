const express = require('express');

const productsRouter = require('./products.api.endPoints.route');
const categoriesRouter = require('./categories.api.endPoints.route');
const usersRouter = require('./users.api.endPoints.route');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi
