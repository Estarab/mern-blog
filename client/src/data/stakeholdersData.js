// src/data/stakeholdersData.js

import image1 from '../assets/stakeholders/sk.jpeg';
import image2 from '../assets/stakeholders/stakeholder.jpeg';
import image3 from '../assets/stakeholders/stakeholder1.jpeg';
import ab2 from '../assets/stakeholder photos/ab/ab nation tech.png'
import ab3 from '../assets/stakeholder photos/ab/MOBILE APP DEVELOPMENT.png'
import ab4 from '../assets/stakeholder photos/ab/digital m.png'

const stakeholders = [
    {
        name: 'Abraham Israel',
        image: image1,
        profession: 'Software Engineer',
        blog: ' WHAT I DO.',
        works: [
            {
                title: 'Building Responsive Websites',
                content: '  Our web development services are designed to create custom websites that not only meet the unique needs of our clients but also enhance user experience and drive engagement. We specialize in a wide range of technologies and frameworks, ensuring that each project is tailored to the specific goals of your business',
                image: ab2
            },
            {
                title: 'Mobile APP Development',
                content: 'Our app development services focus on creating innovative, user-friendly applications for both iOS and Android platforms. We specialize in custom app solutions tailored to meet the unique needs of businesses across various industries. From concept to launch, our experienced team employs the latest technologies and best practices to ensure high performance, security, and seamless user experiences. Whether you need a mobile app for e-commerce, social networking, or productivity, we’ve got you covered. Our ongoing support and maintenance ensure your app remains up-to-date and continues to engage users effectively, driving growth and success for your brand.',
                image: ab3,
            },
            {
                title: 'Digital Marketing',
                content: 'Our Digital marketing services encompasses a wide range of strategies aimed at promoting products or services through online channels. These services include search engine optimization (SEO) to enhance website visibility, pay-per-click (PPC) advertising for targeted traffic, and social media marketing to engage audiences on platforms like Facebook, Instagram, and Twitter.',
                image: ab4,
            },
            {
                title: 'Understanding React Hooks',
                content: 'React Hooks have transformed how we manage state...',
                image: 'path/to/image2.jpg',
            },
        ],
    },
    {
        name: 'Harriet Nakapizye',
        image: image2,
        profession: 'Project Manager',
        blog: 'Harriet shares insights on project management strategies and tips.',
        works: [
            {
                title: 'Agile Project Management Best Practices',
                content: '',
                image: 'path/to/image3.jpg',
            },
            {
                title: 'How to Lead a Successful Team',
                content: 'Leadership is crucial in project success. Here are my top tips...',
                image: 'path/to/image4.jpg',
            },
        ],
    },
    {
        name: 'Monde Rita Nguni',
        image: image3,
        profession: 'Designer',
        blog: '.',
        works: [
            {
                title: 'Creating User-Centric Designs',
                content: '',
                image: 'path/to/image5.jpg',
            },
            {
                title: 'The Importance of Usability Testing',
                content: '',
                image: 'path/to/image6.jpg',
            },
            {
                title: 'The Importance of Usability Testing',
                content: '',
                image: 'path/to/image6.jpg',
            },
            {
                title: 'The Importance of Usability Testing',
                content: 'Testing is essential for user satisfaction. Here’s why...Testing is essential for user satisfaction. Here’s whyTesting is essential for user satisfaction. Here’s whyTesting is essential for user satisfaction. Here’s whyTesting is essential for user satisfaction. Here’s whyTesting is essential for user satisfaction. Here’s whyTesting is essential for user satisfaction. Here’s whyvTesting is essential for user satisfaction. Here’s why',
                image: 'path/to/image6.jpg',
            },
        ],
    },
];

export default stakeholders;
