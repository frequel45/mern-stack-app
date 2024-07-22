const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const bannerSchema = new mongoose.Schema({
  imageUrl: String,
  link: String,
});

const cartSchema = new mongoose.Schema({
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number,
  }],
});

const Product = mongoose.model('Product', productSchema);
const Banner = mongoose.model('Banner', bannerSchema);
const Cart = mongoose.model('Cart', cartSchema);

// Homepage API
app.get('/api/homepage', async (req, res) => {
  try {
    const banner = await Banner.findOne();
    const products = await Product.find().limit(10);
    res.json({ banner, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Product Display API
app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Cart APIs
app.post('/api/cart', async (req, res) => {
  try {
    let cart = await Cart.findOne();
    if (!cart) {
      cart = new Cart({ products: [] });
    }
    const { productId, quantity } = req.body;
    const productIndex = cart.products.findIndex(p => p.productId == productId);
    if (productIndex > -1) {
      cart.products[productIndex].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/cart/:productId', async (req, res) => {
  try {
    let cart = await Cart.findOne();
    if (cart) {
      cart.products = cart.products.filter(p => p.productId != req.params.productId);
      await cart.save();
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/cart/:productId', async (req, res) => {
  try {
    let cart = await Cart.findOne();
    if (cart) {
      const productIndex = cart.products.findIndex(p => p.productId == req.params.productId);
      if (productIndex > -1) {
        cart.products[productIndex].quantity = req.body.quantity;
        await cart.save();
      }
    }
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/cart', async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('products.productId');
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
