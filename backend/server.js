const express = require('express');
const sequelize = require('./database');
const cors = require('cors');
const Email = require('./Email');

sequelize.sync().then(() => console.log('db is ready'));

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())


app.post('/api/posts', (req, res) => {
      // console.log(req.body)
      Email.create(req.body).then(() => {
            res.send('Email is inserted')
            console.log(req.body)
      })
})

app.get('/', (req, res) => {
      res.send('Hello Express')
})

app.listen(5000, () => console.log(`Server is running on port 5000`));