// src/components/BlogSections.jsx

import React from 'react';
import stakeholders from '../data/stakeholdersData';

const BlogSections = () => {
    return (
        <div className="py-12">
            {stakeholders.map((stakeholder, index) => (
                <div
                    key={index}
                    id={stakeholder.name.toLowerCase().replace(/\s+/g, '-')}
                    className="bg-white p-6 my-8 rounded-lg shadow-lg"
                >
                    <h3 className="text-2xl font-bold mb-4">{stakeholder.name}</h3>
                    <img
                        src={stakeholder.image}
                        alt={stakeholder.name}
                        className="mx-auto h-40 w-40 rounded-full object-cover mb-4"
                    />
                    <p className="text-gray-700">{stakeholder.blog}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogSections;
