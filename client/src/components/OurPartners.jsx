// src/components/OurPartners.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import stakeholders from '../data/stakeholdersData';

const OurPartners = () => {
    return (
        <div className="bg-gray-100 py-12">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">Stakeholders</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {stakeholders.map((stakeholder, index) => (
                    <div key={index} className="text-center transition-transform transform hover:scale-105">
                        <Link to={'/search'}>
                            <img
                                src={stakeholder.image}
                                alt={stakeholder.name}
                                className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
                            />
                        </Link>
                        <h3 className="mt-4 text-lg font-medium text-gray-700">{stakeholder.name}</h3>
                        <p className="text-gray-500">{stakeholder.profession}</p>
                        {/* <Link to={`/stakeholder/${stakeholder.name.toLowerCase().replace(/\s+/g, '-')}/posts`} className="text-blue-500 underline">View Posts</Link> */}
                        <Link to={'/search'} className="text-blue-500 underline">View Posts</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurPartners;


// // src/components/OurPartners.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import stakeholders from '../data/stakeholdersData';

// const OurPartners = () => {
//     return (
//         <div className="bg-gray-100 py-12">
//             <h2 className="text-3xl font-extrabold text-center text-gray-900">Stakeholders</h2>
//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//                 {stakeholders.map((stakeholder, index) => (
//                     <div key={index} className="text-center transition-transform transform hover:scale-105">
//                         <Link to={`/stakeholder/${stakeholder.name.toLowerCase().replace(/\s+/g, '-')}`}>
//                             <img
//                                 src={stakeholder.image}
//                                 alt={stakeholder.name}
//                                 className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
//                             />
//                         </Link>
//                         <h3 className="mt-4 text-lg font-medium text-gray-700">{stakeholder.name}</h3>
//                         <p className="text-gray-500">{stakeholder.profession}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurPartners;
