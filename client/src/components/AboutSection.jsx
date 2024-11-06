


import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { FaHandsHelping, FaUsers, FaSeedling, FaGraduationCap, FaHospital } from 'react-icons/fa';

const AboutSection = () => {
  const [typedText, setTypedText] = useState(Array(5).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIcons, setActiveIcons] = useState(Array(5).fill(false)); // To manage icon visibility one by one

  const bulletPoints = [
    { text: "Empower individuals with social revolving funds.", icon: <FaHandsHelping className="text-4xl text-green-500" /> },
    { text: "Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.", icon: <FaUsers className="text-4xl text-blue-500" /> },
    { text: "Build sustainable ecological development communities in developing societies.", icon: <FaSeedling className="text-4xl text-green-700" /> },
    { text: "Equip marginalized individuals with sustainable life skills.", icon: <FaGraduationCap className="text-4xl text-yellow-500" /> },
    { text: "Link individuals to public health and education systems.", icon: <FaHospital className="text-4xl text-red-500" /> }
  ];

  // Typing Effect Logic
  useEffect(() => {
    if (currentIndex < bulletPoints.length) {
      const typingInterval = setInterval(() => {
        const currentText = typedText[currentIndex];
        const currentPoint = bulletPoints[currentIndex].text;

        if (currentText.length < currentPoint.length) {
          setTypedText((prev) => {
            const newText = [...prev];
            newText[currentIndex] = currentPoint.substring(0, currentText.length + 1);
            return newText;
          });
        } else {
          // Move to the next bullet point
          setCurrentIndex((prev) => prev + 1);
          // Show the next icon after the current text is fully typed
          setActiveIcons((prev) => {
            const newIcons = [...prev];
            newIcons[currentIndex] = true;
            return newIcons;
          });
        }
      }, 10); // Speed of typing (lower value = faster typing)

      return () => clearInterval(typingInterval); // Cleanup on component unmount or when currentIndex changes
    }
  }, [typedText, currentIndex]);

  // Intersection observer to trigger animation when the section comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2,    // Trigger when 20% of the section is in view
  });

  // Animation for the entire section (fading in)
  const objectiveSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 300, friction: 25 },
  });

  return (
    <section className="py-16 px-8 bg-slate-100" ref={ref}>
      <div className="container mx-auto text-center text-gray-800 space-y-12">

        {/* Vision and Mission Layout */}
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Vision Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg space-y-4">
            <div className="flex items-center space-x-4">
              {/* <div className="text-5xl text-green-500">
                <FaHandsHelping />
              </div> */}
              <div>
                <h2 className="text-4xl font-semibold text-[#4B5563]" >Our Vision</h2>
                <p className="text-lg text-gray-600 justify-evenly">
                  To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
                </p>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-lg space-y-4">
            <div className="flex items-center space-x-4">
              <div className="text-5xl text-blue-500">
                <FaUsers />
              </div>
              <div>
                <h2 className="text-4xl font-semibold text-[#4B5563]">Our Mission</h2>
                <p className="text-lg text-gray-600">
                  Our mission is to place marginalized people at the forefront of development.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <h2 className="text-4xl font-semibold mb-8 text-[#4B5563]">Our Objectives</h2>
        <animated.div style={objectiveSpring} className="overflow-hidden">
          <div className="bg-white p-6 rounded-lg shadow-lg table-auto w-full">
            <table className="min-w-full text-left">
              <thead className="bg-gray-200">
                {/* <tr>
                  <th className="px-4 py-2 text-lg font-semibold text-gray-600">Icon</th>
                  <th className="px-4 py-2 text-lg font-semibold text-gray-600">Objective</th>
                </tr> */}
              </thead>
              <tbody>
                {bulletPoints.map((point, index) => (
                  <tr key={index} className="transition-all hover:bg-gray-100">
                    {/* Icon Column */}
                    <td className={`px-4 py-4 text-center ${activeIcons[index] ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
                      {point.icon}
                    </td>
                    {/* Text Column */}
                    <td className="px-4 py-4 text-lg text-gray-700">
                      {typedText[index]} {/* Typing effect for each point */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </animated.div>

        {/* Call-to-action Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-[#4B5563]">Support Our Cause</h3>
          <p className="text-lg mb-6 text-gray-600">
            Join us in empowering individuals and communities for a brighter future. Your donation can make a lasting impact!
          </p>
          
          
          <a
          href="/donate"
          className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-full mt-60 transition-transform transform hover:scale-105 animate-bounce"
        >
          Donate K1 a Day
        </a>
          
          
        
        

         
          
         
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



// import React from 'react';
// import { useSpring, animated } from 'react-spring';
//  import soilImage from '../assets/bg/chibolya.jpeg'; // Main background image
//  import visionImage from '../assets/bg/about1.jpg'; // Image for Vision section
//  import missionImage from '../assets/bg/about1.jpg'; // Image for Mission section
//  import objectivesImage from '../assets/bg/shadelight.jpg'; // Image for Objectives section

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
//       <div className="absolute inset-0 bg-black opacity-50"></div> {/* Main overlay for readability */}
//       <div className="container mx-auto relative z-10 text-center text-white space-y-12">

//         {/* First Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${visionImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
//           <div className="absolute inset-0 bg-black opacity-50"></div> {/* Section overlay for readability */}
//           <animated.div style={firstSectionSpring} className="relative z-10">
//             <h2 className="text-5xl font-bold mb-4">Our Vision</h2>
//             <p className="text-lg mb-6">
//               To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
//             </p>
//           </animated.div>
//         </div>

//         {/* Second Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${missionImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
//           <div className="absolute inset-0 bg-black opacity-60"></div> {/* Section overlay for readability */}
//           <animated.div style={secondSectionSpring} className="relative z-10">
//             <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
//             <p className="text-lg mb-6">
//               Our mission is to place marginalized people at the forefront of development.
//             </p>
//           </animated.div>
//         </div>

//         {/* Third Section with Background Image */}
//         <div className="relative p-8" style={{ backgroundImage: `url(${objectivesImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 1 }}>
//           <div className="absolute inset-0 bg-black opacity-75"></div> {/* Section overlay for readability */}
//           <h2 className="text-5xl font-bold mb-4 relative z-10">Our Objectives</h2>
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
