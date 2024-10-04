import React, { useState } from 'react';
import axios from 'axios';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message before new submission
    try {
      const response = await axios.post('/api/subscribe', { email });
      if (response.status === 200) {
        setMessage('Subscription successful! Check your email for confirmation.');
        setEmail(''); // Clear the input field
      }
    } catch (error) {
      console.error('Error during subscription:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-8 bg-gradient-to-r from-purple-950 via-blue-500 to-purple-950">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Subscribe Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-6">
            Stay updated with the latest news, products, and special offers.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow p-3 rounded-md text-gray-800 mb-4 sm:mb-0 sm:mr-4"
              required
            />
            <Button
              type="submit"
              className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
            >
              Subscribe
            </Button>
          </form>
          {message && <p className="mt-2 text-green-400">{message}</p>} {/* Display message */}
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Head Office:</strong> The 3rd Floor, Design House, Cairo Road, Kang'ombe and Associates
          </p>
          <p className="mb-2">
            <strong>Email:</strong> wearetheworldzambia@gmail.com
          </p>
          <p className="mb-2">
            <strong>Office:</strong> +260955522564, +2609642628
          </p>
          <p className="mb-2">
            <strong>Mobile:</strong> +260776214959
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300 mr-4">
              <BsFacebook className="inline-block mr-1" /> Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300 mr-4">
              <BsTwitter className="inline-block mr-1" /> Twitter
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <BsInstagram className="inline-block mr-1" /> Instagram
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
            </li>
            <li className="mb-2">
              <a href="about" className="hover:text-blue-400 transition duration-300">About</a>
            </li>
            <li className="mb-2">
              <a href="/search" className="hover:text-blue-400 transition duration-300">Programs</a>
            </li>
            <li className="mb-2">
              <a href="/search" className="hover:text-blue-400 transition duration-300">Blog</a>
            </li>
            <li className="mb-2">
              <a href="stake-holders" className="hover:text-blue-400 transition duration-300">StakeHolders</a>
            </li>
            <li className="mb-2">
              <a href="/get-involved" className="hover:text-blue-400 transition duration-300">Get Involved</a>
            </li>
            <li className="mb-2">
              <Link to='/donate'>
                <Button
                  className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
                >
                  Donate
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-gray-700 pt-8">
        <p>&copy; 2024 We Are The World Zambia. All rights reserved. Developed by AB Nation Tech</p>
      </div>
    </footer>
  );
};

export default Footer;
