const ProductsServices = require('./../services/products.api.services')
const service = new ProductsServices();

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const product = await service.findOne(id);
  res.json(product);
})

router.get('/api/myProducts', async (req, res) => {
  const products = await service.find();
  res.json(products);
})

router.get('/api/devices/', async (req, res) => {
  const products = await service.findDevices(req, res);
  res.json(products);
})

router.get('/api/devices/list/', async (req, res) => {
  const products = await service.findDevicesList();
  res.json(products);
})

router.get('/api/cars', async(req, res) => {
  const carsPrducts = await service.findCartList();
  res.json(carsPrducts);
})

router.get('/api/myCars/:brand/:color/:price', async (req, res) => {
  const carsList = await service.carsBrandAndColor(req, res);
  res.json(carsList)
})

router.get('/api/bigCars/', async (req, res) => {
  const carBigList = await service.listBigCars(req, res);
  res.json(carBigList)
});

router.post('/', async (req, res) => {
  const body = req.body;
  const newProduct = await service.createNewProduct(body);
  res.status(201).json({
    message: 'created',
    newProduct,
  })
})

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const product = await service.updateProduct(id, body);
  res.json(product);
})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const rta = await service.deleteProduct(id);
  res.json(rta);
})

module.exports = router
