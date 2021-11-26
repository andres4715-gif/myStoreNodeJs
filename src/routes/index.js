const productsRouter = require('./products.api.endPoints.route');
const categoriesRouter = require('./categories.api.endPoints.route');
const exampleRouter = require('./examples.api.endPoints.route');
const usersRouter = require('./users.api.endPoints.route');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/categories', categoriesRouter);
  app.use('/examples', exampleRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi
