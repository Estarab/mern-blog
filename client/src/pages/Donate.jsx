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
//     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden">
//       <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-500">Make a Donation</h2>

//       <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
//         <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
//           <button
//             type="button"
//             onClick={() => handleAmountClick(100)}
//             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
//           >
//             K100
//           </button>
//           <button
//             type="button"
//             onClick={() => handleAmountClick(200)}
//             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
//           >
//             K200
//           </button>
//           <button
//             type="button"
//             onClick={() => handleAmountClick(300)}
//             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
//           >
//             K300
//           </button>
//           <button
//             type="button"
//             onClick={() => handleAmountClick(500)}
//             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
//           >
//             K500
//           </button>
//         </div>
//         <input
//           type="number"
//           placeholder="Enter own amount"
//           value={customAmount}
//           onChange={handleCustomAmountChange}
//           className="p-2 rounded bg-white text-black w-48 sm:w-56"
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
//       </div>

//       <button
//         onClick={handleDonate}
//         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
//       >
//         Donate
//       </button>
//     </div>
//   );
// };

// export default DonatePage;

// // // // import React, { useState } from 'react';
// // // // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // // // import { SiAirtel } from 'react-icons/si';



// // // // const DonatePage = () => {
// // // //   const [customAmount, setCustomAmount] = useState('');
// // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // //   const [name, setName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [phone, setPhone] = useState('');

// // // //   const handleAmountClick = (value) => {
// // // //     setCustomAmount(value.toString());
// // // //   };

// // // //   const handleCustomAmountChange = (e) => {
// // // //     setCustomAmount(e.target.value);
// // // //   };

// // // //   const handleDonate = () => {
// // // //     const finalAmount = customAmount;
// // // //     if (finalAmount && paymentMethod && name && email && phone) {
// // // //       // Proceed to payment gateway
// // // //       console.log("Redirecting to payment gateway with amount:", finalAmount, "using", paymentMethod);
// // // //     } else {
// // // //       alert("Please fill out all required fields and select a payment method.");
// // // //     }
// // // //   };

// // // //   const handlePaymentMethodChange = (method) => {
// // // //     setPaymentMethod(method);
// // // //   };

// // // //   return (
// // // //         <div className="donate-page p-8 flex flex-col items-center">
// // // //           <h2 className="text-2xl font-bold mb-4 text-pink-500">Make a Donation</h2>
          
// // // //           <div className="amount-options mb-6 flex items-center">
// // // //             {/* <button
// // // //               type="button"
// // // //               onClick={() => handleAmountClick(50)}
// // // //               className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //             >
// // // //               K50
// // // //             </button> */}
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handleAmountClick(100)}
// // // //               className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //             >
// // // //               K100
// // // //             </button>
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handleAmountClick(200)}
// // // //               className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //             >
// // // //               K200
// // // //             </button>
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handleAmountClick(300)}
// // // //               className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //             >
// // // //               K300
// // // //             </button>
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handleAmountClick(500)}
// // // //               className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //             >
// // // //               K500
// // // //             </button>
// // // //             <input
// // // //               type="number"
// // // //               placeholder="Enter own amount"
// // // //               value={customAmount}
// // // //               onChange={handleCustomAmountChange}
// // // //               className="p-2 mx-2 rounded bg-white text-black w-40"
// // // //             />
// // // //           </div>
    
// // // //           <form className="w-full max-w-sm mb-6">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Name"
// // // //               value={name}
// // // //               onChange={(e) => setName(e.target.value)}
// // // //               className="p-2 m-2 w-full rounded bg-white text-black"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="email"
// // // //               placeholder="Email"
// // // //               value={email}
// // // //               onChange={(e) => setEmail(e.target.value)}
// // // //               className="p-2 m-2 w-full rounded bg-white text-black"
// // // //               required
// // // //             />
// // // //             <input
// // // //               type="tel"
// // // //               placeholder="Phone Number"
// // // //               value={phone}
// // // //               onChange={(e) => setPhone(e.target.value)}
// // // //               className="p-2 m-2 w-full rounded bg-white text-black"
// // // //               required
// // // //             />
// // // //           </form>
    
// // // //           <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// // // //           <div className="payment-options flex justify-center mb-6">
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handlePaymentMethodChange('Card')}
// // // //               className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //                 paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// // // //               }`}
// // // //             >
// // // //               <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// // // //               Card
// // // //             </button>
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handlePaymentMethodChange('PayPal')}
// // // //               className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //                 paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// // // //               }`}
// // // //             >
// // // //               <FaPaypal className="text-2xl text-purple-500 mr-2" />
// // // //               PayPal
// // // //             </button>
// // // //             <button
// // // //               type="button"
// // // //               onClick={() => handlePaymentMethodChange('Airtel Money')}
// // // //               className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //                 paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// // // //               }`}
// // // //             >
// // // //               <SiAirtel className="text-2xl text-red-700 mr-2" />
// // // //               Airtel Money
// // // //             </button>
// // // //           </div>
    
// // // //           <button
// // // //             onClick={handleDonate}
// // // //             className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 m-2 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// // // //           >
// // // //             Donate
// // // //           </button>
// // // //         </div>
// // // //       );
// // // //     };
    
// // // //     export default DonatePage;
    

// // // // // import React, { useState } from 'react';
// // // // // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // // // // import { SiAirtel } from 'react-icons/si';

// // // // // const DonatePage = () => {
// // // // //   const [customAmount, setCustomAmount] = useState('');
// // // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // // //   const [name, setName] = useState('');
// // // // //   const [email, setEmail] = useState('');
// // // // //   const [phone, setPhone] = useState('');

// // // // //   const handleAmountClick = (value) => {
// // // // //     setCustomAmount(value.toString());
// // // // //   };

// // // // //   const handleCustomAmountChange = (e) => {
// // // // //     setCustomAmount(e.target.value);
// // // // //   };

// // // // //   const handleDonate = () => {
// // // // //     const finalAmount = customAmount;
// // // // //     if (finalAmount && paymentMethod && name && email && phone) {
// // // // //       // Proceed to payment gateway
// // // // //       console.log("Redirecting to payment gateway with amount:", finalAmount, "using", paymentMethod);
// // // // //     } else {
// // // // //       alert("Please fill out all required fields and select a payment method.");
// // // // //     }
// // // // //   };

// // // // //   const handlePaymentMethodChange = (method) => {
// // // // //     setPaymentMethod(method);
// // // // //   };

// // // // //   return (
// // // // //     <div className="donate-page p-8 flex flex-col items-center">
// // // // //       <h2 className="text-2xl font-bold mb-4 text-pink-500">Make a Donation</h2>
      
// // // // //       <div className="amount-options mb-6 flex items-center">
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handleAmountClick(50)}
// // // // //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // // //         >
// // // // //           K50
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handleAmountClick(100)}
// // // // //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // // //         >
// // // // //           K100
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handleAmountClick(200)}
// // // // //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // // //         >
// // // // //           K200
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handleAmountClick(300)}
// // // // //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // // //         >
// // // // //           K300
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handleAmountClick(500)}
// // // // //           className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // // //         >
// // // // //           K500
// // // // //         </button>
// // // // //         <input
// // // // //           type="number"
// // // // //           placeholder="Enter own amount"
// // // // //           value={customAmount}
// // // // //           onChange={handleCustomAmountChange}
// // // // //           className="p-2 mx-2 rounded bg-white text-black w-40"
// // // // //         />
// // // // //       </div>

// // // // //       <form className="w-full max-w-sm mb-6">
// // // // //         <input
// // // // //           type="text"
// // // // //           placeholder="Name"
// // // // //           value={name}
// // // // //           onChange={(e) => setName(e.target.value)}
// // // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="email"
// // // // //           placeholder="Email"
// // // // //           value={email}
// // // // //           onChange={(e) => setEmail(e.target.value)}
// // // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // // //           required
// // // // //         />
// // // // //         <input
// // // // //           type="tel"
// // // // //           placeholder="Phone Number"
// // // // //           value={phone}
// // // // //           onChange={(e) => setPhone(e.target.value)}
// // // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // // //           required
// // // // //         />
// // // // //       </form>

// // // // //       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// // // // //       <div className="payment-options flex justify-center mb-6">
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handlePaymentMethodChange('Card')}
// // // // //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // // //             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// // // // //           }`}
// // // // //         >
// // // // //           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// // // // //           Card
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handlePaymentMethodChange('PayPal')}
// // // // //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // // //             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// // // // //           }`}
// // // // //         >
// // // // //           <FaPaypal className="text-2xl text-purple-500 mr-2" />
// // // // //           PayPal
// // // // //         </button>
// // // // //         <button
// // // // //           type="button"
// // // // //           onClick={() => handlePaymentMethodChange('Airtel Money')}
// // // // //           className={`flex items-center p-4 m-2 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // // //             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// // // // //           }`}
// // // // //         >
// // // // //           <SiAirtel className="text-2xl text-red-700 mr-2" />
// // // // //           Airtel Money
// // // // //         </button>
// // // // //       </div>

// // // // //       <button
// // // // //         onClick={handleDonate}
// // // // //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 m-2 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// // // // //       >
// // // // //         Donate
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default DonatePage;

// // // // import React, { useState } from 'react';
// // // // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // // // import { SiAirtel } from 'react-icons/si';

// // // // const DonatePage = () => {
// // // //   const [customAmount, setCustomAmount] = useState('');
// // // //   const [paymentMethod, setPaymentMethod] = useState('');
// // // //   const [name, setName] = useState('');
// // // //   const [email, setEmail] = useState('');
// // // //   const [phone, setPhone] = useState('');

// // // //   const handleAmountClick = (value) => {
// // // //     setCustomAmount(value.toString());
// // // //   };

// // // //   const handleCustomAmountChange = (e) => {
// // // //     setCustomAmount(e.target.value);
// // // //   };

// // // //   const handleDonate = () => {
// // // //     const finalAmount = customAmount;
// // // //     if (finalAmount && paymentMethod && name && email && phone) {
// // // //       // Proceed to payment gateway
// // // //       console.log("Redirecting to payment gateway with amount:", finalAmount, "using", paymentMethod);
// // // //     } else {
// // // //       alert("Please fill out all required fields and select a payment method.");
// // // //     }
// // // //   };

// // // //   const handlePaymentMethodChange = (method) => {
// // // //     setPaymentMethod(method);
// // // //   };

// // // //   return (
// // // //     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden">
// // // //       <h2 className="text-2xl md:text-3xl font-bold mb-4 text-pink-500">Make a Donation</h2>

// // // //       <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
// // // //         <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => handleAmountClick(100)}
// // // //             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //           >
// // // //             K100
// // // //           </button>
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => handleAmountClick(200)}
// // // //             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //           >
// // // //             K200
// // // //           </button>
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => handleAmountClick(300)}
// // // //             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //           >
// // // //             K300
// // // //           </button>
// // // //           <button
// // // //             type="button"
// // // //             onClick={() => handleAmountClick(500)}
// // // //             className="bg-purple-800 text-white p-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
// // // //           >
// // // //             K500
// // // //           </button>
// // // //         </div>
// // // //         <input
// // // //           type="number"
// // // //           placeholder="Enter own amount"
// // // //           value={customAmount}
// // // //           onChange={handleCustomAmountChange}
// // // //           className="p-2 rounded bg-white text-black w-48 sm:w-56"
// // // //         />
// // // //       </div>

// // // //       <form className="w-full max-w-sm mb-6">
// // // //         <input
// // // //           type="text"
// // // //           placeholder="Name"
// // // //           value={name}
// // // //           onChange={(e) => setName(e.target.value)}
// // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="email"
// // // //           placeholder="Email"
// // // //           value={email}
// // // //           onChange={(e) => setEmail(e.target.value)}
// // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // //           required
// // // //         />
// // // //         <input
// // // //           type="tel"
// // // //           placeholder="Phone Number"
// // // //           value={phone}
// // // //           onChange={(e) => setPhone(e.target.value)}
// // // //           className="p-2 m-2 w-full rounded bg-white text-black"
// // // //           required
// // // //         />
// // // //       </form>

// // // //       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// // // //       <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => handlePaymentMethodChange('Card')}
// // // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// // // //           }`}
// // // //         >
// // // //           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// // // //           Card
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => handlePaymentMethodChange('PayPal')}
// // // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// // // //           }`}
// // // //         >
// // // //           <FaPaypal className="text-2xl text-purple-500 mr-2" />
// // // //           PayPal
// // // //         </button>
// // // //         <button
// // // //           type="button"
// // // //           onClick={() => handlePaymentMethodChange('Airtel Money')}
// // // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // // //             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// // // //           }`}
// // // //         >
// // // //           <SiAirtel className="text-2xl text-red-700 mr-2" />
// // // //           Airtel Money
// // // //         </button>
// // // //       </div>

// // // //       <button
// // // //         onClick={handleDonate}
// // // //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// // // //       >
// // // //         Donate
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default DonatePage;


import React, { useState } from 'react';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import { SiAirtel /*, SiMtn*/ } from 'react-icons/si';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

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

  const config = {
    public_key: 'YOUR_FLUTTERWAVE_PUBLIC_KEY',
    tx_ref: Date.now(),
    amount: customAmount || 30, // default to 30 if no custom amount
    currency: 'ZMW',
    payment_options: 'card,mobilemoneyzambia,mobilemoneyuganda',
    customer: {
      email: email,
      phonenumber: phone,
      name: name,
    },
    customizations: {
      title: 'Donate Now',
      description: 'Support our cause with a donation!',
      logo: 'https://example.com/logo.png',
    },
  };

  const fwConfig = {
    ...config,
    text: 'Donate',
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
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
        />
      </div>

      <form className="w-full max-w-sm mb-6">
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
      </form>

      <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
      <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('Card')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
            paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
          }`}
        >
          <FaCreditCard className="text-2xl text-purple-500 mr-2" />
          Card
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('PayPal')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
            paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
          }`}
        >
          <FaPaypal className="text-2xl text-purple-500 mr-2" />
          PayPal
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('Airtel Money')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
            paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
          }`}
        >
          <SiAirtel className="text-2xl text-red-700 mr-2" />
          Airtel Money
        </button>
        <button
          type="button"
          onClick={() => handlePaymentMethodChange('MTN')}
          className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
            paymentMethod === 'MTN' ? 'border-pink-500' : 'border-gray-300'
          }`}
        >
          {/* <SiMtn className="text-2xl text-yellow-
          500 mr-2" /> */}
          MTN
        </button>
      </div>

      <FlutterWaveButton {...fwConfig} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110" />
    </div>
  );
};

export default DonatePage;

// // // import React, { useState } from 'react';
// // // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // // import { SiAirtel /*, SiMtn*/ } from 'react-icons/si';

// // // const DonatePage = () => {
// // //   const [customAmount, setCustomAmount] = useState('');
// // //   const [paymentMethod, setPaymentMethod] = useState('');
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const [phone, setPhone] = useState('');

// // //   const handleAmountClick = (value) => {
// // //     setCustomAmount(value.toString());
// // //   };

// // //   const handleCustomAmountChange = (e) => {
// // //     setCustomAmount(e.target.value);
// // //   };

// // //   const handlePaymentMethodChange = (method) => {
// // //     setPaymentMethod(method);
// // //   };

// // //   const handleDonateClick = async () => {
// // //     if (!paymentMethod) {
// // //       alert("Please choose a payment method");
// // //       return;
// // //     }

// // //     const payload = {
// // //       amount: customAmount || 30,
// // //       name,
// // //       email,
// // //       phone,
// // //       paymentMethod,
// // //     };

// // //     try {
// // //       const response = await fetch('/api/payment/airtel', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //         },
// // //         body: JSON.stringify(payload),
// // //       });

// // //       const result = await response.json();
// // //       if (result.success) {
// // //         alert('Payment initiated successfully. Please follow the instructions sent to your phone.');
// // //       } else {
// // //         alert('Payment failed. Please try again.');
// // //       }
// // //     } catch (error) {
// // //       console.error('Payment error:', error);
// // //       alert('An error occurred. Please try again later.');
// // //     }
// // //   };

// // //   return (
// // //     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
// // //       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600">
// // //         Join Us: Donate K1 a Day or K30 a Month
// // //       </h2>
// // //       <p className="text-lg text-gray-700 mb-6 text-center">
// // //         Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
// // //       </p>

// // //       <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
// // //         <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
// // //           <button
// // //             type="button"
// // //             onClick={() => handleAmountClick(1)}
// // //             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
// // //           >
// // //             K1 / Day
// // //           </button>
// // //           <button
// // //             type="button"
// // //             onClick={() => handleAmountClick(30)}
// // //             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
// // //           >
// // //             K30 / Month
// // //           </button>
// // //         </div>
// // //         <input
// // //           type="number"
// // //           placeholder="Enter own amount"
// // //           value={customAmount}
// // //           onChange={handleCustomAmountChange}
// // //           className="p-2 rounded bg-white text-black border border-gray-300 w-48 sm:w-56 focus:outline-none focus:border-pink-500"
// // //         />
// // //       </div>

// // //       <form className="w-full max-w-sm mb-6">
// // //         <input
// // //           type="text"
// // //           placeholder="Name"
// // //           value={name}
// // //           onChange={(e) => setName(e.target.value)}
// // //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// // //           required
// // //         />
// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// // //           required
// // //         />
// // //         <input
// // //           type="tel"
// // //           placeholder="Phone Number"
// // //           value={phone}
// // //           onChange={(e) => setPhone(e.target.value)}
// // //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// // //           required
// // //         />
// // //       </form>

// // //       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// // //       <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
// // //         <button
// // //           type="button"
// // //           onClick={() => handlePaymentMethodChange('Card')}
// // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // //             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// // //           }`}
// // //         >
// // //           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// // //           Card
// // //         </button>
// // //         <button
// // //           type="button"
// // //           onClick={() => handlePaymentMethodChange('PayPal')}
// // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // //             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// // //           }`}
// // //         >
// // //           <FaPaypal className="text-2xl text-purple-500 mr-2" />
// // //           PayPal
// // //         </button>
// // //         <button
// // //           type="button"
// // //           onClick={() => handlePaymentMethodChange('Airtel Money')}
// // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // //             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// // //           }`}
// // //         >
// // //           <SiAirtel className="text-2xl text-red-700 mr-2" />
// // //           Airtel Money
// // //         </button>
// // //         <button
// // //           type="button"
// // //           onClick={() => handlePaymentMethodChange('MTN')}
// // //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// // //             paymentMethod === 'MTN' ? 'border-pink-500' : 'border-gray-300'
// // //           }`}
// // //         >
// // //           {/* <SiMtn className="text-2xl text-yellow-500 mr-2" /> */}
// // //           MTN
// // //         </button>
// // //       </div>

// // //       <button
// // //         onClick={handleDonateClick}
// // //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// // //       >
// // //         Donate
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default DonatePage;

// // import React, { useState } from 'react';
// // import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// // import { SiAirtel /*, SiMtn*/ } from 'react-icons/si';

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

// //   const handlePaymentMethodChange = (method) => {
// //     setPaymentMethod(method);
// //   };

// //   const handleDonateClick = async () => {
// //     if (!paymentMethod) {
// //       alert("Please choose a payment method");
// //       return;
// //     }

// //     const payload = {
// //       amount: customAmount || 30,
// //       description: 'Donation',
// //       email,
// //       phone,
// //     };

// //     try {
// //       const response = await fetch('/api/pesapal-payment/initiate', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(payload),
// //       });

// //       const result = await response.json();
// //       if (result.paymentUrl) {
// //         window.location.href = result.paymentUrl; // Redirect to Pesapal payment page
// //       } else {
// //         alert('Payment initiation failed. Please try again.');
// //       }
// //     } catch (error) {
// //       console.error('Payment error:', error);
// //       alert('An error occurred. Please try again later.');
// //     }
// //   };

// //   return (
// //     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
// //       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600">
// //         Join Us: Donate K1 a Day or K30 a Month
// //       </h2>
// //       <p className="text-lg text-gray-700 mb-6 text-center">
// //         Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
// //       </p>

// //       <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
// //         <div className="flex space-x-2 sm:space-x-4 mb-4 sm:mb-0">
// //           <button
// //             type="button"
// //             onClick={() => handleAmountClick(1)}
// //             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
// //           >
// //             K1 / Day
// //           </button>
// //           <button
// //             type="button"
// //             onClick={() => handleAmountClick(30)}
// //             className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500"
// //           >
// //             K30 / Month
// //           </button>
// //         </div>
// //         <input
// //           type="number"
// //           placeholder="Enter own amount"
// //           value={customAmount}
// //           onChange={handleCustomAmountChange}
// //           className="p-2 rounded bg-white text-black border border-gray-300 w-48 sm:w-56 focus:outline-none focus:border-pink-500"
// //         />
// //       </div>

// //       <form className="w-full max-w-sm mb-6">
// //         <input
// //           type="text"
// //           placeholder="Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// //           required
// //         />
// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// //           required
// //         />
// //         <input
// //           type="tel"
// //           placeholder="Phone Number"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //           className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500"
// //           required
// //         />
// //       </form>

// //       <h3 className="text-xl font-bold mb-4 text-purple-500">Choose Payment Method</h3>
// //       <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('Card')}
// //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'Card' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <FaCreditCard className="text-2xl text-purple-500 mr-2" />
// //           Card
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('PayPal')}
// //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'PayPal' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <FaPaypal className="text-2xl text-purple-500 mr-2" />
// //           PayPal
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('Airtel Money')}
// //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'Airtel Money' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           <SiAirtel className="text-2xl text-red-700 mr-2" />
// //           Airtel Money
// //         </button>
// //         <button
// //           type="button"
// //           onClick={() => handlePaymentMethodChange('MTN')}
// //           className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
// //             paymentMethod === 'MTN' ? 'border-pink-500' : 'border-gray-300'
// //           }`}
// //         >
// //           {/* <SiMtn className="text-2xl text-yellow-500 mr-2" /> */}
// //           MTN
// //         </button>
// //       </div>

// //       <button
// //         onClick={handleDonateClick}
// //         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
// //       >
// //         Donate
// //       </button>
// //     </div>
// //   );
// // };

// // export default DonatePage;
// import React, { useState } from 'react';
// import { FaCreditCard, FaPaypal } from 'react-icons/fa';
// import { SiAirtel /*, SiMtn*/ } from 'react-icons/si';
// //import PaymentForm from '../components/PaymentForm';

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

//   // Updated handleDonateClick function with Pesapal integration
//   const handleDonateClick = async () => {
//     if (!paymentMethod) {
//         alert("Please choose a payment method");
//         return;
//     }

//     if (!name || !email || !phone || !customAmount) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const payload = {
//         amount: customAmount || 30,
//         description: 'Donation',
//         email,
//         phone,
//     };

//     try {
//         const response = await fetch('/api/pesapal-payment/initiate', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(payload),
//         });

//         const result = await response.json();
//         if (result.paymentUrl) {
//             window.location.href = result.paymentUrl; // Redirect to Pesapal payment page
//         } else {
//             alert('Payment initiation failed. Please try again.');
//         }
//     } catch (error) {
//         console.error('Payment error:', error);
//         alert('An error occurred. Please try again later.');
//     }
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
//           {/* <SiMtn className="text-2xl text-yellow-500 mr-2" /> */}
//           MTN
//         </button>
//       </div>

//       <button
//         onClick={handleDonateClick}
//         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110"
//       >
//         Donate
//       </button>
//     </div>
//   );
// };

// export default DonatePage;

