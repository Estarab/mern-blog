// src/components/BlogPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/programs/front-view-kid-bicycle-outdoors.jpg'
import blog2 from '../assets/programs/Untitled.jpg'

// Function to truncate text after a specified number of words
const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
};

const BlogPage = () => {
    const posts = [
        {
            id: 1,
            title: 'The "Remember Me" Project',
            // subtitle: 'This is the subtitle for post 1.',
            content: '"Remember Me" is a transformative initiative by the We Are The World organization, aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. This initiative will be documented and aired as a live TV show to raise awareness and garner public support. The project will be replicated in 160 districts across Zambia with a budget of K30,000,000.00 per district..',
            image: blog1, // Placeholder image
            fullContent: 'This is the full content of .',
        },
        {
            id: 2,
            title: 'RADIO PROGRAM',
            // subtitle: 'This is the subtitle for post 2.',
            content: 'Join us for our upcoming Radio programs aimed at empowering through knowledge and skills.',
            image:blog2 , // Placeholder image
            fullContent: 'This is the full content of Blog Post Title 2.',
        },
        // {
        //     id: 3,
        //     title: 'Blog Post Title 3',
        //     subtitle: 'This is the subtitle for post 3.',
        //     content: 'This is the summary of the blog post. It will give readers an overview of the content. Here is some more information to make the summary longer. This content should be truncated after 125 words or less to show only a preview of the article.',
        //     image: 'https://via.placeholder.com/400x200', // Placeholder image
        //     fullContent: 'This is the full content of Blog Post Title 3.',
        // },
    ];

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* <h1 className="text-4xl font-bold text-purple-600 mb-8">Blog</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
                            <h3 className="text-lg font-medium text-gray-500 mt-1">{post.subtitle}</h3>
                            <p className="text-gray-700 mt-2">{truncateText(post.content, 25)}</p>
                            <Link to={`/article/${post.id}`} className="text-purple-600 hover:underline mt-4 block">Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
