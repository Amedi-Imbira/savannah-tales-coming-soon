const express = require('express');
const sequelize = require('./database');
const Email = require('./Email');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.post('/waits', (req, res) => {
      Email.create(req.body).then(() => {
            res.send('Email is inserted')
      })
})

app.get('/', (req, res) => {
      res.send('Hello Express')
})

app.listen(5000, () => console.log(`Server is running on port 5000`));