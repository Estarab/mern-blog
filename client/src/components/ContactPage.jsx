


import React from 'react';
import { useSpring, animated } from 'react-spring';

const ContactPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideInLeft = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    config: { tension: 280, friction: 60 },
  });

  const slideInRight = useSpring({
    from: { transform: 'translateX(100%)' },
    to: { transform: 'translateX(0%)' },
    config: { tension: 280, friction: 60 },
  });

  return (
    <div className="container mx-auto py-10 px-4">
      {/* Upper Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <animated.div style={slideInLeft}>
          <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
          <p><strong>Office:</strong> +260955522564, +2609642628</p>
          <p><strong>Mobile:</strong>  +260776214959</p>
          <p><strong>Email:</strong> wearetheworldzambia@gmail.com</p>
          <p><strong>Address:</strong> The 3rd Floor, Design House, Cairo Road, Kang&#39;ombe and
          Associates P.O. Box 39428 Lusaka, Zambia</p>

          <animated.div style={fadeIn} className="mt-6">
            <h4 className="text-xl font-semibold mb-2">Working Hours</h4>
            <ul className="list-disc ml-5">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </animated.div>
        </animated.div>

        <animated.div style={slideInRight} className="bg-gray-100 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>
        </animated.div>
      </div>

      {/* Lower Section */}
      <animated.div style={fadeIn} className="mt-10">
        <h4 className="text-3xl font-semibold mb-4">Our Location</h4>
        {/* <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091545!2d144.95565131531927!3d-37.817313979751675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f4a7d1c7%3A0xfb6e9d77b9a75934!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1610410112453!5m2!1sen!2sau"
          className="w-full h-96 border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe> */}
      </animated.div>
    </div>
  );
};

export default ContactPage;

