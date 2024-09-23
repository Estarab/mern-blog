// src/pages/BlogDetailPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import stakeholders from '../data/stakeholdersData';

const BlogDetailPage = () => {
    const { title } = useParams();
    const titleNormalized = title.replace(/-/g, ' ');
    const stakeholder = stakeholders.flatMap(s => s.works).find(work => work.title.toLowerCase() === titleNormalized.toLowerCase());

    if (!stakeholder) {
        return <div>Article not found</div>;
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">{stakeholder.title}</h2>
                <img src={stakeholder.image} alt={stakeholder.title} className="w-full h-64 object-cover mb-4 rounded" />
                <p className="text-gray-700">{stakeholder.content}</p>
            </div>
        </div>
    );
};

export default BlogDetailPage;
