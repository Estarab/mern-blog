import React from 'react';
import { useSpring, animated } from 'react-spring';
 import soilImage from '../assets/bg/chibolya.jpeg'; // Main background image
 import visionImage from '../assets/bg/about1.jpg'; // Image for Vision section
 import missionImage from '../assets/bg/about1.jpg'; // Image for Mission section
 import objectivesImage from '../assets/bg/shadelight.jpg'; // Image for Objectives section

const AboutSection = () => {
  const firstSectionSpring = useSpring({
    from: { transform: 'translateX(-100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 1000 },
  });

  const secondSectionSpring = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: { duration: 1000 },
  });

  const bulletPoints = [
    "Empower individuals with social revolving funds.",
    "Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.",
    "Build sustainable ecological development communities in developing societies.",
    "Equip marginalized individuals with sustainable life skills.",
    "Link individuals to public health and education systems."
  ];

  return (
    <section
      className="relative py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${soilImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Main overlay for readability */}
      <div className="container mx-auto relative z-10 text-center text-white space-y-12">

        {/* First Section with Background Image */}
        <div className="relative p-8" style={{ backgroundImage: `url(${visionImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Section overlay for readability */}
          <animated.div style={firstSectionSpring} className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">Our Vision</h2>
            <p className="text-lg mb-6">
              To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
            </p>
          </animated.div>
        </div>

        {/* Second Section with Background Image */}
        <div className="relative p-8" style={{ backgroundImage: `url(${missionImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
          <div className="absolute inset-0 bg-black opacity-60"></div> {/* Section overlay for readability */}
          <animated.div style={secondSectionSpring} className="relative z-10">
            <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              Our mission is to place marginalized people at the forefront of development.
            </p>
          </animated.div>
        </div>

        {/* Third Section with Background Image */}
        <div className="relative p-8" style={{ backgroundImage: `url(${objectivesImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
          <div className="absolute inset-0 bg-black opacity-75"></div> {/* Section overlay for readability */}
          <h2 className="text-5xl font-bold mb-4 relative z-10">Our Objectives</h2>
          <ul className="list-disc list-inside text-lg relative z-10">
            {bulletPoints.map((point, index) => {
              const bulletPointSpring = useSpring({
                from: { transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 },
                config: { duration: 800 },
              });

              return (
                <animated.li key={index} style={bulletPointSpring} className="mb-2">
                  {point}
                </animated.li>
              );
            })}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;


// import React from 'react';
// import { useSpring, animated } from 'react-spring';
// import soilImage from '../assets/bg/freepik-export-20241019115739maUF.jpeg'; // Main background image
// import visionImage from '../assets/remember me/img111.jpg'; // Image for Vision section
// import missionImage from '../assets/remember me/img22.jpg'; // Image for Mission section
// import objectivesImage from '../assets/remember me/img33.jpg'; // Image for Objectives section

// const AboutSection = () => {
//   const firstSectionSpring = useSpring({
//     from: { transform: 'translateX(-100%)', opacity: 0 },
//     to: { transform: 'translateX(0)', opacity: 1 },
//     config: { duration: 1000 },
//   });

//   const secondSectionSpring = useSpring({
//     from: { transform: 'translateX(100%)', opacity: 0 },
//     to: { transform: 'translateX(0)', opacity: 1 },
//     config: { duration: 1000 },
//   });

//   const bulletPoints = [
//     "Empower individuals with social revolving funds.",
//     "Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.",
//     "Build sustainable ecological development communities in developing societies.",
//     "Equip marginalized individuals with sustainable life skills.",
//     "Link individuals to public health and education systems."
//   ];

//   return (
//     <section
//       className="relative py-16 px-8 bg-cover bg-center"
//       style={{ backgroundImage: `url(${soilImage})` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for readability */}
//       <div className="container mx-auto relative z-10 text-center text-white space-y-12">

//         {/* First Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${visionImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//           <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for readability */}
//           <animated.div style={firstSectionSpring} className="relative z-10">
//             <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
//             <p className="text-lg mb-6">
//               To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
//             </p>
//           </animated.div>
//         </div>

//         {/* Second Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${missionImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//           <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for readability */}
//           <animated.div style={secondSectionSpring} className="relative z-10">
//             <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
//             <p className="text-lg mb-6">
//               Our mission is to place marginalized people at the forefront of development.
//             </p>
//           </animated.div>
//         </div>

//         {/* Third Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${objectivesImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
//           <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for readability */}
//           <h2 className="text-4xl font-bold mb-4 relative z-10">Our Objectives</h2>
//           <ul className="list-disc list-inside text-lg relative z-10">
//             {bulletPoints.map((point, index) => {
//               const bulletPointSpring = useSpring({
//                 from: { transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 },
//                 to: { transform: 'translateX(0)', opacity: 1 },
//                 config: { duration: 800 },
//               });

//               return (
//                 <animated.li key={index} style={bulletPointSpring} className="mb-2">
//                   {point}
//                 </animated.li>
//               );
//             })}
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;



// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// const AboutSection = () => {
//   const firstSectionSpring = useSpring({
//     from: { transform: 'translateX(-100%)', opacity: 0 },
//     to: { transform: 'translateX(0)', opacity: 1 },
//     config: { duration: 1000 },
//   });

//   const secondSectionSpring = useSpring({
//     from: { transform: 'translateX(100%)', opacity: 0 },
//     to: { transform: 'translateX(0)', opacity: 1 },
//     config: { duration: 1000 },
//   });

//   const bulletPoints = [
//     "Empower individuals with social revolving funds.",
//     "Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.",
//     "Build sustainable ecological development communities in developing societies.",
//     "Equip marginalized individuals with sustainable life skills.",
//     "Link individuals to public health and education systems."
//   ];

//   return (
//     <section className="bg-soil py-16 px-8">
//       <div className="container mx-auto space-y-12">

//         {/* First Section */}
//         <animated.div style={firstSectionSpring} className="bg-white rounded-lg shadow-lg p-8 mx-auto">
//           <h2 className="text-4xl font-bold text-purple-500 text-center mb-4">Our Vision</h2>
//           <p className="text-gray-600 text-lg text-center mb-6">
//             To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
//           </p>
//         </animated.div>

//         {/* Second Section */}
//         <animated.div style={secondSectionSpring} className="bg-white rounded-lg shadow-lg p-8 mx-auto">
//           <h2 className="text-4xl font-bold text-purple-500 text-center mb-4">Our Mission</h2>
//           <p className="text-gray-600 text-lg text-center mb-6">
//             Our mission is to place marginalized people at the forefront of development.
//           </p>
//         </animated.div>

//         {/* Third Section with Bullet Points */}
//         <div className="bg-white rounded-lg shadow-lg p-8 mx-auto">
//           <h2 className="text-4xl font-bold text-purple-500 text-center mb-4">Our Objectives</h2>
//           <ul className="list-disc list-inside text-gray-600 text-lg">
//             {bulletPoints.map((point, index) => {
//               const bulletPointSpring = useSpring({
//                 from: { transform: index % 2 === 0 ? 'translateX(-100%)' : 'translateX(100%)', opacity: 0 },
//                 to: { transform: 'translateX(0)', opacity: 1 },
//                 config: { duration: 800 },
//               });

//               return (
//                 <animated.li key={index} style={bulletPointSpring} className="mb-2">
//                   {point}
//                 </animated.li>
//               );
//             })}
//           </ul>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default AboutSection;



// import React from 'react';
// import aboutimg1 from '../assets/about image/vision.jpeg'; // Assuming you have different images
// import aboutimg2 from '../assets/about image/mission.jpeg';
// import aboutimg3 from '../assets/about image/obj.jpeg';


// const AboutSection = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-8">
//       <div className="container mx-auto space-y-12 ">
        
//         {/* First Section */}
//         <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 lg:hidden">
//             <img 
//               src={aboutimg1} 
//               alt="Our Mission" 
//               className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
//             />
//           </div>
//           {/* Text Section */}
//           <div className="w-full md:w-1/2 text-center md:text-left ">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
//               Our Vision
//             </h2>
//             <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
//             To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
//             </p>
//           </div>
//         </div>

//         {/* Second Section with Image on the Right */}
//         <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-12 md:space-y-0 lg:hidden">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 lg:hidden">
//             <img 
//               src={aboutimg2} 
//               alt="Our Vision" 
//               className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
//             />
//           </div>
//           {/* Text Section */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
//               Our Mission
//             </h2>
//             <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
//             Our mission is To place marginalized people at the forefront of development..
//             </p>
//           </div>
//         </div>

//         {/* Third Section */}
//         <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 lg:hidden">
//             <img 
//               src={aboutimg3} 
//               alt="Our Objectives" 
//               className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
//             />
//           </div>
//           {/* Text Section */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
//               Our Objectives
//             </h2>
//             <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
//             Empower individuals with social revolving funds.Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.Build sustainable ecological development communities in developing societies.Equip marginalized individuals with sustainable life skills.Link individuals to public health and education systems.
//             </p>
//           </div>
//         </div>

//       </div>
      
//     </section>
//   );
// };

// export default AboutSection;


// import React from 'react';
// import aboutimg from '../assets/banner/img4.jpg'

// const AboutSection = () => {
//   return (
//     <section className="bg-gray-100 py-16 px-8">
//       <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
        
//         {/* Image Section */}
//         <div className="w-full md:w-1/2">
//           <img 
//             src={aboutimg} 
//             alt="About Us" 
//             className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
//             Our Objectives
//           </h2>
//           <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
//           Empower individuals with social revolving funds <br/>
//           Promote unity and prevent conflicts to enhance social cohesion and socio-economic
//           development among individuals<br/>
//           Build sustainable ecological development communities in developing societies <br/>
//           Equip marginalized individuals with sustainable life skills <br/>
//           Link individuals to public health and education systems <br/>
//           </p>
//           {/* <p className="text-gray-600 text-lg fade-in-up delay-200">
//             Whank you for visiting, and we look forward to serving you!
//           </p> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
