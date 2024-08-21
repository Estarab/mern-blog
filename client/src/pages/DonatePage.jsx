// import React, { useState } from 'react';
// import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// import { SiAirtel } from 'react-icons/si';

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

//   const handleDonate = () => {
//     const finalAmount = customAmount;
//     if (finalAmount && paymentMethod && name && email && phone) {
//       // Proceed to payment gateway
//       console.log("Redirecting to payment gateway with amount:", finalAmount, "using", paymentMethod);
//     } else {
//       alert("Please fill out all required fields and select a payment method.");
//     }
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   return (
//     <div className="donate-page p-8 flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-4 text-pink-500">Make a Donation</h2>
      
//       <div className="amount-options mb-6 flex items-center">
//         <button
//           type="button"
//           onClick={() => handleAmountClick(10)}
//           className="bg-pink-500 text-white p-2 mx-2 rounded hover:bg-pink-700 transition ease-in-out duration-500"
//         >
//           $10
//         </button>
//         <button
//           type="button"
//           onClick={() => handleAmountClick(20)}
//           className="bg-pink-500 text-white p-2 mx-2 rounded hover:bg-pink-700 transition ease-in-out duration-500"
//         >
//           $20
//         </button>
//         <button
//           type="button"
//           onClick={() => handleAmountClick(50)}
//           className="bg-pink-500 text-white p-2 mx-2 rounded hover:bg-pink-700 transition ease-in-out duration-500"
//         >
//           $50
//         </button>
//         <input
//           type="number"
//           placeholder="Enter your own amount"
//           value={customAmount}
//           onChange={handleCustomAmountChange}
//           className="p-2 mx-2 rounded bg-white text-black w-40"
//         />
//       </div>

//       <form className="w-full max-w-sm mb-6">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black"
//           required
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//           className="p-2 m-2 w-full rounded bg-white text-black"
//           required
//         />
//       </form>

//       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
//       <div className="payment-options flex justify-center mb-6">
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('Card')}
//           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
//           Card
//         </button>
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('PayPal')}
//           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <FaPaypal className="text-2xl text-purple-500 mr-2" />
//           PayPal
//         </button>
//         <button
//           type="button"
//           onClick={() => handlePaymentMethodChange('Airtel Money')}
//           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
//             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
//           }`}
//         >
//           <SiAirtel className="text-2xl text-purple-500 mr-2" />
//           Airtel Money
//         </button>
//       </div>

//       <button
//         onClick={handleDonate}
//         className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 transition ease-in-out duration-500"
//       >
//         Donate
//       </button>
//     </div>
//   );
// };

// export default DonatePage;

// // import React, { useState } from 'react';
// // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // import { SiAirtel } from 'react-icons/si';

// // const DonatePage = () => {
// //   const [customAmount, setCustomAmount] = useState('');
// //   const [paymentMethod, setPaymentMethod] = useState('');
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [phone, setPhone] = useState('');

// //   const handleAmountClick = (value) => {
// //     setCustomAmount(value.toString());
// //   };

// //   const handleCustomAmountChange = (e) => {
// //     setCustomAmount(e.target.value);
// //   };

// //   const handleDonate = () => {
// //     const finalAmount = customAmount;
// //     if (finalAmount && paymentMethod && name && email && phone) {
// //       // Proceed to payment gateway
// //       console.log("Redirecting to payment gateway with amount:", finalAmount, "using", paymentMethod);
// //     } else {
// //       alert("Please fill out all required fields and select a payment method.");
// //     }
// //   };

// //   const handlePaymentMethodChange = (method) => {
// //     setPaymentMethod(method);
// //   };

// //   return (
// //     <div className="donate-page p-8 flex flex-col items-center">
// //       <h2 className="text-2xl font-bold mb-4 text-pink-500">Make a Donation</h2>
      
// //       <div className="amount-options mb-6 flex items-center">
// //         <button
// //           type="button"
// //           onClick={() => handleAmountClick(50)}
// //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// //         >
// //           K50
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handleAmountClick(100)}
// //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// //         >
// //           K100
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handleAmountClick(200)}
// //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// //         >
// //           K200
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handleAmountClick(300)}
// //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// //         >
// //           K300
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handleAmountClick(500)}
// //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// //         >
// //           K500
// //         </button>
// //         <input
// //           type="number"
// //           placeholder="Enter own amount"
// //           value={customAmount}
// //           onChange={handleCustomAmountChange}
// //           className="p-2 mx-2 rounded bg-white text-black w-40"
// //         />
// //       </div>

// //       <form className="w-full max-w-sm mb-6">
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black"
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black"
// //           required
// //         />
// //         <input
// //           type="tel"
// //           placeholder="Phone Number"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black"
// //           required
// //         />
// //       </form>

// //       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// //       <div className="payment-options flex justify-center mb-6">
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('Card')}
// //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// //           Card
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('PayPal')}
// //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <FaPaypal className="text-2xl text-purple-500 mr-2" />
// //           PayPal
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('Airtel Money')}
// //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <SiAirtel className="text-2xl text-red-700 mr-2" />
// //           Airtel Money
// //         </button>
// //       </div>

// //       <button
// //         onClick={handleDonate}
// //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 m-2 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// //       >
// //         Donate
// //       </button>
// //     </div>
// //   );
// // };

// // export default DonatePage;
