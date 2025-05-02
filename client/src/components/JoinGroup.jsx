import React from 'react';
import { FaHandshake, FaUsers, FaLightbulb, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JoinGroup = () => {
  const handleJoinGroup = () => {
    
    window.open('/sign-up'); 
  };

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-purple-900 text-white ">
      {/* Hero Section */}
      <section className="text-center py-10 px-4 md:px-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          Summit Circle for Change
        </h1>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto mb-8 animate__animated animate__fadeIn animate__delay-1s">
          A vibrant community of entrepreneurs, leaders, creatives, and changemakers born out of the Zambia Business & Leadership Summit 2025.
        </p>
        <p className="text-xl max-w-3xl mx-auto mb-6">
          Ready to grow your network and unlock new opportunities? Sign up today and get added to our WhatsApp group and community platforms!
        </p>
        <button
          onClick={handleJoinGroup}
          className="bg-green-500 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:bg-green-600 hover:scale-105 animate__animated animate__fadeIn animate__delay-2s"
        >
          Join Our WhatsApp Group
        </button>

        <p>
        <span>Want to Learn More?</span>
                    <Link to='/summit circle for change' className='text-white underline p-2 text-lg'>
                      Click Here
                    </Link>

        </p>
       
      </section>

      
    </div>
  );
};

export default JoinGroup;
