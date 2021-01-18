const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('orderproduct', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER
  }
});
