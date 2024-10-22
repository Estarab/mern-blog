// routes/volunteer.route.js
import express from 'express';
import Volunteer from '../models/Volunteer.js';

const router = express.Router();

// POST route for saving volunteer details
router.post('/', async (req, res) => {
  const { name, email, phone, skills } = req.body;

  try {
    const newVolunteer = new Volunteer({ name, email, phone, skills });
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully!' });
  } catch (error) {
    console.error('Error saving volunteer:', error);
    res.status(500).json({ message: 'Error registering volunteer' });
  }
});

export default router;
