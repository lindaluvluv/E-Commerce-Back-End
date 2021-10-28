const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'winter cloth',
  },
  {
    category_name: 'daily essential',
  },
  {
    category_name: 'stationery goods',
  },
  {
    category_name: 'home decor',
  },
  {
    category_name: 'designer shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;