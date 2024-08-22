import React from 'react';
import { Link } from 'react-router-dom';

const GetInvolvedComp = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10">Get Involved</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Volunteer Now</h3>
          <p className="text-gray-600 mb-6">Join us in making a difference by volunteering your time and skills.</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
            Volunteer Now
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Become an Ambassador</h3>
          <p className="text-gray-600 mb-6">Spread the word and advocate for our cause in your community.</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
            Become an Ambassador
          </button>
        </div>

        
        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Partner with Us</h3>
          <p className="text-gray-600 mb-6">Collaborate with us to amplify our impact through strategic partnerships.</p>
          <Link to='/donate'>  
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
            Partner with Us
          </button>
          </Link>
        </div>
        

        <Link to='/donate'>
        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Donate Now</h3>
          <p className="text-gray-600 mb-6">Your contributions help us continue our mission and support those in need.</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
            Donate Now
          </button>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default GetInvolvedComp;
