const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
      const { email } = req.body;

      // check if email is provided in the request body
      if (!email) {
            return res.status(400).json({ error: 'Email is required' });
      }

      // Placeholder logic to save the email to the database
      // In a real application, you would integrate this with your database logic
  
      // Send a success response to the client
      res.status(201).json({ message: 'Email added to waitlist', email });
});

module.exports = router;