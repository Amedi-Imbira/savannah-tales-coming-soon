const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Waitlist = sequelize.define('waitlist', {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      }
});

module.exports = Waitlist;