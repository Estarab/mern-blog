import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handlePayment = async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/payment/pay', {
        amount,
        phone,
        email,
      });

      if (response.data.success) {
        alert('Payment initiated successfully');
        // You can redirect to a confirmation page or show a success message
      } else {
        setErrorMessage('Failed to initiate payment.');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      setErrorMessage('Error during payment.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Pesapal Payment</h2>
      <div>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handlePayment} disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default PaymentComponent;
