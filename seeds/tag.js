const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'white',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'grey',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;