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

module.exports = router;



