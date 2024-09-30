import express from 'express';
import SubscriptionModel from '../models/SubscriptionModel.js'; // Adjust the path as needed

const router = express.Router();

// POST route for subscribing
router.post('/', async (req, res) => {
  const { email } = req.body;

  try {
    const newSubscription = new SubscriptionModel({ email });
    await newSubscription.save();
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Subscription error:', error);
    res.status(500).json({ error: 'Failed to subscribe.' });
  }
});

export default router;
