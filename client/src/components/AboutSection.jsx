import React from 'react';
import aboutimg1 from '../assets/about image/vision.jpeg'; // Assuming you have different images
import aboutimg2 from '../assets/about image/mission.jpeg';
import aboutimg3 from '../assets/about image/obj.jpeg';

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="container mx-auto space-y-12">
        
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src={aboutimg1} 
              alt="Our Mission" 
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
            To see individuals take a leadership role in addressing the most urgent issues facing the world, supported by their communities, civil society, government, and businesses.
            </p>
          </div>
        </div>

        {/* Second Section with Image on the Right */}
        <div className="flex flex-col md:flex-row-reverse items-center md:space-x-12 space-y-12 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src={aboutimg2} 
              alt="Our Vision" 
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
            Our mission is To place marginalized people at the forefront of development..
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-12 md:space-y-0">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img 
              src={aboutimg3} 
              alt="Our Objectives" 
              className="w-full h-auto rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 fade-in-up">
              Our Objectives
            </h2>
            <p className="text-gray-600 text-lg mb-6 fade-in-up delay-100">
            Empower individuals with social revolving funds.Promote unity and prevent conflicts to enhance social cohesion and socio-economic development among individuals.Build sustainable ecological development communities in developing societies.Equip marginalized individuals with sustainable life skills.Link individuals to public health and education systems.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;


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
