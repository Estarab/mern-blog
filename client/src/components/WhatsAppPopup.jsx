// src/components/WhatsAppPopup.jsx
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const whatsappNumber = '+260978718328'; // Replace with your WhatsApp number

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
      const interval = setInterval(() => {
        setShowPopup(true);
      }, 120000); // 2 minutes in milliseconds

      return () => clearInterval(interval);
    }, 15000); // 5 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  if (!showPopup) return null;

  return (
    <div className="fixed bottom-10 right-5 z-50 w-64 bg-[#0A3D2D] text-white rounded-lg shadow-lg p-4 transition-transform transform animate-slide-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaWhatsapp size={24} color="#25D366" className="mr-2" />
          <span>Let's chat on WhatsApp!</span>
        </div>
        <button onClick={handleClose} className="text-white font-bold">
          &times;
        </button>
      </div>
      <button
        onClick={handleClick}
        className="mt-2 w-full bg-[#25D366] text-white rounded py-1 transition hover:bg-green-600"
      >
        Message Us
      </button>
    </div>
  );
};

export default WhatsAppPopup;
