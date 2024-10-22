import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/bg/chibolya.jpeg'; // Main background image
import stakeholderImage from '../assets/remember me/img111.jpg'; // Stakeholder section image
import volunteerImage from '../assets/remember me/Street-Kids-Uganda2.jpg'; // Volunteer section image
import partnerImage from '../assets/remember me/STREET-FMAILY.jpg'; // Partner section image
import donateImage from '../assets/remember me/photorealistic-kid-refugee-camp.jpg'; // Donate section image


const GetInvolvedComp = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="py-16 text-center bg-black bg-opacity-10">
        <h2 className="text-4xl font-bold text-white mb-10 text-shadow">Get Involved</h2>
        <div className="flex flex-wrap justify-center gap-8">
          
          <Link to="/stakeholder-info">
            <div className="relative rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm transition-all duration-300"
                style={{
                  backgroundImage: `url(${stakeholderImage})`,
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-80" />
              <h3 className="relative text-2xl text-white mb-4 text-shadow">Become a Stakeholder</h3>
              <p className="relative text-white mb-6 text-shadow">Enjoy all the benefits that come by being a stakeholder</p>
              <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
                Become a Stakeholder
              </button>
            </div>
          </Link>
          
          <Link to="/volunteer-registration">   
          <div className="relative rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm transition-all duration-300"
              style={{
                backgroundImage: `url(${volunteerImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-80" />
            <h3 className="relative text-2xl text-white mb-4 text-shadow">Volunteer Now</h3>
            <p className="relative text-white mb-6 text-shadow">Join us in making a difference by volunteering your time and skills.</p>
            <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors">
              Volunteer Now
            </button>
          </div>
          </Link>

          <div className="relative rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center blur-sm transition-all duration-300"
              style={{
                backgroundImage: `url(${partnerImage})`,
              }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-80" />
            <h3 className="relative text-2xl text-white mb-4 text-shadow">Partner with Us</h3>
            <p className="relative text-white mb-6 text-shadow">Collaborate with us to amplify our impact through strategic partnerships.</p>
            <Link to="/donate">
              <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
                Partner with Us
              </button>
            </Link>
          </div>

          <Link to="/donate">
            <div className="relative rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center blur-sm transition-all duration-300"
                style={{
                  backgroundImage: `url(${donateImage})`,
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-80" />
              <h3 className="relative text-2xl text-white mb-4 text-shadow">Donate Now</h3>
              <p className="relative text-white mb-6 text-shadow">Your contributions help us continue our mission and support those in need.</p>
              <button className="relative bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
                Donate Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedComp;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import backgroundImage from '../assets/bg/chibolya.jpeg'; // Main background image
// import stakeholderImage from '../assets/remember me/img111.jpg'; // Stakeholder section image
// import volunteerImage from '../assets/remember me/Street-Kids-Uganda2.jpg'; // Volunteer section image
// import partnerImage from '../assets/remember me/STREET-FMAILY.jpg'; // Partner section image
// import donateImage from '../assets/remember me/photorealistic-kid-refugee-camp.jpg'; // Donate section image

// const GetInvolvedComp = () => {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`, // Main background image
//       }}
//     >
//       <div className="py-16 text-center bg-black bg-opacity-50">
//         <h2 className="text-4xl font-bold text-white mb-10">Get Involved</h2>
//         <div className="flex flex-wrap justify-center gap-8">
          
//           <Link to="/stakeholder-info">
//             <div
//               className="rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl"
//               style={{
//                 backgroundImage: `url(${stakeholderImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <h3 className="text-2xl text-white mb-4">Become a Stakeholder</h3>
//               <p className="text-white mb-6">Enjoy all the benefits that come by being a stakeholder</p>
//               <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
//                 Become a Stakeholder
//               </button>
//             </div>
//           </Link>

//           <div
//             className="rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl"
//             style={{
//               backgroundImage: `url(${volunteerImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <h3 className="text-2xl text-white mb-4">Volunteer Now</h3>
//             <p className="text-white mb-6">Join us in making a difference by volunteering your time and skills.</p>
//             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors">
//               Volunteer Now
//             </button>
//           </div>

//           <div
//             className="rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl"
//             style={{
//               backgroundImage: `url(${partnerImage})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           >
//             <h3 className="text-2xl text-white mb-4">Partner with Us</h3>
//             <p className="text-white mb-6">Collaborate with us to amplify our impact through strategic partnerships.</p>
//             <Link to="/donate">
//               <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
//                 Partner with Us
//               </button>
//             </Link>
//           </div>

//           <Link to="/donate">
//             <div
//               className="rounded-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl"
//               style={{
//                 backgroundImage: `url(${donateImage})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <h3 className="text-2xl text-white mb-4">Donate Now</h3>
//               <p className="text-white mb-6">Your contributions help us continue our mission and support those in need.</p>
//               <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
//                 Donate Now
//               </button>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GetInvolvedComp;



// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const GetInvolvedComp = () => {
// //   return (
// //     <div className="py-16 bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 text-center">
// //       <h2 className="text-4xl font-bold text-white mb-10">Get Involved</h2>
// //       <div className="flex flex-wrap justify-center gap-8">
        
// //         <Link to="/stakeholder-info">
// //           <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //             <h3 className="text-2xl text-gray-700 mb-4">Become a Stakeholder</h3>
// //             <p className="text-gray-600 mb-6">Enjoy all the benefits that come by being a stakeholder</p>
// //             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
// //               Become a Stakeholder
// //             </button>
// //           </div>
// //         </Link>

// //         <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Volunteer Now</h3>
// //           <p className="text-gray-600 mb-6">Join us in making a difference by volunteering your time and skills.</p>
// //           <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors">
// //             Volunteer Now
// //           </button>
// //         </div>

// //         <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Partner with Us</h3>
// //           <p className="text-gray-600 mb-6">Collaborate with us to amplify our impact through strategic partnerships.</p>
// //           <Link to="/donate">
// //             <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
// //               Partner with Us
// //             </button>
// //           </Link>
// //         </div>

// //         <Link to="/donate">
// //           <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //             <h3 className="text-2xl text-gray-700 mb-4">Donate Now</h3>
// //             <p className="text-gray-600 mb-6">Your contributions help us continue our mission and support those in need.</p>
// //             <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
// //               Donate Now
// //             </button>
// //           </div>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GetInvolvedComp;


// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const GetInvolvedComp = () => {
// //   return (
// //     <div className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 text-center">
// //       <h2 className="text-4xl font-semibold text-gray-800 mb-10">Get Involved</h2>
// //       <div className="flex flex-wrap justify-center gap-8">
        
// //       <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Become a Stakeholder</h3>
// //           <p className="text-gray-600 mb-6">Enjoy all the benefits that come by being a stakeholder</p>
// //           <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
// //             Become a Stakeholder
// //           </button>
// //         </div>

// //         <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Volunteer Now</h3>
// //           <p className="text-gray-600 mb-6">Join us in making a difference by volunteering your time and skills.</p>
// //           <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
// //             Volunteer Now
// //           </button>
// //         </div>
        

        
// //         <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Partner with Us</h3>
// //           <p className="text-gray-600 mb-6">Collaborate with us to amplify our impact through strategic partnerships.</p>
// //           <Link to='/donate'>  
// //           <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-colors">
// //             Partner with Us
// //           </button>
// //           </Link>
// //         </div>
        

// //         <Link to='/donate'>
// //         <div className="bg-white rounded-lg shadow-lg p-8 w-72 transform transition-transform hover:-translate-y-3 hover:shadow-xl">
// //           <h3 className="text-2xl text-gray-700 mb-4">Donate Now</h3>
// //           <p className="text-gray-600 mb-6">Your contributions help us continue our mission and support those in need.</p>
// //           <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors">
// //             Donate Now
// //           </button>
// //         </div>
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GetInvolvedComp;
