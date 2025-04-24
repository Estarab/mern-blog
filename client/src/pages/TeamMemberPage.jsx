import React from 'react';
import { useParams } from 'react-router-dom';
import { FaUserTie, FaBookOpen } from 'react-icons/fa';
import teamMembers from '../data/teamMembersData';

const TeamMemberPage = () => {
  const { name } = useParams();
  const teamMember = teamMembers.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '-') === name
  );

  if (!teamMember) {
    return <div className="text-center text-red-500 py-10">Team member not found</div>;
  }

  const formatBullets = (text) => {
    return text.split('\n').map((line, index) => {
      if (line.trim().startsWith('-')) {
        return (
          <li
            key={index}
            className="list-disc list-inside text-gray-700 text-sm leading-relaxed"
          >
            {line.replace('-', '').trim()}
          </li>
        );
      }
      return (
        <p key={index} className="text-gray-700 text-sm mb-2 leading-relaxed">
          {line}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <div className="flex flex-col items-center text-center">
          <img
            src={teamMember.image}
            alt={teamMember.name}
            className="h-40 w-40 rounded-full object-cover mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-800">{teamMember.name}</h2>
          <p className="text-gray-600 flex items-center justify-center mt-2 mb-4">
            <FaUserTie className="text-blue-600 mr-2" />
            {teamMember.position}
          </p>
          <p className="text-gray-700 max-w-xl">{teamMember.bio}</p>
        </div>

        {teamMember.articles.length > 0 && (
          <div className="mt-10 space-y-8">
            {teamMember.articles.map((article, index) => (
              <div key={index} className="border-t pt-6">
                <h3 className="text-xl font-semibold text-blue-700 flex items-center mb-2">
                  <FaBookOpen className="mr-2" />
                  {article.title}
                </h3>
                <div className="space-y-2">{formatBullets(article.content)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMemberPage;




// import React from 'react';
// import { useParams } from 'react-router-dom';
// import teamMembers from '../data/teamMembersData'; // Import the data file

// const TeamMemberPage = () => {
//     const { name } = useParams();
//     const teamMember = teamMembers.find(member => member.name.toLowerCase().replace(/\s+/g, '-') === name);

//     if (!teamMember) {
//         return <div>Team member not found</div>;
//     }

//     return (
//         <div className="py-12">
//             <div className="bg-white p-6 my-8 rounded-lg shadow-lg text-center">
//                 <h3 className="text-3xl font-bold mb-4">{teamMember.name}</h3>
//                 <img
//                     src={teamMember.image}
//                     alt={teamMember.name}
//                     className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
//                 />
//                 <h3 className="text-gray-700 mb-6 text-xl">{teamMember.position}</h3>
//                 <p>{teamMember.bio}</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {teamMember.articles.map((article, index) => (
//                     <div key={index} className="bg-white rounded-lg shadow-md">
//                         <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
//                         <div className="p-4">
//                             <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
//                             <p className="text-gray-600">{article.content}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TeamMemberPage;
