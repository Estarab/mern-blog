const express = require('express');
const Donation = require('../models/Donation');
const router = express.Router();

router.post('/donate', async (req, res) => {
    try {
        const { userId, amount } = req.body;
        const donation = new Donation({ user: userId, amount });
        await donation.save();
        res.status(201).json({ message: 'Donation successful' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
