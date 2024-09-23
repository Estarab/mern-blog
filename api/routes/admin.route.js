import express from 'express';
import adminMiddleware from '../middleware/adminMiddleware.js';
import Subscriber from '../models/Subscriber.js';

const router = express.Router();

// GET /api/admin/subscribers
router.get('/subscribers', adminMiddleware, async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching subscribers' });
  }
});

export default router;
