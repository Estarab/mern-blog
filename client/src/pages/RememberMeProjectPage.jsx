// RememberMeProjectPage.jsx
import React from 'react';
import homelessImage from '../assets/remember me/img111.jpg';
import projectDurationImage from '../assets/remember me/img22.jpg';
import keyObjectivesImage from '../assets/remember me/img33.jpg';
import projectComponentsImage from '../assets/remember me/img44.jpg';
import implementationPlanImage from '../assets/remember me/img555.jpg';
import outcomesImage from '../assets/remember me/photorealistic-kid-refugee-camp.jpg';

const RememberMeProjectPage = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 transition-transform transform hover:scale-105 mb-2">
          Remember Me: A Transformative Initiative
        </h1>
        <p className="text-xl text-gray-600">Empowering homeless individuals through support and integration.</p>
      </header>

      {[
        {
          title: "Remember Me",
          content: (
            <p>
              "Remember Me" is a transformative initiative by the We Are The World organization, aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. This initiative will be documented and aired as a live TV show to raise awareness and garner public support. The project will be replicated in 160 districts across Zambia with a budget of K30,000,000.00 per district.
            </p>
          ),
          image: homelessImage,
        },
        {
          title: "Project Duration",
          content: (
            <ul className="list-disc list-inside">
              <li>Initial intake: 6 months</li>
              <li>New intake: Every 6 months</li>
            </ul>
          ),
          image: projectDurationImage,
        },
        {
          title: "Key Objectives",
          content: (
            <ul className="list-disc list-inside">
              <li>Provide emergency shelter and basic necessities to 100 homeless street persons per intake.</li>
              <li>Deliver healthcare, including mental health services and substance abuse treatment.</li>
              <li>Facilitate vocational training and employment support.</li>
              <li>Integrate rehabilitated individuals back into society.</li>
              <li>Raise awareness and public support through a live TV show.</li>
            </ul>
          ),
          image: keyObjectivesImage,
        },
        {
          title: "Project Components",
          content: (
            <div>
              {[
                {
                  title: "1. Emergency Shelter and Immediate Care",
                  duration: "Duration: First 2 Weeks",
                  activities: [
                    "Intake and assessment: Register participants, conduct initial assessments, and develop individual care plans.",
                    "Immediate needs fulfillment: Provide safe shelter, nutritious meals, clothing, and hygiene products.",
                    "Medical and psychological care: Conduct health screenings, provide medical treatments, and initiate counseling."
                  ],
                },
                {
                  title: "2. Transitional Support and Skills Development",
                  duration: "Duration: 3.5 months",
                  activities: [
                    "Housing stability: Transition participants to stable, semi-private accommodations within the shelter.",
                    "Life skills training: Workshops on daily living skills, conflict resolution, and interpersonal skills.",
                    "Employment support: Vocational training, job search assistance, and partnerships with local businesses for job placement.",
                    "Legal and financial assistance: Provide legal support and financial literacy training."
                  ],
                },
                {
                  title: "3. Health and Wellness",
                  duration: "Duration: Continuous throughout the 6 months",
                  activities: [
                    "Medical care: Regular health check-ups and ongoing medical treatment.",
                    "Substance abuse treatment: Comprehensive programs, including detoxification and rehabilitation."
                  ],
                },
                {
                  title: "4. Community Integration and Social Support",
                  duration: "Duration: Last 1.5 months",
                  activities: [
                    "Community engagement: Organize events to foster social connections and a sense of belonging.",
                    "Family reunification: Support efforts to reconnect with supportive family members and provide counseling.",
                    "Mentorship program: Pair participants with mentors for guidance and support."
                  ],
                },
                {
                  title: "5. Transition to Independence",
                  duration: "Duration: Last 2 Weeks",
                  activities: [
                    "Housing support: Assist with securing permanent, affordable housing and provide rental assistance.",
                    "Ongoing case management: Ensure access to support services post-shelter and monitor progress."
                  ],
                },
              ].map((component, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-2xl font-semibold mb-2">{component.title}</h3>
                  <p>{component.duration}</p>
                  <ul className="list-disc list-inside mb-4">
                    {component.activities.map((activity, idx) => (
                      <li key={idx}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ),
          image: projectComponentsImage,
        },
        {
          title: "Implementation Plan",
          content: (
            <ul className="list-disc list-inside mb-4">
              <li>Partnerships: Collaborate with local government, non-profit organizations, healthcare providers, businesses, and community groups.</li>
              <li>Funding: Secure funding through grants, donations, and government support.</li>
              <li>Staffing: Hire qualified staff, including case managers, healthcare professionals, counselors, and vocational trainers. Provide training to ensure high-quality care.</li>
              <li>Monitoring and Evaluation: Regularly assess program effectiveness through participant feedback and performance metrics. Adjust strategies based on evaluation outcomes.</li>
              <li>Sustainability: Develop long-term plans, including community involvement and continuous fundraising efforts. Advocate for policy changes to address homelessness at a systemic level.</li>
            </ul>
          ),
          image: implementationPlanImage,
        },
        {
          title: "Expected Outcomes",
          content: (
            <ul className="list-disc list-inside mb-4">
              <li>Immediate relief: Essential shelter, food, and medical care.</li>
              <li>Skills and employment: Life and vocational skills leading to employment opportunities.</li>
              <li>Health and well-being: Improved physical and mental health.</li>
              <li>Social integration: Building social connections and support networks.</li>
              <li>Permanency: Secure long-term stability.</li>
              <li>Reduced homelessness: Contribute to reducing homelessness and promoting social cohesion.</li>
            </ul>
          ),
          image: outcomesImage,
        },
      ].map((section, index) => (
        <section
          key={index}
          className="relative bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
          style={{ backgroundImage: `url(${section.image})` }}
        >
          <div className="absolute inset-0 bg-black opacity-55 rounded-lg"></div> {/* Overlay */}
          <div className="relative z-10"> {/* Ensure text is above the overlay */}
            <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">{section.title}</h2>
            {section.content}
          </div>
        </section>
      ))}

      <footer className="text-center mt-8">
        <p className="text-lg font-semibold">Transforming Lives Through Empowerment</p>
        <p className="text-gray-600">By implementing the "Remember Me" project, the goal is to transform the lives of homeless street persons, empowering them to become self-sufficient and valued members of society.</p>
      </footer>
    </div>
  );
};

export default RememberMeProjectPage;




// // RememberMeProjectPage.jsx
// import React from 'react';
// import homelessImage from '../assets/remember me/img1.jpg';
// import projectDurationImage from '../assets/remember me/img2.jpg';
// import keyObjectivesImage from '../assets/remember me/img3.jpg';
// import projectComponentsImage from '../assets/remember me/img4.jpg';
// import implementationPlanImage from '../assets/remember me/img5.jpg';
// import outcomesImage from '../assets/remember me/photorealistic-kid-refugee-camp.jpg';

// const RememberMeProjectPage = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <header className="text-center mb-8">
//         <h1 className="text-5xl font-bold text-gray-800 transition-transform transform hover:scale-105 mb-2">
//           Remember Me: A Transformative Initiative
//         </h1>
//         <p className="text-xl text-gray-600">Empowering homeless individuals through support and integration.</p>
//       </header>

//       <section
//         style={{ backgroundImage: `url(${homelessImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Introduction</h2>
//         <p className="text-gray-300">
//           "Remember Me" is a transformative initiative by the We Are The World organization, aimed at rehabilitating homeless street persons by providing comprehensive support through emergency shelter, healthcare, vocational training, and integration into society as productive, contributing citizens. This initiative will be documented and aired as a live TV show to raise awareness and garner public support. The project will be replicated in 160 districts across Zambia with a budget of K30,000,000.00 per district.
//         </p>
//       </section>

//       <section
//         style={{ backgroundImage: `url(${projectDurationImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Project Duration</h2>
//         <ul className="list-disc list-inside">
//           <li>Initial intake: 6 months</li>
//           <li>New intake: Every 6 months</li>
//         </ul>
//       </section>

//       <section
//         style={{ backgroundImage: `url(${keyObjectivesImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Key Objectives</h2>
//         <ul className="list-disc list-inside">
//           <li>Provide emergency shelter and basic necessities to 100 homeless street persons per intake.</li>
//           <li>Deliver healthcare, including mental health services and substance abuse treatment.</li>
//           <li>Facilitate vocational training and employment support.</li>
//           <li>Integrate rehabilitated individuals back into society.</li>
//           <li>Raise awareness and public support through a live TV show.</li>
//         </ul>
//       </section>

//       <section
//         style={{ backgroundImage: `url(${projectComponentsImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Project Components</h2>
//         {[
//           {
//             title: "1. Emergency Shelter and Immediate Care",
//             duration: "Duration: First 2 Weeks",
//             activities: [
//               "Intake and assessment: Register participants, conduct initial assessments, and develop individual care plans.",
//               "Immediate needs fulfillment: Provide safe shelter, nutritious meals, clothing, and hygiene products.",
//               "Medical and psychological care: Conduct health screenings, provide medical treatments, and initiate counseling."
//             ]
//           },
//           {
//             title: "2. Transitional Support and Skills Development",
//             duration: "Duration: 3.5 months",
//             activities: [
//               "Housing stability: Transition participants to stable, semi-private accommodations within the shelter.",
//               "Life skills training: Workshops on daily living skills, conflict resolution, and interpersonal skills.",
//               "Employment support: Vocational training, job search assistance, and partnerships with local businesses for job placement.",
//               "Legal and financial assistance: Provide legal support and financial literacy training."
//             ]
//           },
//           {
//             title: "3. Health and Wellness",
//             duration: "Duration: Continuous throughout the 6 months",
//             activities: [
//               "Medical care: Regular health check-ups and ongoing medical treatment.",
//               "Substance abuse treatment: Comprehensive programs, including detoxification and rehabilitation."
//             ]
//           },
//           {
//             title: "4. Community Integration and Social Support",
//             duration: "Duration: Last 1.5 months",
//             activities: [
//               "Community engagement: Organize events to foster social connections and a sense of belonging.",
//               "Family reunification: Support efforts to reconnect with supportive family members and provide counseling.",
//               "Mentorship program: Pair participants with mentors for guidance and support."
//             ]
//           },
//           {
//             title: "5. Transition to Independence",
//             duration: "Duration: Last 2 Weeks",
//             activities: [
//               "Housing support: Assist with securing permanent, affordable housing and provide rental assistance.",
//               "Ongoing case management: Ensure access to support services post-shelter and monitor progress."
//             ]
//           },
//         ].map((component, index) => (
//           <div key={index} className="mb-4">
//             <h3 className="text-2xl font-semibold mb-2">{component.title}</h3>
//             <p>{component.duration}</p>
//             <ul className="list-disc list-inside mb-4">
//               {component.activities.map((activity, idx) => (
//                 <li key={idx}>{activity}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </section>

//       <section
//         style={{ backgroundImage: `url(${implementationPlanImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Implementation Plan</h2>
//         <ul className="list-disc list-inside mb-4">
//           <li>Partnerships: Collaborate with local government, non-profit organizations, healthcare providers, businesses, and community groups.</li>
//           <li>Funding: Secure funding through grants, donations, and government support.</li>
//           <li>Staffing: Hire qualified staff, including case managers, healthcare professionals, counselors, and vocational trainers. Provide training to ensure high-quality care.</li>
//           <li>Monitoring and Evaluation: Regularly assess program effectiveness through participant feedback and performance metrics. Adjust strategies based on evaluation outcomes.</li>
//           <li>Sustainability: Develop long-term plans, including community involvement and continuous fundraising efforts. Advocate for policy changes to address homelessness at a systemic level.</li>
//         </ul>
//       </section>

//       <section
//         style={{ backgroundImage: `url(${outcomesImage})` }}
//         className="bg-cover bg-center text-white p-8 rounded-lg shadow-lg mb-8"
//       >
//         <h2 className="text-4xl font-semibold border-b-2 border-gray-300 mb-4">Expected Outcomes</h2>
//         <ul className="list-disc list-inside mb-4">
//           <li>Immediate relief: Essential shelter, food, and medical care.</li>
//           <li>Skills and employment: Life and vocational skills leading to employment opportunities.</li>
//           <li>Health and well-being: Improved physical and mental health.</li>
//           <li>Social integration: Building social connections and support networks.</li>
//           <li>Permanency: Secure long-term stability.</li>
//           <li>Reduced homelessness: Contribute to reducing homelessness and promoting social cohesion.</li>
//         </ul>
//       </section>

//       <footer className="text-center mt-8">
//         <p className="text-lg font-semibold">Transforming Lives Through Empowerment</p>
//         <p className="text-gray-600">By implementing the "Remember Me" project, the goal is to transform the lives of homeless street persons, empowering them to become self-sufficient and valued members of society.</p>
//       </footer>
//     </div>
//   );
// };

// export default RememberMeProjectPage;
