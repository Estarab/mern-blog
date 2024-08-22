import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import logo from '../assets/meet-our-team/logo.jpeg'; 

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2 shadow-lg bg-white dark:bg-gray-800'>
      {/* Logo */}
         <Link to='/'>
           <img
             src={logo}
             alt='Logo'
             className='h-10 w-auto mr-4 rounded-md shadow-lg transition-transform transform hover:scale-105'
           />
        </Link>

      <form onSubmit={handleSubmit} className=' lg:flex w-1/3'>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full rounded-md dark:text-white dark:bg-gray-700'
        />
      </form>

      <div className='flex items-center gap-4'>
        {/* <Button
          className='w-12 h-10 hidden sm:flex items-center justify-center'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button> */}

        {/* <Button
          className='w-12 h-10 sm:hidden flex items-center justify-center'
          color='gray'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <FaSun /> : <FaMoon />}
        </Button> */}

        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt='user' img={currentUser.profilePicture} rounded />
            }
            className='z-50'
          >
            <Dropdown.Header>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
                Profile
              </Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item
              onClick={handleSignout}
              className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className='mt-2'>
        <Navbar.Link
          active={path === '/'}
          as={'div'}
          className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
        >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/about'}
          as={'div'}
          className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
        >
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={path === '/blog'}
          as={'div'}
          className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
        >
          <Link to='/search'>Blog</Link>
        </Navbar.Link>

        <Dropdown
          label='View More Pages '
          inline
          className='bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all duration-200 ease-in-out z-50'
        >
          <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
            <Link to='/programs'>Programs</Link>
          </Dropdown.Item>
          <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
            <Link to='/get-involved'>Get Involved</Link>
          </Dropdown.Item>
          <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
            <Link to='/stake-holders'>Our Team</Link>
          </Dropdown.Item>
          <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
            <Link to='/contact-us'>Contact Us</Link>
          </Dropdown.Item>
        </Dropdown>

        <Link to='/donate'>
          <Button
            className=' mt-4 ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
          >
            Donate
          </Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}


// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useEffect, useState } from 'react';
// import logo from '../assets/stakeholders/partner1.jpg';  // Import the logo from the assets folder

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className=' border-b-2 shadow-lg bg-white dark:bg-gray-800'>
//       <div className='flex items-center'>
//         {/* Logo */}
//         <Link to='/'>
//           <img
//             src={logo}
//             alt='Logo'
//             className='h-10 w-auto mr-4 rounded-md shadow-lg transition-transform transform hover:scale-105'
//           />
//         </Link>
//       </div>

//       <form onSubmit={handleSubmit} className=' lg:flex w-1/4'>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className='w-full rounded-md dark:text-white dark:bg-gray-700'
//         />
//       </form>

//       <div className='flex items-center gap-4 ml-auto'>
//         <Button
//           className='w-10 h-10 flex items-center justify-center'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>

//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='user' img={currentUser.profilePicture} rounded />
//             }
//             className='z-50'
//           >
//             <Dropdown.Header>
//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//                 Profile
//               </Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item
//               onClick={handleSignout}
//               className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//             >
//               Sign out
//             </Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//         )}

//         <Navbar.Toggle />
//       </div>

//       <Navbar.Collapse className='flex items-center justify-center w-auto'>
//         <Navbar.Link
//           active={path === '/'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/about'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/blog'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/blog'>Blog</Link>
//         </Navbar.Link>

//         <Dropdown
//           label='More'
//           inline
//           className='bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all duration-200 ease-in-out z-50 ml-4'
//         >
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/programs'>Programs</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/get-involved'>Get Involved</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/stake-holders'>Stakeholders</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/contact-us'>Contact Us</Link>
//           </Dropdown.Item>
//         </Dropdown>

//         <Link to='/donate'>
//           <Button
//             className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110 hidden lg:block'
//           >
//             Donate
//           </Button>
//         </Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }



// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useEffect, useState } from 'react';

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className='border-b-2'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
//       >
//         <span className='px-2 py-1 bg-gradient-to-r from-teal-500 via-teal-500 to-pink-500 rounded-lg text-white'>World Zambia</span>
        
//       </Link>
//       <form onSubmit={handleSubmit}>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           className='hidden lg:inline'
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>
//       <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </Button>
//       <div className='flex gap-2 md:order-2'>
//         <Button
//           className='w-12 h-10 hidden sm:inline'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>
//         {currentUser ? (
//           <Dropdown className='absolute z-50'
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='user' img={currentUser.profilePicture} rounded />
//             }
//           >
//             <Dropdown.Header>
//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item>Profile</Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item onClick={handleSignout}>Sign out</Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//         )}
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//          <Navbar.Link active={path === '/'} as={'div'}>
//            <Link to='/'>Home</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/about'} as={'div'}>
//            <Link to='/about'>About</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/programs'} as={'div'}>
//            <Link to='/search'>Programs</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/get-involved'} as={'div'}>
//            <Link to='/get-involved'>Get Involved</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/stake-holders'} as={'div'}>
//            <Link to='/stake-holders'>StakeHolders</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/blog'} as={'div'}>
//            <Link to='/search'>Blog</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/contact-us'} as={'div'}>
//            <Link to='/contact-us'>Contact Us</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/donate'} as={'div'}>
//          <button
        
//         className="bg-purple-800 text-white p-2 m-2 rounded hover:bg-gradient-to-r from-purple-500 to-pink-500 transition ease-in-out duration-500"
//       >
//         <Link to='/donate'>Donate</Link>
//       </button>
//          </Navbar.Link>
//          {/* <Navbar.Link active={path === '/projects'} as={'div'}>
//            <Link to='/projects'>Projects</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/projects'} as={'div'}>
//            <Link to='/projects'>Projects</Link>
//          </Navbar.Link>
//          <Navbar.Link active={path === '/projects'} as={'div'}>
//            <Link to='/projects'>Projects</Link>
//          </Navbar.Link> */}
//        </Navbar.Collapse>
     
//      </Navbar>
//    );
//  }







// import { Button, Navbar, TextInput } from "flowbite-react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
//  import { toggleTheme } from '../redux/theme/themeSlice';
//  import { signoutSuccess } from '../redux/user/userSlice';
//  import { useEffect, useState } from 'react';


// export default function Header() {
//     const path = useLocation().pathname;
//   return (
//     <Navbar className='border-b-2'>
//       <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
//       <span className='px-2 py-1 bg-gradient-to-r from-teal-500 via-teal-500 to-pink-500 rounded-lg text-white'>We Are The World Zambia</span>
//       </Link>
//       <form /*onSubmit={handleSubmit}*/>
//         <TextInput 
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           className=' hidden lg:inline' 
//         //   value={searchTerm}
//         //   onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>

      

//        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </Button>

//       <div className='flex gap-2 md:order-2'>
//         <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
//             <FaMoon />
//         </Button>
//         <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//           <Navbar.Toggle />
//       </div>

//       <Navbar.Collapse>
//         <Navbar.Link active={path === '/'} as={'div'}>
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/about'} as={'div'}>
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/programs'} as={'div'}>
//           <Link to='/programs'>Programs</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/get-involved'} as={'div'}>
//           <Link to='/get-involved'>Get Involved</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/stack-holders'} as={'div'}>
//           <Link to='/stackholders'>Stack Holders</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/blog'} as={'div'}>
//           <Link to='/blog'>Blog</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/contact-us'} as={'div'}>
//           <Link to='/contact-us'>Contact Us</Link>
//         </Navbar.Link>
//         {/* <Navbar.Link active={path === '/projects'} as={'div'}>
//           <Link to='/projects'>Projects</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/projects'} as={'div'}>
//           <Link to='/projects'>Projects</Link>
//         </Navbar.Link>
//         <Navbar.Link active={path === '/projects'} as={'div'}>
//           <Link to='/projects'>Projects</Link>
//         </Navbar.Link> */}
//       </Navbar.Collapse>
      
//     </Navbar>
//   );
// }

// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useEffect, useState } from 'react';
// import logo from '../assets/stakeholders/partner1.jpg';

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className='border-b-2 shadow-lg bg-white dark:bg-gray-800'>
//       <div className='flex items-center'>
//         {/* Logo */}
//          <Link to='/'>
//            <img
//              src={logo}
//              alt='Logo'
//              className='h-10 w-auto mr-4 rounded-md shadow-lg transition-transform transform hover:scale-105'
//            />
//          </Link>
//        </div>
//       <form onSubmit={handleSubmit} className='hidden lg:flex w-1/3'>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className='w-full rounded-md dark:text-white dark:bg-gray-700'
//         />
//       </form>

      

//       <Navbar.Collapse className='mt-2'>

//         <div className='flex gap-6 mt-2'> 
//         <Navbar.Link
//           active={path === '/'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//         >
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/about'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//         >
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/blog'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//         >
//           <Link to='/search'>Blog</Link>
//         </Navbar.Link>
//         </div>







// <div>
//         <Dropdown
//           label='More Pages'
//           inline
//           className='bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all duration-200 ease-in-out z-50'
//         >
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/programs'>Programs</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/get-involved'>Get Involved</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/stake-holders'>Stakeholders</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/contact-us'>Contact Us</Link>
//           </Dropdown.Item>
//         </Dropdown>
//         </div>


//         <div className='flex items-center gap-2'>
//         <Button
//           className='w-12 h-10 hidden sm:flex items-center justify-center'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>

//         <Button
//           className='w-12 h-10 sm:hidden flex items-center justify-center'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>

//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='user' img={currentUser.profilePicture} rounded />
//             }
//             className='z-50'
//           >
//             <Dropdown.Header>
//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//                 Profile
//               </Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item
//               onClick={handleSignout}
//               className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//             >
//               Sign out
//             </Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//         )}

//         <Navbar.Toggle />
//       </div>


//         <Link to='/donate'>
//           <Button
//             className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
//           >
//             Donate
//           </Button>
//         </Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }



// import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTheme } from '../redux/theme/themeSlice';
// import { signoutSuccess } from '../redux/user/userSlice';
// import { useEffect, useState } from 'react';
// import logo from '../assets/stakeholders/partner1.jpg';

// export default function Header() {
//   const path = useLocation().pathname;
//   const location = useLocation();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state) => state.user);
//   const { theme } = useSelector((state) => state.theme);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const searchTermFromUrl = urlParams.get('searchTerm');
//     if (searchTermFromUrl) {
//       setSearchTerm(searchTermFromUrl);
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const urlParams = new URLSearchParams(location.search);
//     urlParams.set('searchTerm', searchTerm);
//     const searchQuery = urlParams.toString();
//     navigate(`/search?${searchQuery}`);
//   };

//   return (
//     <Navbar className='border-b-2 shadow-lg bg-white dark:bg-gray-800'>
//       <div className='flex items-center'>
//         {/* Logo */}
//         <Link to='/'>
//           <img
//             src={logo}
//             alt='Logo'
//             className='h-10 w-auto mr-4 rounded-md shadow-lg transition-transform transform hover:scale-105'
//           />
//         </Link>
//       </div>

//       <form onSubmit={handleSubmit} className='flex w-1/4'>
//         <TextInput
//           type='text'
//           placeholder='Search...'
//           rightIcon={AiOutlineSearch}
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className='w-full rounded-md dark:text-white dark:bg-gray-700'
//         />
//       </form>

//       <div className='flex items-center gap-4 ml-auto'>
//         <Button
//           className='w-10 h-10 flex items-center justify-center'
//           color='gray'
//           pill
//           onClick={() => dispatch(toggleTheme())}
//         >
//           {theme === 'light' ? <FaSun /> : <FaMoon />}
//         </Button>

//         {currentUser ? (
//           <Dropdown
//             arrowIcon={false}
//             inline
//             label={
//               <Avatar alt='user' img={currentUser.profilePicture} rounded />
//             }
//             className='z-50'
//           >
//             <Dropdown.Header>
//               <span className='block text-sm'>@{currentUser.username}</span>
//               <span className='block text-sm font-medium truncate'>
//                 {currentUser.email}
//               </span>
//             </Dropdown.Header>
//             <Link to={'/dashboard?tab=profile'}>
//               <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//                 Profile
//               </Dropdown.Item>
//             </Link>
//             <Dropdown.Divider />
//             <Dropdown.Item
//               onClick={handleSignout}
//               className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
//             >
//               Sign out
//             </Dropdown.Item>
//           </Dropdown>
//         ) : (
//           <Link to='/sign-in'>
//             <Button gradientDuoTone='purpleToBlue' outline>
//               Sign In
//             </Button>
//           </Link>
//         )}

//         <Navbar.Toggle />
//       </div>

//       <Navbar.Collapse className='flex items-center justify-start w-auto space-x-4 ml-4'>
//         <Navbar.Link
//           active={path === '/'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/'>Home</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/about'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/about'>About</Link>
//         </Navbar.Link>
//         <Navbar.Link
//           active={path === '/blog'}
//           as={'div'}
//           className='hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105 px-3 py-2'
//         >
//           <Link to='/blog'>Blog</Link>
//         </Navbar.Link>

//         {/* Dropdown Menu - Hidden on Mobile */}
//         <Dropdown
//           label='More'
//           inline
//           className='hidden lg:block bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-all duration-200 ease-in-out z-50'
//         >
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/programs'>Programs</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/get-involved'>Get Involved</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/stake-holders'>Stakeholders</Link>
//           </Dropdown.Item>
//           <Dropdown.Item className='hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'>
//             <Link to='/contact-us'>Contact Us</Link>
//           </Dropdown.Item>
//         </Dropdown>

//         <Link to='/donate'>
//           <Button
//             className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110 hidden lg:block'
//           >
//             Donate
//           </Button>
//         </Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }
