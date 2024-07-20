const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
  additionalDetails: String,
});

module.exports = mongoose.model('Product', productSchema);
