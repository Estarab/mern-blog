import React, { useState } from 'react';
import axios from 'axios';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.status === 200) {
        setMessage('Subscription successful! Check your email for confirmation.');
        setEmail('');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border p-2 mb-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Subscribe
        </button>
        {message && <p className="mt-2">{message}</p>}
      </form>
    </div>
  );
};

export default SubscriptionForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const SubscriptionForm = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/subscribe', { email });
//       setMessage('Subscription successful! Check your email for confirmation.');
//       setEmail('');
//     } catch (error) {
//       setMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="p-4">
//       <form onSubmit={handleSubmit} className="flex flex-col items-center">
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter your email"
//           className="border p-2 mb-2 rounded"
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Subscribe
//         </button>
//         {message && <p className="mt-2">{message}</p>}
//       </form>
//     </div>
//   );
// };

// export default SubscriptionForm;
