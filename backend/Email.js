const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Email extends Model {}

Email.init({
      email: {
            type: DataTypes.STRING
      }
}, {
      sequelize,
      modelName:'email'
})

module.exports = Email;