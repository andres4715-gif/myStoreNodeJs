const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const productsAvailable = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    productsAvailable.push({
      productName: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(productsAvailable);
});

router.get('/api/myProducts', (req, res) => {
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/api/devices', (req, res) => {
  const {brand, color, price} = req.query;
  if (brand && color && price) {
    res.json({
      brand,
      color,
      price,
    });
  } else {
    res.send('without devices');
  };
});

router.get('/api/cars/:marca/:color', (req, res) => {
  const marca = req.params.marca;
  const color = req.params.color;
  res.json({
    carro_marca: marca,
    carro_color: color,
  });
});

router.get('/api/cars2/', (req, res) => {
  const {id, brand, color, model, description} = req.query;
  res.json({
    id,
    brand,
    color,
    model,
    description,
  });
});

router.get('/api/cars', (req, res) => {
  res.json([
    {
      id: 1,
      brand: 'Chevrolet',
      color: 'write',
      model: '2011',
      description: 'aveo gt',
    },
    {
      id: 2,
      brand: 'Chevrolet',
      color: 'green',
      model: '1993',
      description: 'swith',
    },
    {
      id: 3,
      brand: 'Renault',
      color: 'green',
      model: '2005',
      description: 'expression',
    },
    {
      id: 4,
      brand: 'Mazda',
      color: 'gray',
      model: '2013',
      description: 'tres',
    },
  ]);
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params.id;
  res.json({
    message: 'update',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params.id;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router
