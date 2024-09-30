import React from 'react';
import { Link } from 'react-router-dom';
import MessageUs from '../components/MessageUs';

// Upcoming Programs Data
const upcomingPrograms = [
  {
    title: 'RADIO PROGRAM',
    details: 'Join us for our upcoming Radio programs aimed at empowering through knowledge and skills.',
  },
  {
    title: 'Training Program',
    details: 'Participate in our Training Program, where you can access free training.',
  },
  // Add more programs as needed
];

// Get Involved Component
const GetInvolvedComp = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 text-center">
      <h2 className="text-4xl font-semibold text-gray-800 mb-10">Get Involved</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <Link to="/stakeholder-signup">
          <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
            <h3 className="text-2xl text-gray-700 mb-4">Become a Stakeholder</h3>
            <p className="text-gray-600 mb-6">Enjoy all the benefits that come by being a stakeholder.</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
              Become a Stakeholder
            </button>
          </div>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Volunteer Now</h3>
          <p className="text-gray-600 mb-6">Join us in making a difference by volunteering your time and skills.</p>
          <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
            Volunteer Now
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
          <h3 className="text-2xl text-gray-700 mb-4">Partner with Us</h3>
          <p className="text-gray-600 mb-6">Collaborate with us to amplify our impact through strategic partnerships.</p>
          <Link to="/donate">
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
              Partner with Us
            </button>
          </Link>
        </div>

        <Link to="/donate">
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

// Next Programs Component
const NextProgramsPage = () => {
  return (
    <div className="next-programs-page bg-gradient-to-r from-blue-400 to-green-500 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-white text-center mb-12">Our Upcoming Programs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingPrograms.map((program, index) => (
            <div 
              key={index} 
              className="program-card bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-600">{program.title}</h2>
              <p className="text-gray-700">{program.details}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Combined Component
const CombinedPage = () => {
  return (
    <div>
      <NextProgramsPage />
      <GetInvolvedComp />
      <MessageUs/>
    </div>
  );
};

export default CombinedPage;



// import React from 'react';
// import GetInvolvedComp from '../components/GetInvolvedComp';

// // Import images for upcoming programs
// //import UpcomingProgram1Image from '../assets/upcoming/upcoming1.jpg';
// //import UpcomingProgram2Image from '../assets/upcoming/upcoming2.jpg';
// // Add more images as needed

// const upcomingPrograms = [
//   {
//     title: 'RADIO PROGRAM',
//     //image: UpcomingProgram1Image,
//     details: 'Join us for our upcoming Radio programs aimed at empowering through knowledge and skills.',
//   },
//   {
//     title: 'Training Program',
//     //image: UpcomingProgram2Image,
//     details: 'Participate in our Training Program, where you can access free training.',
//   },
//   // Add more programs as needed
// ];

// const NextProgramsPage = () => {
//   return (
//     <div className="next-programs-page bg-gradient-to-r from-blue-400 to-green-500 py-12">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">Our Upcoming Programs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {upcomingPrograms.map((program, index) => (
//             <div 
//               key={index} 
//               className="program-card bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               {/* <img 
//                 src={program.image} 
//                 alt={program.title} 
//                 className="rounded-lg w-full h-48 object-cover mb-6"
//               /> */}
//               <h2 className="text-2xl font-bold mb-4 text-blue-600">{program.title}</h2>
//               <p className="text-gray-700">{program.details}</p>
//             </div>
            
//           ))}
          
//         </div>
        
//       </div>
//     </div>
    
//   );
// };



// export default NextProgramsPage;
