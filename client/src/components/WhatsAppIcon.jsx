// src/components/WhatsAppIcon.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const whatsappNumber = '0977219990'; // Replace with your WhatsApp number
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-5 right-5 cursor-pointer z-50 flex flex-col items-center justify-center"
    >
      <div className="bg-white shadow-lg rounded-full p-3 transition-transform duration-200 hover:scale-110 animate-blink">
        <FaWhatsapp size={30} color="#25D366" />
      </div>
      <span className="mt-2 text-xs text-center bg-white rounded px-2 py-1 shadow-md">
        Let's chat on WhatsApp
      </span>
    </div>
  );
};

export default WhatsAppIcon;
