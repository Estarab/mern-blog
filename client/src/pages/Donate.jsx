import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { SiAirtel } from 'react-icons/si'; // Airtel icon
// Remove SiZamtel import since it's not available
// import { SiZamtel } from 'react-icons/si'; 

const DonatePage = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAmountClick = (value) => {
    setCustomAmount(value.toString());
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!customAmount) {
      alert('Please enter an amount.');
      return;
    }

    const donationDetails = {
      name,
      email,
      phone,
      amount: customAmount || 30,
      paymentMethod,
    };

    try {
      const response = await fetch('http://localhost:3000/api/donation/donation.route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationDetails),
      });

      if (response.ok) {
        alert('Donation details sent successfully!');
        // Reset form
        setName('');
        setEmail('');
        setPhone('');
        setCustomAmount('');
        setPaymentMethod('');
      } else {
        alert('Failed to send donation details.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending donation details.');
    }
  };

  return (
    <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600">
        Join Us: Donate K1 a Day or K30 a Month
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
      </p>

      <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
        <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
          <button
            type="button"
            onClick={() => handleAmountClick(1)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
          >
            K1 / Day
          </button>
          <button
            type="button"
            onClick={() => handleAmountClick(30)}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
          >
            K30 / Month
          </button>
        </div>
        <input
          type="number"
          placeholder="Enter own amount"
          value={customAmount}
          onChange={handleCustomAmountChange}
          className="p-2 rounded bg-white text-black border border-gray-300 w-48 sm:w-56 focus:outline-none focus:border-pink-500"
          required
        />
      </div>

      <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
      <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('Airtel Money')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${paymentMethod === 'Airtel Money' ? 'bg-purple-100 border-pink-500' : 'border-gray-300'}`}
        >
          <SiAirtel className="text-2xl text-red-700 mr-2" />
          Airtel Money
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('Zamtel')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${paymentMethod === 'Zamtel' ? 'bg-purple-100 border-pink-500' : 'border-gray-300'}`}
        >
          {/* Placeholder for Zamtel icon */}
          <span className="text-2xl text-green-600 mr-2">Z</span>
          Zamtel
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('MTN')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${paymentMethod === 'MTN' ? 'bg-purple-100 border-pink-500' : 'border-gray-300'}`}
        >
          MTN
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('Card')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${paymentMethod === 'Card' ? 'bg-purple-100 border-pink-500' : 'border-gray-300'}`}
        >
          <FaCreditCard className="text-2xl text-purple-500 mr-2" />
          Card
        </button>
      </div>

      {paymentMethod && (
        <form className="w-full max-w-sm mb-6" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
            required
          />
          <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110">
            Donate
          </button>
        </form>
      )}
    </div>
  );
};

export default DonatePage;




// import React, { useState } from 'react';
// import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// import { SiAirtel /*, SiMtn*/ } from 'react-icons/si';
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// const DonatePage = () => {
//   const [customAmount, setCustomAmount] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');

//   const handleAmountClick = (value) => {
//     setCustomAmount(value.toString());
//   };

//   const handleCustomAmountChange = (e) => {
//     setCustomAmount(e.target.value);
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const config = {
//     public_key: 'YOUR_FLUTTERWAVE_PUBLIC_KEY',
//     tx_ref: Date.now(),
//     amount: customAmount || 30, // default to 30 if no custom amount
//     currency: 'ZMW',
//     payment_options: 'card,mobilemoneyzambia,mobilemoneyuganda',
//     customer: {
//       email: email,
//       phonenumber: phone,
//       name: name,
//     },
//     customizations: {
//       title: 'Donate Now',
//       description: 'Support our cause with a donation!',
//       logo: 'https://example.com/logo.png',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Donate',
//     callback: (response) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600">
//         Join Us: Donate K1 a Day or K30 a Month
//       </h2>
//       <p className="text-lg text-gray-700 mb-6 text-center">
//         Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
//       </p>

//       <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
//         <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
//           <button
//             type="button"
//             onClick={() => handleAmountClick(1)}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
//           >
//             K1 / Day
//           </button>
//           <button
//             type="button"
//             onClick={() => handleAmountClick(30)}
//             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
//           >
//             K30 / Month
//           </button>
//         </div>
//         <input
//           type="number"
//           placeholder="Enter own amount"
//           value={customAmount}
//           onChange={handleCustomAmountChange}
//           className="p-2 rounded bg-white text-black border border-gray-300 w-48 sm:w-56 focus:outline-none focus:border-pink-500"
//         />
//       </div>

//       <form className="w-full max-w-sm mb-6">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
//           required
//         />
//       </form>

//       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
//       <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('Card')}
//           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
//           Card
//         </button>
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('PayPal')}
//           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <FaPaypal className="text-2xl text-purple-500 mr-2" />
//           PayPal
//         </button>
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('Airtel Money')}
//           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <SiAirtel className="text-2xl text-red-700 mr-2" />
//           Airtel Money
//         </button>
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('MTN')}
//           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'MTN' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           {/* <SiMtn className="text-2xl text-yellow-
//           500 mr-2" /> */}
//           MTN
//         </button>
//       </div>

//       <FlutterWaveButton {...fwConfig} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110" />
//     </div>
//   );
// };

// export default DonatePage;

