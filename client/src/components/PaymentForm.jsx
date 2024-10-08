import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
    const [amount, setAmount] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('/api/payment/pay', {
                amount,
                phoneNumber,
            });

            alert('Payment successful: ' + JSON.stringify(response.data));
        } catch (error) {
            setError('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handlePayment} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Amount (in your currency)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                className="border rounded p-2"
            />
            <input
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                className="border rounded p-2"
            />
            <button type="submit" disabled={loading} className="bg-blue-500 text-white p-2 rounded">
                {loading ? 'Processing...' : 'Pay'}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
};

export default PaymentForm;
