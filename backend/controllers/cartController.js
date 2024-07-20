const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    let cart = await Cart.findOne();

    if (!cart) {
      cart = new Cart();
    }

    const product = await Product.findById(productId);

    const itemIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.products[itemIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }

    await cart.save();

    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const { productId } = req.params;

  try {
    let cart = await Cart.findOne();

    const itemIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.products.splice(itemIndex, 1);
    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateCart = async (req, res) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  try {
    let cart = await Cart.findOne();

    const itemIndex = cart.products.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.products[itemIndex].quantity = quantity;
    }

    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('products.productId');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
