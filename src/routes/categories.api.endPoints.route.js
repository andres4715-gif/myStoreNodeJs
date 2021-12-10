const CategoryServices = require('./../services/categories.api.services');
const service = new CategoryServices();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const categoriesListData = service.categorieList();
  res.json(categoriesListData);
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const category = service.findOneCategory(id);
  res.json(category)
})

router.get('/api/:categoryId/product/:productId/serial/:serialId', (req, res) => {
  const apiCategoriesList = service.categoriesApiList(req, res);
  res.json(apiCategoriesList);
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const body = req.body;
  const {id} = req.params.id;
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params.id;
  res.json({
    message: 'category deleted',
    id,
  })
})

module.exports = router;
