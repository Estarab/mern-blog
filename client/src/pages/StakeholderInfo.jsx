import React from 'react';
import { Link } from 'react-router-dom';

const StakeholderInfo = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-2xl transform transition-transform duration-300 hover:-translate-y-2">

      
      <div className='flex gap-2 text-sm mt-1 justify-center'>
            <span>Already a stakeholder?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-1 mt-4">Sign Up to become a Stakeholder</h2>
        

        


        <p className="text-gray-700 mb-4 mt-6">
        As we prepare to launch the The project Remember Me, we invite your individuals, and organization, businesses to join us as stakeholders. Your partnership will help us:
        </p>
        
                <p>• Provide shelter and care for 100 homeless individuals per intake..</p>
                <p>• Raise awareness across Zambia about the solutions to homelessness.</p>
                <p>• Create sustainable, long-term change in the lives of Zambia's most vulnerable.</p>
               
        <h2 className="text-2xl font-semibold mt-6">Stakeholder Benefits</h2>
        <p className="text-gray-700 mb-4">
        By becoming a stakeholder, your organization will receive:
        </p>
                <p>• Visibility and Promotion: Recognition through media outreach, including on our live TV show and social platforms.</p>
                <p>• Networking Opportunities: Access to a network of businesses and organizations dedicated to social causes.</p>
                <p>• CSR Enhancement: Demonstrate your commitment to making a tangible societal impact.</p>
                <p>• Priority Access: Preferential consideration for contracts and procurement within the project.</p>
                <p>• Partnership Impact: Align your brand with values of compassion, community empowerment, and social responsibility.</p>
        
                <h2 className="text-2xl font-semibold mt-6">Fundraising Campaign and How You Can Help</h2>
                <p className="text-gray-700 mb-4">
                Our campaign, running from August to December 2024, aims to raise K30,000,000.00 per month to fund the project. We are mobilizing 1,000,000 partners, each contributing just K1 per day (K30 per month). As a stakeholder, your organization can sponsor the campaign and help raise awareness within your networks.
                </p>
        
        <h2 className="text-2xl font-semibold mt-6">Ways to Get Involved:</h2>
                <p>1. Sponsor the campaign with a monthly contribution of K1,000 for five month and individuals and a K10,000 once off for organisation/businesses</p>
                <p>2. Mobilize your networks to join the 1,000,000 partners.</p>
                <p>3. Participate in our community outreach events.</p>
                <p>4. Promote the campaign on social media and within your community.</p>
        
        <h3 className="text-1xl font-semibold mt-6">Together, we can transform lives and offer the homeless a chance for a better future. </h3>



        <Link to="/sign-up">
          <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 transition-colors duration-300">
            Sign Up Now
          </button>
        </Link>
        <div className='flex gap-2 text-sm mt-5'>
            <span>Already a stakeholder?</span>
            <Link to='/sign-in' className='text-blue-500'>
              Sign In
            </Link>
          </div>
      </div>
    </div>
  );
};

export default StakeholderInfo;
