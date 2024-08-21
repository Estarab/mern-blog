import React, { useState } from 'react';

const PopupForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <form onSubmit={handleSubmit} className="bg-purple-500 text-white p-8 rounded-lg shadow-lg">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          required
          className="mb-4 p-2 rounded bg-white text-black w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="mb-4 p-2 rounded bg-white text-black w-full"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
          className="mb-4 p-2 rounded bg-white text-black w-full"
        />
        <button type="submit" className="bg-pink-500 hover:bg-pink-700 transition ease-in-out duration-500 p-2 rounded">
          Proceed to Donate
        </button>
      </form>
    </div>
  );
};

export default PopupForm;
