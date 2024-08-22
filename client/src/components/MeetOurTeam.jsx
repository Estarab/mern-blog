import React from 'react';
import teamMember1 from '../assets/meet-our-team/president.jpeg'; // Replace with actual image paths
import teamMember2 from '../assets/meet-our-team/general treasure.jpeg'; // Replace with actual image paths
import teamMember3 from '../assets/meet-our-team/project coordinator.jpeg'; // Replace with actual image paths
import teamMember4 from '../assets/meet-our-team/esther.jpeg'; // Replace with actual image paths

const MeetOurTeam = () => {
  const teamMembers = [
    {
      name: 'Zoe Rich',
      position: 'President and Founder & Board Chair of Stakeholders',
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
    <section className="bg-white py-16 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
