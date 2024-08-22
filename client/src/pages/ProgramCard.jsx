import React from 'react';
import ProgramCard from '../components/ProgramCard';

// Import images from the assets folder
import Program1Image from '../assets/banner/banner1.jpg';
import Program2Image from '../assets/banner/banner2.jpg';
import Program3Image from '../assets/banner/banner3.jpg';

const programs = [
  {
    title: 'Program One',
    image: Program1Image,
    details: 'This is a brief description of Program One. It covers various aspects and benefits.',
  },
  {
    title: 'Program Two',
    image: Program2Image,
    details: 'This is a brief description of Program Two. It focuses on key areas of development.',
  },
  {
    title: 'Program Three',
    image: Program3Image,
    details: 'This is a brief description of Program Three. It is designed to enhance skills.',
  },
];

const ProgramsPage = () => {
  return (
    <div className="programs-page bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Our Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard 
              key={index} 
              title={program.title} 
              image={program.image} 
              details={program.details} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;
