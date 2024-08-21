import React from 'react';
import { Link } from 'react-router-dom';


const BigDonateButton = () => {
  return (

    <div className="flex justify-center py-8">
      
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-10 rounded-full text-2xl shadow-lg transform transition-transform hover:scale-105">
    <Link to='/donate'>
        Donate Now
        </Link>
      </button>
      
    </div>
  );
};

export default BigDonateButton;
