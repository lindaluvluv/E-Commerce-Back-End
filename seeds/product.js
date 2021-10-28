const { Product } = require('../models');

const productData = [
  {
    product_name: 'sweater',
    price: 21.99,
    stock: 5,
    category_id: 1,
  },
  {
    product_name: 'water bottle',
    price: 15.99,
    stock: 5,
    category_id: 2,
  },
  {
    product_name: 'notebook',
    price: 18.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: 'container candle',
    price: 22.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'sandals',
    price: 34.99,
    stock: 10,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;