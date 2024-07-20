const Product = require('../models/Product');

exports.getHomepage = async (req, res) => {
  try {
    const banner = {
      imageUrl: 'http://example.com/banner.jpg',
      link: 'http://example.com/special-offer',
    };

    const products = await Product.find().limit(5);

    res.json({ banner, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
