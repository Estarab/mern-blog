import React from 'react';

const ProgramCard = ({ title, image, details }) => {
  return (
    <div className="program-card bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
      <img 
        src={image} 
        alt={title} 
        className="rounded-lg w-full h-48 object-cover mb-6"
      />
      <h2 className="text-2xl font-bold mb-4 text-purple-600">{title}</h2>
      <p className="text-gray-700">{details}</p>
    </div>
  );
};

export default ProgramCard;
