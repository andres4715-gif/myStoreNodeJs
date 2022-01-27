const CategoryServices = require('./../services/categories.api.services');
const service = new CategoryServices();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const categoriesListData = service.categorieList();
  res.json(categoriesListData);
})

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const category = service.findOneCategory(id);
  res.json(category);
})

router.get('/api/:categoryId/product/:productId/serial/:serialId', (req, res) => {
  const apiCategoriesList = service.categoriesApiList(req, res);
  res.json(apiCategoriesList);
})

router.post('/', (req, res) => {
  const body = req.body;
  const newCategory = service.createNewCategorie(body);
  res.status(201).json({
    message: 'created',
    data: newCategory
  });
})

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const category = service.updateCategory(id, body);
  res.json(category);
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const rta = service.deleteCategory(id);
  res.json(rta);

})

module.exports = router;
