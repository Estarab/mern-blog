import React from 'react';
import image1 from '../assets/programs/front-view-kid-bicycle-outdoors.jpg';
import image2 from '../assets/programs/support.jpg';
import image3 from '../assets/programs/Untitled.jpg';

const RememberMeProject = () => {
  return (
    <div className="bg-gray-100 p-5 md:p-10">
      <div className="max-w-7xl mx-auto">
        {/* Program Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Remember Me Project
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
          Aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens.
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <img src={image1} alt="Support" className="w-full h-auto rounded shadow-md" />
          <img src={image2} alt="Training" className="w-full h-auto rounded shadow-md" />
          <img src={image3} alt="Healthcare" className="w-full h-auto rounded shadow-md" />
        </div>

        {/* Vision and Objectives */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p className="text-gray-600 mb-4">
            To create a society where every individual has access to basic needs and opportunities to thrive.
          </p>
          <h3 className="text-2xl font-semibold mb-3">Objectives</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Provide emergency shelter and support services.</li>
            <li>Offer healthcare and mental health services.</li>
            <li>Deliver vocational training for skill development.</li>
            <li>Facilitate social integration and community involvement.</li>
          </ul>
        </div>

        {/* Donation Button */}
        <div className="text-center">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded transition-transform transform hover:scale-105 animate-pulse">
            Donate K1 a Day
          </button>
        </div>
      </div>
    </div>
  );
};

export default RememberMeProject;
