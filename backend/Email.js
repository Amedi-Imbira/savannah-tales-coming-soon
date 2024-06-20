const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Email extends Model {}

Email.init({
      email: {
            type: DataTypes.STRING
      },
      created_at: {
            type: DataTypes.DATE
      }
}, {
      sequelize,
      modelName:'email'
})

model.exports = Email;