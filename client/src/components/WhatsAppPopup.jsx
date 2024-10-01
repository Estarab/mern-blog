// WhatsAppPopup.jsx
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const WhatsAppPopup = () => {
  const [visible, setVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setVisible(true);
      }
    }, 120000); // Show after 2 minutes

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  const handleClose = () => {
    setVisible(false);
    setHasInteracted(true); // Prevents future pop-ups
  };

  const handleClick = () => {
    setHasInteracted(true); // Prevents future pop-ups
  };

  return (
    <>
      {visible && (
        <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-50 bg-green-600 text-white p-4 rounded-lg shadow-lg transition-all cursor-pointer" onClick={handleClick}>
          <div className="flex items-center">
            <FaWhatsapp className="text-2xl mr-2 text-[#25D366]" /> {/* WhatsApp green color */}
            <span>WhatsApp Us!</span>
          </div>
          <Link
            to="https://wa.me/+260978718328" // Replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            Start the Chat
          </Link>
          <button
            onClick={handleClose}
            className="ml-2 text-white hover:text-gray-200"
          >
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;


// // src/components/WhatsAppPopup.jsx
// import React, { useEffect, useState } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';

// const WhatsAppPopup = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const whatsappNumber = '+260978718328'; // Replace with your WhatsApp number

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//       const interval = setInterval(() => {
//         setShowPopup(true);
//       }, 480000); // 8 minutes in milliseconds

//       return () => clearInterval(interval);
//     }, 120000); // 2 mins in milliseconds

//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   const handleClick = () => {
//     window.open(`https://wa.me/${whatsappNumber}`, '_blank');
//   };

//   if (!showPopup) return null;

//   return (
//     // <div className="fixed bottom-10 right-5 z-50 w-64 bg-[#0A3D2D] text-white rounded-lg shadow-lg p-4 transition-transform transform animate-slide-in">
//     <div className="fixed top-1/2 right-5 transform -translate-y-1/2 z-50 w-64 bg-[#0A3D2D] text-white rounded-lg shadow-lg p-4 transition-transform transform animate-slide-in">
//       <div className="flex items-center justify-between">
//         <div className="flex items-center">
//           <FaWhatsapp size={24} color="#25D366" className="mr-2" />
//           <span>Let's chat on WhatsApp!</span>
//         </div>
//         <button onClick={handleClose} className="text-white font-bold">
//           &times;
//         </button>
//       </div>
//       <button
//         onClick={handleClick}
//         className="mt-2 w-full bg-[#25D366] text-white rounded py-1 transition hover:bg-green-600"
//       >
//         Message Us
//       </button>
//     </div>
//   );
// };

// export default WhatsAppPopup;
