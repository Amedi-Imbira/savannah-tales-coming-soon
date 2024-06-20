const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('savannah-tales-waiting-list', 'user', 'pass', {
      dialect: 'sqlite',
      host: './dev.sqlite'
});

module.exports = sequelize;