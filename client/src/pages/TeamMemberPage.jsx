import React from 'react';
import { useParams } from 'react-router-dom';
import teamMembers from '../data/teamMembersData'; // Import the data file

const TeamMemberPage = () => {
    const { name } = useParams();
    const teamMember = teamMembers.find(member => member.name.toLowerCase().replace(/\s+/g, '-') === name);

    if (!teamMember) {
        return <div>Team member not found</div>;
    }

    return (
        <div className="py-12">
            <div className="bg-white p-6 my-8 rounded-lg shadow-lg text-center">
                <h3 className="text-3xl font-bold mb-4">{teamMember.name}</h3>
                <img
                    src={teamMember.image}
                    alt={teamMember.name}
                    className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-gray-700 mb-6 text-xl">{teamMember.position}</h3>
                <p>{teamMember.bio}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMember.articles.map((article, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md">
                        <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{article.title}</h4>
                            <p className="text-gray-600">{article.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamMemberPage;
