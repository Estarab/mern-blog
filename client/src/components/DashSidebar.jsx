import { Sidebar } from 'flowbite-react';
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from 'react-icons/hi';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { FaWhatsapp } from 'react-icons/fa';

export default function DashSidebar() {
  const location = useLocation();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
          {currentUser && currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item
                active={tab === 'dash' || !tab}
                icon={HiChartPie}
                as='div'
              >
                Dashboard
              </Sidebar.Item>
            </Link>
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item
              active={tab === 'profile'}
              icon={HiUser}
              label={currentUser.isAdmin ? 'Stakeholder' : 'Stakeholder not yet approved'}
              labelColor='dark'
              as='div'
            >
              Profile
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item
                active={tab === 'posts'}
                icon={HiDocumentText}
                as='div'
              >
                Posts
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <>
              <Link to='/dashboard?tab=users'>
                <Sidebar.Item
                  active={tab === 'users'}
                  icon={HiOutlineUserGroup}
                  as='div'
                >
                  Stakeholders
                </Sidebar.Item>
              </Link>
              <Link to='/dashboard?tab=comments'>
                <Sidebar.Item
                  active={tab === 'comments'}
                  icon={HiAnnotation}
                  as='div'
                >
                  Comments
                </Sidebar.Item>
              </Link>

              <Sidebar.Item
                onClick={() => window.open('https://chat.whatsapp.com/GSEN9bea8uqIXeGQ2vQyWw', '_blank')}
                className="flex items-center text-green-500 underline gap-2 hover:bg-gray-200 cursor-pointer dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105"
              >
                {/* <FaWhatsapp className="text-green-500 animate-pulse " /> */}
                Join WhatsApp Group
              </Sidebar.Item>
            </>
          )}
          <Sidebar.Item
            icon={HiArrowSmRight}
            className='cursor-pointer'
            onClick={handleSignout}
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}


// import { Sidebar } from 'flowbite-react';
// import {
//   HiUser,
//   HiArrowSmRight,
//   HiDocumentText,
//   HiOutlineUserGroup,
//   HiAnnotation,
//   HiChartPie,
// } from 'react-icons/hi';
// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

// export default function DashSidebar() {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const [tab, setTab] = useState('');
//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const tabFromUrl = urlParams.get('tab');
//     if (tabFromUrl) {
//       setTab(tabFromUrl);
//     }
//   }, [location.search]);
//   const handleSignout = async () => {
//     try {
//       const res = await fetch('/api/user/signout', {
//         method: 'POST',
//       });
//       const data = await res.json();
//       if (!res.ok) {
//         console.log(data.message);
//       } else {
//         dispatch(signoutSuccess());
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   return (
//     <Sidebar className='w-full md:w-56'>
//       <Sidebar.Items>
//         <Sidebar.ItemGroup className='flex flex-col gap-1'>
//           {currentUser && currentUser.isAdmin && (
//             <Link to='/dashboard?tab=dash'>
//               <Sidebar.Item
//                 active={tab === 'dash' || !tab}
//                 icon={HiChartPie}
//                 as='div'
//               >
//                 Dashboard
//               </Sidebar.Item>
//             </Link>
//           )}
//           <Link to='/dashboard?tab=profile'>
//             <Sidebar.Item
//               active={tab === 'profile'}
//               icon={HiUser}
//               label={currentUser.isAdmin ? 'Admin' : 'User'}
//               labelColor='dark'
//               as='div'
//             >
//               Profile
//             </Sidebar.Item>
//           </Link>
//           {currentUser.isAdmin && (
//             <Link to='/dashboard?tab=posts'>
//               <Sidebar.Item
//                 active={tab === 'posts'}
//                 icon={HiDocumentText}
//                 as='div'
//               >
//                 Posts
//               </Sidebar.Item>
//             </Link>
//           )}
//           {currentUser.isAdmin && (
//             <>
//               <Link to='/dashboard?tab=users'>
//                 <Sidebar.Item
//                   active={tab === 'users'}
//                   icon={HiOutlineUserGroup}
//                   as='div'
//                 >
//                   Users
//                 </Sidebar.Item>
//               </Link>
//               <Link to='/dashboard?tab=comments'>
//                 <Sidebar.Item
//                   active={tab === 'comments'}
//                   icon={HiAnnotation}
//                   as='div'
//                 >
//                   Comments
//                 </Sidebar.Item>
//               </Link>
//             </>
//           )}
//           <Sidebar.Item
//             icon={HiArrowSmRight}
//             className='cursor-pointer'
//             onClick={handleSignout}
//           >
//             Sign Out
//           </Sidebar.Item>
//         </Sidebar.ItemGroup>
//       </Sidebar.Items>
//     </Sidebar>
//   );
// }