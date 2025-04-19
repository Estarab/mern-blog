// routes/payment.route.js

import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Middleware to handle payment requests
router.post('/pay', async (req, res) => {
  const { amount, phone, email } = req.body;

  // Data to send to Pesapal API
  const paymentData = {
    amount,
    phone,
    email,
    shortcode: process.env.PESAPAL_SHORTCODE,
    consumer_key: process.env.PESAPAL_CONSUMER_KEY,
    consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
  };

  try {
    // Send payment data to Pesapal API
    const response = await axios.post(process.env.PESAPAL_TEST_URL, paymentData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return res.status(200).json({
        success: true,
        message: 'Payment initiated successfully',
        responseData: response.data,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Error initiating payment',
      });
    }
  } catch (error) {
    console.error('Error during payment initiation:', error);
    return res.status(500).json({
      success: false,
      message: 'Error during payment initiation',
    });
  }
});

export default router;
