import React from 'react';

// Import images from the assets folder
import Program1Image from '../assets/programs/program1-removebg-preview.png';
import Program2Image from '../assets/programs/8ed65093-24cd-4dd0-96a7-667db0b72d6e.jpg';
import Program3Image from '../assets/about image/obj.jpeg';
import Program4Image from '../assets/programs/job.jpg';
import Program5Image from '../assets/about image/mission.jpeg';
import Program6Image from '../assets/programs/support.jpg';
import BackgroundImage from '../assets/bg/chibolya.jpeg'; // Main background image

const programs = [
  {
    title: 'Every Face Has A Story',
    image: Program1Image,
    details: 'Raise help for people with chronic illnesses in developing communities...',
  },
  {
    title: 'Every Child My Child (Orphanages Support)',
    image: Program2Image,
    details: 'A program dedicated to supporting orphaned and vulnerable children...',
  },
  {
    title: 'Community Schools (WATWCSCDC)',
    image: Program3Image,
    details: 'Provides early care and education for children from age one...',
  },
  {
    title: 'Nation Building (Job Creation and Entrepreneurs Campaign)',
    image: Program4Image,
    details: 'A program focused on lifting unemployed youth...',
  },
  {
    title: 'Training Programs',
    image: Program5Image,
    details: 'Trainings Programs Include: Driving, peanut butter making...',
  },
  {
    title: 'Orphanages Support',
    image: Program6Image,
    details: 'Promote awareness of the plight of indigent children...',
  },
];

const ProgramsPage = () => {
  return (
    <div 
      className="programs-page py-12" 
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-black bg-opacity-50 py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white text-center mb-12">Our Programs</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="program-card relative p-6 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  backgroundImage: `url(${program.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  color: 'white',
                  padding: '16px',
                }}
              >
                <div className="bg-black bg-opacity-60 p-4 rounded-lg">
                  <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                  <p className="text-gray-300">{program.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;



// import React from 'react';

// // Import images from the assets folder
// import Program1Image from '../assets/programs/program1-removebg-preview.png';
// import Program2Image from '../assets/programs/8ed65093-24cd-4dd0-96a7-667db0b72d6e.jpg';
// import Program3Image from '../assets/about image/obj.jpeg';
// import Program4Image from '../assets/programs/job.jpg';
// import Program5Image from '../assets/about image/mission.jpeg';
// import Program6Image from '../assets/programs/support.jpg';

// const programs = [
//   {
//     title: 'Every Face Has A Story',
//     image: Program1Image,
//     details: 'Raise help for people with chronic illnesses in developing communities. Promote hidden potential and talent in every child, contributing to social and economic development. Raise education and health funds for children in need.',
//   },
//   {
//     title: 'Every Child My Child (Orphanages Support)',
//     image: Program2Image,
//     details: 'A program dedicated to supporting orphaned and vulnerable children, addressing the challenges they face due to poverty. Promote awareness of the plight of indigent children. Alert society of the dire social consequences of neglecting these problems.Raise funds to improve the conditions of indigent children.',
//   },
//   {
//     title: 'Community Schools (WATWCSCDC)',
//     image: Program3Image,
//     details: 'Provides early care and education for children from age one, through a program accredited by the Ministry of Education. The school welcomes families of all racial, ethnic, and religious backgrounds..',
//   },
//   {
//     title: 'Nation Building (Job Creation and Entrepreneurs Campaign)',
//     image: Program4Image,
//     details: 'A program focused on lifting unemployed youth, men, and women by teaching them basic skills necessary for joining the labor force and creating entrepreneurship opportunities..',
//   },
//   {
//     title: 'Training Programs',
//     image: Program5Image,
//     details: 'Trainings Programs Include: Driving, peanut butter making, brick making, chicken feed production, soap making, tailoring and designing, baking, computer training, video production, fish farming, agriculture for business..',
//   },
//   {
//     title: 'Orphanages Support',
//     image: Program6Image,
//     details: 'Promote awareness of the plight of indigent children. Alert society of the dire social consequences of neglecting these problems.Raise funds to improve the conditions of indigent children.',
//   },
// ];

// const ProgramsPage = () => {
//   return (
//     <div className="programs-page bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl font-bold text-white text-center mb-12">Our Programs</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {programs.map((program, index) => (
//             <div 
//               key={index} 
//               className="program-card bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
//             >
//               <img 
//                 src={program.image} 
//                 alt={program.title} 
//                 className="rounded-lg w-full h-48 object-cover mb-6"
//               />
//               <h2 className="text-2xl font-bold mb-4 text-purple-600">{program.title}</h2>
//               <p className="text-gray-700">{program.details}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProgramsPage;
