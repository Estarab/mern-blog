import React from 'react';
import { FaHandshake, FaUsers, FaLightbulb, FaPaperPlane } from 'react-icons/fa';

const Circle4Change = () => {
  const handleJoinGroup = () => {
    window.open('https://chat.whatsapp.com/IoS8ltss9agBfs2GNjr7WQ', '_blank'); // Replace with your actual WhatsApp group link
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 md:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          Welcome to Summit Circle for Change
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
          A vibrant community of entrepreneurs, leaders, creatives, and changemakers born out of the Zambia Business & Leadership Summit 2025.
        </p>
        <button
          onClick={handleJoinGroup}
          className="bg-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:bg-green-600 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          Join Our WhatsApp Group
        </button>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 text-center bg-white text-gray-800">
        <h2 className="text-3xl font-semibold mb-6">Our Manifesto | 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Mission Cards */}
          <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FaLightbulb className="text-4xl mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm">To uplift each other’s businesses, unlock opportunities for women and youth, and drive forward the vision of We Are The World through the campaign: Every Face Has a Story.</p>
          </div>
          <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <FaUsers className="text-4xl mb-4 text-indigo-600" />
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm">A thriving ecosystem of entrepreneurs and changemakers who collaborate, grow, and make measurable impact together.</p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600">What We Do</h2>
        <div className="space-y-6">
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Summit Circle for Change is built to empower entrepreneurs. Here's what we do:
          </p>
          <ul className="list-disc list-inside text-left mx-auto sm:max-w-4xl text-gray-700">
            <li className="text-lg mb-3">Host Summits to create spaces for entrepreneurs to pitch, connect, and access opportunities.</li>
            <li className="text-lg mb-3">Collaborate on joint ventures, programs, and campaigns.</li>
            <li className="text-lg mb-3">Promote visibility for members’ businesses and stories.</li>
            <li className="text-lg mb-3">Support with resources, mentorship, and market access.</li>
            <li className="text-lg mb-3">Amplify the mission of Every Face Has a Story through collective voices.</li>
          </ul>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 text-center bg-indigo-700 text-white">
        <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Unity</h3>
            <p>We rise by lifting others.</p>
          </div>
          <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Authenticity</h3>
            <p>Every story matters.</p>
          </div>
          <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Growth</h3>
            <p>Personally, professionally, and collectively.</p>
          </div>
          <div className="p-6 bg-white text-indigo-700 rounded-lg shadow-md hover:shadow-xl transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Impact</h3>
            <p>We are here to leave a mark.</p>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-12 text-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h2 className="text-3xl font-semibold mb-6">Join the Summit Circle for Change</h2>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          Ready to grow your network and unlock new opportunities? Sign up today and get added to our WhatsApp group and community platforms!
        </p>
        <button
          onClick={handleJoinGroup}
          className="bg-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:bg-green-600 hover:scale-105"
        >
          Join Our WhatsApp Group Now
        </button>
      </section>
    </div>
  );
};

export default Circle4Change;
