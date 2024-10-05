// src/components/ArticlePage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

// Import images from the assets folder
import image1 from '../assets/programs/front-view-kid-bicycle-outdoors.jpg'; // Update with your actual image file names
import image2 from '../assets/programs/Untitled.jpg';
//import image3 from '../assets/image3.jpg';

// Sample articles data with imported images
const articles = [
    {
        id: 1,
        title: 'The "Remember Me" Project',
        content: (
            <>
                  <div className="w-full h-72 relative overflow-hidden">
                <img src={image1} alt="The Remember Me Project" className="mt-4 w-full h-auto rounded-lg shadow-md" />
                </div>

                <p className="mt-4">"Remember Me" is a transformative initiative by the We Are The World organization, aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. This initiative will be documented and aired as a live TV show to raise awareness and garner public support. The project will be replicated in 160 districts across Zambia with a budget of K30,000,000.00 per district.</p>
                <h2 className="text-2xl font-semibold mt-6">Project Duration</h2>
                <p>• Initial intake: 6 months</p>
                <p>• New intake: Every 6 months</p>
                <h2 className="text-2xl font-semibold mt-6">Key Objectives</h2>
                <p>1. Provide emergency shelter and basic necessities to 100 homeless street persons per intake.</p>
                <p>2. Deliver healthcare, including mental health services and substance abuse treatment.</p>
                <p>3. Facilitate vocational training and employment support</p>
                <p>4. Integrate rehabilitated individuals back into society.</p>
                <p>5. Raise awareness and public support through a live TV show.</p>
                <h2 className="text-2xl font-semibold mt-6">Project Components</h2>
                <h2 className="text-1xl font-semibold mt-6">1. Emergency Shelter and Immediate Care</h2>
                <h2 className="text-1xl font-semibold mt-2">Duration: First 2 Weeks</h2>
                <h2 className="text-1xl font-semibold mt-2">Activities</h2>
                <p>- Intake and assessment: Register participants, conduct initial assessments, and develop individual care plans.</p>
                <p>- Immediate needs fulfillment: Provide safe shelter, nutritious meals, clothing, and hygiene products.</p>
                <p>- Medical and psychological care: Conduct health screenings, provide medical treatments, and initiate counseling.</p>

                <h2 className="text-1xl font-semibold mt-6">2. Transitional Support and Skills Development</h2>
                <h2 className="text-1xl font-semibold mt-2">Duration: 3.5 months</h2>
                <h2 className="text-1xl font-semibold mt-2">Activities</h2>
                <p>- Housing stability: Transition participants to stable, semi-private accommodations within the shelter.</p>
                <p>- Life skills training: Workshops on daily living skills, conflict resolution, and interpersonal skills.</p>
                <p>- Employment support: Vocational training, job search assistance, and partnerships with local businesses for job placement.</p>
                <p>- Legal and financial assistance: Provide legal support and financial literacy training.</p>

                <h2 className="text-1xl font-semibold mt-6">3. Health and Wellness</h2>
                <h2 className="text-1xl font-semibold mt-2">Duration: Continuous throughout the 6 months</h2>
                <h2 className="text-1xl font-semibold mt-2">Activities</h2>
                <p>- Medical care: Regular health check-ups and ongoing medical treatment.</p>
                <p>- Substance abuse treatment: Comprehensive programs, including detoxification and rehabilitation.</p>

                <h2 className="text-1xl font-semibold mt-6">4. Community Integration and Social Support</h2>
                <h2 className="text-1xl font-semibold mt-2">Duration: Last 1.5 months</h2>
                <h2 className="text-1xl font-semibold mt-2">Activities</h2>
                <p>- Community engagement: Organize events to foster social connections and a sense of belonging.</p>
                <p>- Family reunification: Support efforts to reconnect with supportive family members and provide counseling.</p>
                <p>- Mentorship program: Pair participants with mentors for guidance and support.</p>

                <h2 className="text-1xl font-semibold mt-6">5. Transition to Independence</h2>
                <h2 className="text-1xl font-semibold mt-2">Duration: Last 2 Weeks</h2>
                <h2 className="text-1xl font-semibold mt-2">Activities</h2>
                <p>- Housing support: Assist with securing permanent, affordable housing and provide rental assistance.</p>
                <p>- Ongoing case management: Ensure access to support services post-shelter and monitor progress.</p>

                <h2 className="text-2xl font-semibold mt-6">Implementation Plan</h2>
                <p>1. Partnerships: Collaborate with local government, non-profit organizations, healthcare providers, businesses, and community groups.</p>
                <p>2. Funding: Secure funding through grants, donations, and government support.</p>
                <p>3. Staffing: Hire qualified staff, including case managers, healthcare professionals, counselors, and vocational trainers. Provide training to ensure high-quality care.</p>
                <p>4. Monitoring and Evaluation: Regularly assess program effectiveness through participant feedback and performance metrics. Adjust strategies based on evaluation outcomes.</p>
                <p>5. Sustainability: Develop long-term plans, including community involvement and continuous fundraising efforts. Advocate for policy changes to address homelessness at a systemic level.</p>

                <h2 className="text-2xl font-semibold mt-6">Expected Outcomes</h2>
                <p>• Immediate relief: Essential shelter, food, and medical care.</p>
                <p>• Skills and employment: Life and vocational skills leading to employment opportunities.</p>
                <p>• Health and well-being: Improved physical and mental health.</p>
                <p>• Social integration: Building social connections and support networks.</p>
                <p>• Permanent housing: Secure long-term stability.</p>
                <p>• Reduced homelessness: Contribute to reducing homelessness and promoting social cohesion.</p>
                <br />
                <span>By implementing the "Remember Me" project, the goal is to transform the lives of homeless street persons, empowering them to become self-sufficient and valued members of society.</span>
            </>
        ),
    },
    {
        id: 2,
        title: 'RADIO PROGRAM',
        content: (
            <>
                 <div className="w-full h-72 relative overflow-hidden">
                <img src={image2} alt="Radio Program" className="mt-4 w-full h-auto rounded-lg shadow-md" />
                </div>
                <p className="mt-4">Join us for our upcoming Radio programs aimed at empowering through knowledge and skills.</p>
            </>
        ),
    },
    // {
    //     id: 3,
    //     title: 'Blog Post Title 3',
    //     content: (
    //         <>
    //             <img src={image3} alt="Blog Post 3" className="mt-4 w-full h-auto rounded-lg shadow-md" />
    //             <p className="mt-4">This is the full content of Blog Post Title 3. Here you can elaborate on the details of the post.</p>
    //             <h2 className="text-2xl font-semibold mt-6">Subheading 1</h2>
    //             <p>This paragraph provides more details about the first subheading. It's important to keep the reader engaged.</p>
    //             <h2 className="text-2xl font-semibold mt-6">Subheading 2</h2>
    //             <p>This is another paragraph under the second subheading. You can discuss additional points that support your main content.</p>
    //         </>
    //     ),
    // },
];

const ArticlePage = () => {
    const { id } = useParams();
    const article = articles.find((a) => a.id === parseInt(id));

    if (!article) {
        return <div className="text-center text-red-500">Article not found.</div>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-purple-600 mb-4">{article.title}</h1>
            <div className="text-lg text-gray-800">
                {article.content}
            </div>
        </div>
    );
};

export default ArticlePage;



// // src/components/ArticlePage.jsx

// import React from 'react';
// import { useParams } from 'react-router-dom';

// // Sample articles data
// const articles = [
//     {
//         id: 1,
//         title: 'The "Remember Me" Project',
//         content: (
//             <>
//                 <img src="https://via.placeholder.com/600x300" alt="Related visual" className="mt-4 w-full h-auto rounded-lg shadow-md" />
//                 <p className="mt-4">"Remember Me" is a transformative initiative by the We Are The World organization, aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. This initiative will be documented and aired as a live TV show to raise awareness and garner public support. The project will be replicated in 160 districts across Zambia with a budget of K30,000,000.00 per district..</p>
//                 <h2 className="text-2xl font-semibold mt-6">Project Duration</h2>
//                 <p>• Initial intake: 6 months</p>
//                 <p>• New intake: Every 6 months</p>
//                 <h2 className="text-2xl font-semibold mt-6">Key Objectives</h2>
//                 <p>1. Provide emergency shelter and basic necessities to 100 homeless street persons per intake.</p>
//                 <p>2. Deliver healthcare, including mental health services and substance abuse treatment.</p>
//                 <p>3. Facilitate vocational training and employment support</p>
//                 <p>4. Integrate rehabilitated individuals back into society.</p>
//                 <p>5. Raise awareness and public support through a live TV show.</p>
//                 <h2 className="text-2xl font-semibold mt-6">Project Components</h2>
//                 <h2 className="text-1xl font-semibold mt-6">1. Emergency Shelter and Immediate Care</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Duration: First 2 Weeks</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Activities</h2>
//                 <p>- Intake and assessment: Register participants, conduct initial assessments, and develop individual care plans.</p>
//                 <p>- Immediate needs fulfillment: Provide safe shelter, nutritious meals, clothing, and hygiene products.</p>
//                 <p>- Medical and psychological care: Conduct health screenings, provide medical treatments, and initiate counseling</p>

//                 <h2 className="text-1xl font-semibold mt-6">2. Transitional Support and Skills Development</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Duration: 3.5 months</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Activities</h2>
//                 <p>- Housing stability: Transition participants to stable, semi-private accommodations within the shelter.</p>
//                 <p>- Life skills training: Workshops on daily living skills, conflict resolution, and interpersonal skills..</p>
//                 <p>- Employment support: Vocational training, job search assistance, and partnerships with local businesses for job placement</p>
//                 <p>- Legal and financial assistance: Provide legal support and financial literacy training.</p>

//                 <h2 className="text-1xl font-semibold mt-6">3. Health and Wellness</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Duration: Continuous throughout the 6 months</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Activities</h2>
//                 <p>- Medical care: Regular health check-ups and ongoing medical treatment</p>
//                 <p>- Substance abuse treatment: Comprehensive programs, including detoxification and rehabilitation.</p>
               
//                 <h2 className="text-1xl font-semibold mt-6">4. Community Integration and Social Support</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Duration: Last 1.5 months</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Activities</h2>
//                 <p>- Community engagement: Organize events to foster social connections and a sense of belonging.</p>
//                 <p>- Family reunification: Support efforts to reconnect with supportive family members and provide counseling</p>
//                 <p>- Mentorship program: Pair participants with mentors for guidance and support.</p>

//                 <h2 className="text-1xl font-semibold mt-6">5.	Transition to Independence</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Duration: Last 2 Weeks</h2>
//                 <h2 className="text-1xl font-semibold mt-2">Activities</h2>
//                 <p>- Housing support: Assist with securing permanent, affordable housing and provide rental assistance</p>
//                 <p>- Ongoing case management: Ensure access to support services post-shelter and monitor progress</p>

//                 <h2 className="text-2xl font-semibold mt-6">Implementation Plan</h2>
//                 <p>1. Partnerships: Collaborate with local government, non-profit organizations, healthcare providers, businesses, and community groups.</p>
//                 <p>2. Funding: Secure funding through grants, donations, and government support.</p>
//                 <p>3. Staffing: Hire qualified staff, including case managers, healthcare professionals, counselors, and vocational trainers. Provide training to ensure high-quality care.</p>
//                 <p>4. Monitoring and Evaluation: Regularly assess program effectiveness through participant feedback and performance metrics. Adjust strategies based on evaluation outcomes.</p>
//                 <p>5. Sustainability: Develop long-term plans, including community involvement and continuous fundraising efforts. Advocate for policy changes to address homelessness at a systemic level</p>

//                 <h2 className="text-2xl font-semibold mt-6">Expected Outcomes</h2>
//                 <p>• Immediate relief: Essential shelter, food, and medical care.</p>
//                 <p>• Skills and employment: Life and vocational skills leading to employment opportunities.</p>
//                 <p>• Health and well-being: Improved physical and mental health..</p>
//                 <p>• Social integration: Building social connections and a support networks</p>
//                 <p>• Permanent housing: Secure long-term stability</p>
//                 <p>• Reduced homelessness: Contribute to reducing homelessness and promoting social cohesion.</p> <br />
//                 <span>By implementing the "Remember Me" project, the goal is to transform the lives of homeless street persons, empowering them to become self-sufficient and valued members of society.</span>
              

                
//             </>
//         ),
//     },
//     {
//         id: 2,
//         title: 'RADIO PROGRAM',
//         content: (
//             <>
//                 <img src="https://via.placeholder.com/600x300" alt="Related visual" className="mt-4 w-full h-auto rounded-lg shadow-md" />
//                 <p className="mt-4">Join us for our upcoming Radio programs aimed at empowering through knowledge and skills.'</p>
//                 {/* <h2 className="text-2xl font-semibold mt-6">Subheading 1</h2>
//                 <p>This paragraph provides more details about the first subheading. It's important to keep the reader engaged.</p>
//                 <h2 className="text-2xl font-semibold mt-6">Subheading 2</h2>
//                 <p>This is another paragraph under the second subheading. You can discuss additional points that support your main content.</p> */}
//             </>
//         ),
//     },
//     {
//         id: 3,
//         title: 'Blog Post Title 3',
//         content: (
//             <>
//                 <img src="https://via.placeholder.com/600x300" alt="Related visual" className="mt-4 w-full h-auto rounded-lg shadow-md" />
//                 <p className="mt-4">This is the full content of Blog Post Title 3. Here you can elaborate on the details of the post.</p>
//                 <h2 className="text-2xl font-semibold mt-6">Subheading 1</h2>
//                 <p>This paragraph provides more details about the first subheading. It's important to keep the reader engaged.</p>
//                 <h2 className="text-2xl font-semibold mt-6">Subheading 2</h2>
//                 <p>This is another paragraph under the second subheading. You can discuss additional points that support your main content.</p>
//             </>
//         ),
//     },
// ];

// const ArticlePage = () => {
//     const { id } = useParams();
//     const article = articles.find((a) => a.id === parseInt(id));

//     if (!article) {
//         return <div className="text-center text-red-500">Article not found.</div>;
//     }

//     return (
//         <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//             <h1 className="text-4xl font-bold text-purple-600 mb-4">{article.title}</h1>
//             <div className="text-lg text-gray-800">
//                 {article.content}
//             </div>
//         </div>
//     );
// };

// export default ArticlePage;
