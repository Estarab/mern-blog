import React, { useState } from 'react';
import axios from 'axios';

const VolunteerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/volunteer', formData);
      alert('Registration successful!');
      // Clear the form
      setFormData({
        name: '',
        email: '',
        phone: '',
        skills: '',
      });
    } catch (error) {
      console.error('Error registering volunteer:', error);
      alert('There was an error registering. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4 text-center">Volunteer Registration</h2>
        <p className="mb-6 text-center">Join us and make a difference! Here are some responsibilities you may take on:</p>
        <ul className="mb-6 text-center">
          <li>- Assisting with events</li>
          <li>- Helping with community outreach</li>
          <li>- Fundraising activities</li>
        </ul>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-1/2 p-2 border rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400" // Smaller width
          />
          <textarea
            name="skills"
            placeholder="Skills and Experience"
            value={formData.skills}
            onChange={handleChange}
            className="w-full p-2 border rounded transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 px-4 rounded transition duration-200 hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerRegistration;
