const express = require('express');

const router = express.Router();

router.get('/api/:categoryId/product/:productId', (req, res) => {
  const category = req.params.categoryId;
  const product = req.params.productId;
  res.json({
    categoryId: category,
    producId: product,
  });
});

router.get('/', (req, res) => {
  const {categorieId, section, sector} = req.query;
  if (categorieId && section && sector) {
    res.json({
      categorieId,
      section,
      sector
    })
  } else {
    req.send('No category specified');
  }
})

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

module.exports = router;
