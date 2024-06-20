const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const waitlistRoutes = require('./routes/waitlist');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/waitlist', waitlistRoutes);

// Initialize Sequelize and start server
async function startServer() {
  try {
    // Sync Sequelize models with database
    await sequelize.sync();
    console.log('Database synced');

    // Start Express server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error syncing database:', error.message);
  }
}

startServer();