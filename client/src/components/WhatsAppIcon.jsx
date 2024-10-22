// src/components/WhatsAppIcon.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const whatsappNumber = '+260955522564'; // Replace with your WhatsApp number
  const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-12 right-5 cursor-pointer z-50 flex flex-col items-center justify-center"
    >
      <div className="bg-[#0A3D2D] shadow-lg rounded-full p-1 transition-transform duration-200 hover:scale-110 animate-pulse">
        <FaWhatsapp size={18} color="#25D366" />
      </div>
      {/* <span className="mt-2 text-xs text-white text-center bg-[#0A3D2D] rounded px-2 py-1 shadow-md">
        chat
      </span> */}
    </div>
  );
};

export default WhatsAppIcon;
