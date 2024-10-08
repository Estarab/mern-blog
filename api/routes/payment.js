import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

// Function to generate a unique token
const generateToken = async () => {
    const { MTN_MOMO_API_KEY, MTN_MOMO_API_SECRET, MTN_MOMO_BASE_URL } = process.env;
    const response = await axios.post(`${MTN_MOMO_BASE_URL}/v1/token`, {}, {
        auth: {
            username: MTN_MOMO_API_KEY,
            password: MTN_MOMO_API_SECRET,
        },
        headers: {
            'Ocp-Apim-Subscription-Key': MTN_MOMO_API_KEY,
            'Content-Type': 'application/json',
        },
    });
    return response.data.access_token;
};

// Route to initiate payment
router.post('/pay', async (req, res) => {
    const { amount, phoneNumber } = req.body;

    try {
        const token = await generateToken();
        const paymentResponse = await axios.post(`${process.env.MTN_MOMO_BASE_URL}/v1_0/transactional/send`, {
            amount,
            currency: "EUR", // Use your currency
            externalId: "your_external_id", // Generate a unique external ID
            payer: {
                partyIdType: "MSISDN",
                partyId: phoneNumber,
            },
            payerMessage: "Payment for services",
            payeeNote: "Thank you for your payment",
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Ocp-Apim-Subscription-Key': process.env.MTN_MOMO_API_KEY,
            },
        });

        res.status(200).json(paymentResponse.data);
    } catch (error) {
        console.error('Payment error:', error);
        res.status(500).json({ message: 'Payment failed', error: error.response.data });
    }
});

export default router;
