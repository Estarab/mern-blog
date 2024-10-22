import React from 'react';
import { Link } from 'react-router-dom';
import teamMember1 from '../assets/meet-our-team/president.jpeg'; 
import teamMember2 from '../assets/meet-our-team/general treasure.jpeg'; 
import teamMember3 from '../assets/meet-our-team/project coordinator.jpeg'; 
import teamMember4 from '../assets/meet-our-team/esther.jpeg'; 
import backgroundImage from '../assets/bg/chibolya.jpeg'; // Import your background image

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'Zoe Rich',
      position: 'President, Founder and Board Chair of Stakeholders',
      image: teamMember1,
    },
    {
      name: 'Lydia Siamubwa',
      position: 'Office Bearer General Treasure',
      image: teamMember2,
    },
    {
      name: 'Sydney Kabaso',
      position: 'Office Bearer Project Coordinator',
      image: teamMember3,
    },
    {
      name: 'Esther Abrahams',
      position: 'Spokesperson',
      image: teamMember4,
    },
  ];

  return (
    <section 
      className="py-16 px-8 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 py-16 px-8 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Our Leadership</h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Link to={`/team-member/${member.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div 
                  className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
                >
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import teamMember1 from '../assets/meet-our-team/president.jpeg'; 
// import teamMember2 from '../assets/meet-our-team/general treasure.jpeg'; 
// import teamMember3 from '../assets/meet-our-team/project coordinator.jpeg'; 
// import teamMember4 from '../assets/meet-our-team/esther.jpeg'; 

// const MeetOurTeam = () => {
//   const teamMembers = [
//     {
//       name: 'Zoe Rich',
//       position: 'President, Founder and Board Chair of Stakeholders',
//       image: teamMember1,
//     },
//     {
//       name: 'Lydia Siamubwa',
//       position: 'Office Bearer General Treasure',
//       image: teamMember2,
//     },
//     {
//       name: 'Sydney Kabaso',
//       position: 'Office Bearer Project Coordinator',
//       image: teamMember3,
//     },
//     {
//       name: 'Esther Abrahams',
//       position: 'Spokesperson',
//       image: teamMember4,
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 py-16 px-8">
//       <div className="container mx-auto text-center">
//         <h2 className="text-4xl font-bold text-white mb-12">Our Leadership</h2>
        
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {teamMembers.map((member, index) => (
//             <Link to={`/team-member/${member.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
//               <div 
//                 className="bg-gray-100 p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
//               >
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-32 h-32 rounded-full mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
//                 <p className="text-gray-600">{member.position}</p>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MeetOurTeam;
