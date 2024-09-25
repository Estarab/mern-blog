import express from 'express';
import StakeholderSignUpModel from '../models/StakeholderSignUp.model.js';

const router = express.Router();

// POST /api/stakeholder-signup
router.post('/', async (req, res) => {
  const { name, email, phone } = req.body;

  try {
    const newStakeholder = new StakeholderSignUpModel({ name, email, phone });
    await newStakeholder.save();
    res.status(201).json({ message: 'Stakeholder created successfully!' });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ error: 'Failed to create stakeholder.' });
  }
});

export default router;
