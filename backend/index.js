const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const waitlistRoutes = require('./routes/waitlist');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/waitlist', waitlistRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});