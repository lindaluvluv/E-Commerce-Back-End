const seedCategories = require('./category');
const seedProducts = require('./product');
const seedTags = require('./tag');
const seedProductTags = require('./product-tag');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced!');
  await seedCategories();
  console.log('Categories successfully seeded!');

  await seedProducts();
  console.log('Products successfully seeded!');

  await seedTags();
  console.log('Tags successfully seeded!');

  await seedProductTags();
  console.log('Product tags successfully seeded!');

  process.exit(0);
};

seedAll();

