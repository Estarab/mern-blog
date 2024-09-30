import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import BannerProduct from '../components/BannerProduct';
import OurPartners from '../components/OurPartners';
import AboutSection from '../components/AboutSection';
import BigDonateButton from '../components/BigDonateButton';
//import GetInvolved from '../components/GetInvolvedComp';
import GetInvolvedComp from '../components/GetInvolvedComp';
import MeetOurTeam from '../components/MeetOurTeam';
import ProgramsPage from '../components/ProgramCard';


export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='relative z-40'>
      <BannerProduct/>
      <div className='bg-gray-100'>
      <BigDonateButton/>
      </div>
      
      </div>
      
      
      
      <div className='flex flex-col gap-6 bg-gradient-to-r from-gray-100 to-gray-300  p-20 px-3 max-w-8xl mx-auto '>
     
        <h1 className='text-3xl font-bold lg:text-4xl text-center'>We Are The World Zambia</h1>
        
        <p className='text-gray-500 text-xs sm:text-sm text-center'>
        Empowering Communities, Changing Lives
        </p>
        <Link
          to='/about'
          className='text-xs sm:text-sm text-purple-500 font-bold hover:underline text-center'
        >
          CLICK HERE TO KNOW MORE ABOUT US
        </Link>
      </div>
      <AboutSection />
      <GetInvolvedComp/>
      <ProgramsPage/>
      <MeetOurTeam/>
       
      
      


      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}


      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>stakeholders and what they do</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
            {/* <OurPartners /> */}
          </div>
        )}
      </div>
    </div>
  );
}