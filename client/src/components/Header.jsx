import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';
import logo from '../assets/meet-our-team/logo.jpeg'; 

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
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
  
    
     <div className='flex justify-evenly bg-teal-500'>
    <Navbar className='border-b-2 shadow-lg bg-white dark:bg-gray-800 flex flex-wrap justify-between items-center px-4 py-2'>
      
      
      <div className='flex items-center w-full justify-between lg:w-auto'>
        {/* Logo */}
        <Link to='/'>
          <img
             src={logo}
             alt='Logo'
             className='h-auto max-h-16 w-auto rounded-md shadow-lg transition-transform transform hover:scale-105' // Maintained original size
           />
         </Link>

        {/* Gap between Logo and Search */}
        <div className='mx-2' />

        {/* Mobile Header Items */}
        <form onSubmit={handleSubmit} className='flex items-center w-full max-w-xs'>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-20 sm:w-24 rounded-md dark:text-white dark:bg-gray-700' // Adjusted width for mobile
          />
        </form>

        <div className='flex items-center gap-4 ml-2'>
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt='user' img={currentUser.profilePicture} rounded className='h-10 w-10' />
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
            <Link to='/stakeholder-info'>
              <Button gradientDuoTone='purpleToBlue' outline  className='text-sm px-1 py-1'>
               Sign_in
              </Button>
            </Link>
          )}
 
          <Navbar.Toggle />
        </div>
      </div>

      <Navbar.Collapse className='mt-2 lg:mt-0 w-full'>
        {['/',  '/about', '/programs', '/get-involved', '/our-leadership', '/summit circle for change', '/stake-holders', '/blog',  '/contact-us', '/donate'].map((link, index) => (
          <Navbar.Link
            key={index}
            active={path === link}
            as={'div'}
            className=' w-full hover:text-gray-900 dark:hover:text-white transition-all transform hover:scale-105'
          >
            <Link to={link} className='block w-full text-center py-2'>
              {link.charAt(1).toUpperCase() + link.slice(2).replace('-', ' ')}
            </Link>
            
          </Navbar.Link>
          
        ))}
    
    
      </Navbar.Collapse>
    

    </Navbar>
    </div>
  );
  
}