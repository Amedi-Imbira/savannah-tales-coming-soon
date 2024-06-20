const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
      const { email } = req.body;

      try {
            // Check if email is provided
            if (!email) {
              return res.status(400).json({ error: 'Email is required' });
            }
        
            // Create a waitlist entry in the database
            const newEntry = await Waitlist.create({ email });
        
            // Respond with success message
            res.status(201).json({ message: 'Email added to waitlist', email: newEntry.email });
          } catch (error) {
            // Handle database errors
            console.error('Error adding email to waitlist:', error.message);
            res.status(500).json({ error: 'Failed to add email to waitlist' });
          }
});

module.exports = router;