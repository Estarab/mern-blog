// src/pages/StakeholderPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import stakeholders from '../data/stakeholdersData';

const StakeholderPage = () => {
    const { name } = useParams();
    const stakeholder = stakeholders.find(stakeholder => stakeholder.name.toLowerCase().replace(/\s+/g, '-') === name);

    if (!stakeholder) {
        return <div>Stakeholder not found</div>;
    }

    return (
        <div className="py-12">
            <div className="bg-white p-6 my-8 rounded-lg shadow-lg text-center">
                <h3 className="text-3xl font-bold mb-4 animate__animated animate__fadeIn">{stakeholder.name}</h3>
                <img
                    src={stakeholder.image}
                    alt={stakeholder.name}
                    className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
                />
                <h3 className="text-gray-700 mb-6 text-xl animate__animated animate__fadeIn">{stakeholder.blog}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {stakeholder.works.map((work, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md transform transition-transform hover:scale-105">
                        <img src={work.image} alt={work.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{work.title}</h4>
                            <p className="text-gray-600">{work.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StakeholderPage;
