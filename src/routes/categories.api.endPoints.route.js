const CategoryServices = require('./../services/categories.api.services');
const service = new CategoryServices();

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const categoriesListData = await service.categorieList();
  res.json(categoriesListData);
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const category = await service.findOneCategory(id);
  res.json(category);
})

router.get('/api/:categoryId/product/:productId/serial/:serialId', async (req, res) => {
  const apiCategoriesList = await service.categoriesApiList(req, res);
  res.json(apiCategoriesList);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newCategory = await service.createNewCategorie(body);
  res.status(201).json({
    message: 'created',
    data: newCategory
  });
})

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const category = await service.updateCategory(id, body);
  res.json(category);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const rta = await service.deleteCategory(id);
  res.json(rta);

})

module.exports = router;
