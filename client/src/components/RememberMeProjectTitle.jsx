import React from 'react';
import ImageSlider from './ImageSlider';
import { Link } from 'react-router-dom';

//import { Slider } from './Slider'; // Assuming you have the Slider component created


const RememberMeProjectTitle = () => {
  return (
    <div className="relative w-full h-screen">
      <ImageSlider/>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black bg-opacity-30">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn"></h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 animate-fadeIn">
          {/* Our mission is to rehabilitate homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. */}
        </p>
        <a
          href="/donate"
          className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full mt-60 transition-transform transform hover:scale-105 animate-bounce"
        >
          Donate K1 a Day
        </a>
        <Link
          to='/remember-me-project-page'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline text-center mt-2'
        >
          REMEMBER ME PROJECT: READ MORE 
        </Link>
      </div>
    </div>
  );
};

export default RememberMeProjectTitle;



// import React from 'react';

// const RememberMeProjectTitle = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-pink-500 p-4">
//       <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-4 transition transform hover:scale-105">
//         The Remember Me Project
//       </h1>
//       <p className="text-lg md:text-xl text-white text-center max-w-2xl mb-8 transition transform hover:scale-105">
//         Our mission is to rehabilitate homeless street persons by providing
//         comprehensive support through emergency shelter, healthcare, vocational
//         training, and integration into society as productive, contributing
//         citizens. Together, we can create a brighter future for those in need.
//       </p>
//       <button className="bg-white text-teal-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-teal-100 transition-all duration-300 transform hover:scale-105">
//         Join Us
//       </button>
//     </div>
//   );
// };

// export default RememberMeProjectTitle;
