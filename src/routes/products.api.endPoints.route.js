const ProductsServices = require('./../services/products.api.services')
const service = new ProductsServices();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
})

router.get('/api/myProducts', (req, res) => {
  const products = service.find();
  res.json(products);
})

router.get('/api/devices/', (req, res) => {
  const products = service.findDevices(req, res);
  res.json(products);
})

router.get('/api/devices/list/', (req, res) => {
  const products = service.findDevicesList();
  res.json(products);
})

router.get('/api/cars', (req, res) => {
  const carsPrducts = service.findCartList();
  res.json(carsPrducts);
})

router.get('/api/myCars/:brand/:color/:price', (req, res) => {
  const carsList = service.carsBrandAndColor(req, res);
  res.json(carsList)
})

router.get('/api/bigCars/', (req, res) => {
  const carBigList = service.listBigCars(req, res);
  res.json(carBigList)
});

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
    message: 'update',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params.id;
  res.json({
    message: 'product deleted',
    id,
  })
})

module.exports = router
