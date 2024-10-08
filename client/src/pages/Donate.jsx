import React, { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
import { SiAirtel } from 'react-icons/si';

// Import images from the assets folder
import airtelImage1 from '../assets/send money steps/airtel1.jpg';
import airtelImage2 from '../assets/send money steps/airtel2.jpg';
import airtelImage3 from '../assets/send money steps/airtel3.jpg';
import airtelImage4 from '../assets/send money steps/airtel4.jpg';
import airtelImage5 from '../assets/send money steps/airtel5.jpg';
import airtelImage6 from '../assets/send money steps/airtel6.jpg';
import airtelImage7 from '../assets/send money steps/airtel7.jpg';

import mtnImage1 from '../assets/send money steps/mtn1.jpg';
import mtnImage2 from '../assets/send money steps/mtn2.jpg';
import mtnImage3 from '../assets/send money steps/mtn3.jpg';
import mtnImage4 from '../assets/send money steps/mtn4.jpg';
import mtnImage5 from '../assets/send money steps/mtn5.jpg';
import mtnImage6 from '../assets/send money steps/mtn6.jpg';

const steps = {
  'Airtel Money': [
    'Dial *115# and Select option 1.Send Money.',
    'Select option 4.Banks',
    'Select option 1.Transfer to Bank.',
    'Select option 7.EcoBank',
    'Enter this account number : 5600000143700',
    'Enter any amount you want to donate.',
    'Confirm the transaction details and Enter your Pin .'
  ],
  'MTN': [
    'Dial *115# and Select option 1.Send Money',
    'Select option 6.Banks',
    'Select option 1.Send to Bank.',
    'Select option 5.EcoBank',
    'Enter this account number : 5600000143700',
    'Enter any reference (2 Digits and above).',
    'Enter any amount you want to donate.',
    'Confirm the transaction details and Enter your Pin .'
  ],
};

const DonatePage = () => {
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAmountClick = (value) => {
    setCustomAmount(value.toString());
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
    setCurrentImageIndex(0); // Reset image index when changing payment method
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customAmount || !name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }
    setShowPaymentOptions(true);
  };

  // Map payment methods to images
  const images = {
    'Airtel Money': [airtelImage1, airtelImage2, airtelImage3, airtelImage4, airtelImage5, airtelImage6, airtelImage7],
    'MTN': [mtnImage1, mtnImage2, mtnImage3, mtnImage4, mtnImage5, mtnImage6],
  };

  const handleNextImage = () => {
    if (currentImageIndex < images[paymentMethod].length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600 text-center">
        Join Us: Donate K1 a Day or K30 a Month
      </h2>
      <p className="text-lg text-gray-700 mb-6 text-center">
        Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
      </p>

      {/* Donation Form */}
      <form className="w-full max-w-md mb-6" onSubmit={handleSubmit}>
        <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
          <button type="button" onClick={() => handleAmountClick(1)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500">K1 / Day</button>
          <button type="button" onClick={() => handleAmountClick(30)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500">K30 / Month</button>
          <input type="number" placeholder="Enter own amount" value={customAmount} onChange={handleCustomAmountChange} className="p-2 rounded bg-white text-black border border-gray-300 w-full sm:w-48 focus:outline-none focus:border-pink-500" required />
        </div>

        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
        <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
        <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110 w-full">Donate</button>
      </form>

      {/* Show Payment Options After Submission */}
      {showPaymentOptions && (
        <>
          <h3 className="text-xl font-bold mb-4">Choose Payment Method</h3>
          <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
            {['Airtel Money', 'MTN'].map((method) => (
              <button
                key={method}
                onClick={() => handlePaymentMethodChange(method)}
                className={`flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500 ${
                  paymentMethod === method
                    ? 'bg-purple-100 border-pink-500'
                    : 'border-gray-300 hover:bg-purple-50'
                }`}
              >
                {method === 'Airtel Money' ? (
                  <SiAirtel className="text-2xl text-red-700 mr-2" />
                ) : (
                  <FaCreditCard className="text-2xl text-purple-500 mr-2" />
                )}
                {method}
              </button>
            ))}
          </div>

          {/* Instructions and Image for Selected Payment Method */}
          {paymentMethod && (
            <div className="instructions-container">
              <h4 className="text-lg font-semibold mb-4">Steps on how you can Send Money Using {paymentMethod}</h4>
              <ol className="list-decimal pl-6 mb-4">
                {steps[paymentMethod].map((step, index) => (
                  <li key={index} className="mb-2">{step}</li>
                ))}
              </ol>
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={handlePrevImage}
                  className={`bg-gray-200 p-2 rounded font-bold ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentImageIndex === 0}
                >
                  &lt;
                </button>

                {/* Scrollable Image Container */}
                <div className="overflow-x-auto w-full max-w-xs md:max-w-md flex justify-center items-center">
                  <img
                    src={images[paymentMethod][currentImageIndex]}
                    alt={`${paymentMethod} Step ${currentImageIndex + 1}`}
                    className="h-64 object-contain" // Ensure images fit well
                  />
                </div>

                <button
                  onClick={handleNextImage}
                  className={`bg-gray-200 p-2 rounded font-bold ${currentImageIndex === images[paymentMethod].length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={currentImageIndex === images[paymentMethod].length - 1}
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DonatePage;



// import React, { useState } from 'react';
// import { FaCreditCard } from 'react-icons/fa';
// import { SiAirtel } from 'react-icons/si';

// // Import images from the assets folder
// import airtelImage1 from '../assets/about image/misdsdion.jpeg';
// import airtelImage2 from '../assets/about image/misdsdion.jpeg';
// import airtelImage3 from '../assets/about image/misdsdion.jpeg';
// import airtelImage4 from '../assets/about image/misdsdion.jpeg';
// import airtelImage5 from '../assets/about image/misdsdion.jpeg';
// import airtelImage6 from '../assets/about image/misdsdion.jpeg';

// import mtnImage1 from '../assets/about image/misdsdion.jpeg';
// import mtnImage2 from '../assets/about image/misdsdion.jpeg';
// import mtnImage3 from '../assets/about image/misdsdion.jpeg';
// import mtnImage4 from '../assets/about image/misdsdion.jpeg';
// import mtnImage5 from '../assets/about image/misdsdion.jpeg';
// import mtnImage6 from '../assets/about image/misdsdion.jpeg';

// import zamtelImage1 from '../assets/about image/misdsdion.jpeg';
// import zamtelImage2 from '../assets/about image/misdsdion.jpeg';
// import zamtelImage3 from '../assets/about image/misdsdion.jpeg';
// import zamtelImage4 from '../assets/about image/misdsdion.jpeg';
// import zamtelImage5 from '../assets/about image/misdsdion.jpeg';
// import zamtelImage6 from '../assets/about image/misdsdion.jpeg';

// import cardImage1 from '../assets/about image/misdsdion.jpeg';
// import cardImage2 from '../assets/about image/misdsdion.jpeg';
// import cardImage3 from '../assets/about image/misdsdion.jpeg';
// import cardImage4 from '../assets/about image/misdsdion.jpeg';
// import cardImage5 from '../assets/about image/misdsdion.jpeg';
// import cardImage6 from '../assets/about image/misdsdion.jpeg';

// const DonatePage = () => {
//   const [customAmount, setCustomAmount] = useState('');
//   const [paymentMethod, setPaymentMethod] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);

//   const handleAmountClick = (value) => {
//     setCustomAmount(value.toString());
//   };

//   const handleCustomAmountChange = (e) => {
//     setCustomAmount(e.target.value);
//   };

//   const handlePaymentMethodChange = (method) => {
//     setPaymentMethod(method);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!customAmount || !name || !email || !phone) {
//       alert('Please fill in all required fields.');
//       return;
//     }
//     setShowPaymentOptions(true);
//   };

//   // Map payment methods to images
//   const images = {
//     'Airtel Money': [airtelImage1, airtelImage2, airtelImage3, airtelImage4, airtelImage5, airtelImage6],
//     'MTN': [mtnImage1, mtnImage2, mtnImage3, mtnImage4, mtnImage5, mtnImage6],
//     'Zamtel': [zamtelImage1, zamtelImage2, zamtelImage3, zamtelImage4, zamtelImage5, zamtelImage6],
//     'Card': [cardImage1, cardImage2, cardImage3, cardImage4, cardImage5, cardImage6],
//   };

//   return (
//     <div className="donate-page p-4 md:p-8 flex flex-col items-center max-w-full overflow-x-hidden bg-white shadow-lg rounded-lg">
//       <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-pink-600 text-center">
//         Join Us: Donate K1 a Day or K30 a Month
//       </h2>
//       <p className="text-lg text-gray-700 mb-6 text-center">
//         Your small contribution can make a huge difference. Partner with us and help change lives with just K1 a day or K30 a month!
//       </p>

//       {/* Donation Form */}
//       <form className="w-full max-w-md mb-6" onSubmit={handleSubmit}>
//         <div className="amount-options mb-6 flex flex-col sm:flex-row items-center">
//           <button type="button" onClick={() => handleAmountClick(1)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500">K1 / Day</button>
//           <button type="button" onClick={() => handleAmountClick(30)} className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-2 rounded hover:shadow-lg transition ease-in-out duration-500">K30 / Month</button>
//           <input type="number" placeholder="Enter own amount" value={customAmount} onChange={handleCustomAmountChange} className="p-2 rounded bg-white text-black border border-gray-300 w-full sm:w-48 focus:outline-none focus:border-pink-500" required />
//         </div>

//         <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
//         <input type="tel" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="p-2 m-2 w-full rounded bg-white text-black border border-gray-300 focus:outline-none focus:border-pink-500" required />
//         <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110 w-full">Donate</button>
//       </form>

//       {/* Show Payment Options After Submission */}
//       {showPaymentOptions && (
//         <>
//           <h3 className="text-xl font-bold mb-4">Choose Payment Method</h3>
//           <div className="payment-options flex flex-col sm:flex-row justify-center items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
//             <button onClick={() => handlePaymentMethodChange('Airtel Money')} className="flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500"> <SiAirtel className="text-2xl text-red-700 mr-2" /> Airtel Money</button>
//             <button onClick={() => handlePaymentMethodChange('MTN')} className="flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500"> MTN</button>
//             <button onClick={() => handlePaymentMethodChange('Zamtel')} className="flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500"> Zamtel</button>
//             <button onClick={() => handlePaymentMethodChange('Card')} className="flex items-center p-4 border-2 rounded-lg transition ease-in-out duration-500"> <FaCreditCard className="text-2xl text-purple-500 mr-2" /> Card</button>
//           </div>
//         </>
//       )}

//       {/* Images for Selected Payment Method */}
//       {paymentMethod && (
//         <div className="mb-6">
//           <h3 className="text-xl font-bold mb-4">How to Pay with {paymentMethod}</h3>
//           <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
//             {images[paymentMethod].map((image, index) => (
//               <img key={index} src={image} alt={`${paymentMethod} Step ${index + 1}`} className="rounded-lg shadow-lg w-60 h-auto flex-shrink-0" />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DonatePage;


