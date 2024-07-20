const express = require('express');
const router = express.Router();
const {
  addToCart,
  removeFromCart,
  updateCart,
  getCart,
} = require('../controllers/cartController');

router.post('/', addToCart);
router.delete('/:productId', removeFromCart);
router.put('/:productId', updateCart);
router.get('/', getCart);

module.exports = router;
