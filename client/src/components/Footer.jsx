import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
//import { Footer } from 'flowbite-react';
 import { Link } from 'react-router-dom';
 import { Button } from 'flowbite-react';



const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Subscribe Section */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">Subscribe to our Newsletter</h2>
          <p className="mb-6">
            Stay updated with the latest news, products, and special offers.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-grow p-3 rounded-md text-gray-800 mb-4 sm:mb-0 sm:mr-4"
            />
           <Link to='/sign-in'>
          <Button
            className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
          >
            Subscribe
          </Button>
        </Link>
          </form>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Head Office:</strong>: The 3rd Floor, Design House, Cairo Road, Kang'ombe and Associates
          </p>
          <p className="mb-2">
            <strong>Email:</strong> wearetheworldzambia@gmail.com
          </p>
          <p className="mb-2">
            <strong>Office:</strong> +260955522564, +2609642628
          </p>
          <p className="mb-2">
            <strong>Mobile:</strong> +260776214959
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300 mr-4">
            <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300 mr-4">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition duration-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
            </li>
            <li className="mb-2">
              <a href="about" className="hover:text-blue-400 transition duration-300">About</a>
            </li>
            <li className="mb-2">
              <a href="/search" className="hover:text-blue-400 transition duration-300">Programs</a>
            </li>
            <li className="mb-2">
              <a href="/search" className="hover:text-blue-400 transition duration-300">Blog</a>
            </li>
            <li className="mb-2">
              <a href="stake-holders" className="hover:text-blue-400 transition duration-300">StakeHolders</a>
            </li>
            <li className="mb-2">
              <a href="/get-involved" className="hover:text-blue-400 transition duration-300">Get Involved</a>
            </li>
            <li className="mb-2">
              
            <Link to='/donate'>
          <Button
            className='ml-4 px-4 py-2 text-white font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l transition duration-300 ease-in-out transform hover:scale-110'
          >
            Donate
          </Button>
        </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center border-t border-gray-700 pt-8">
        <p>&copy; 2024 AB Nation Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;



// // import { Footer } from 'flowbite-react';
// // import { Link } from 'react-router-dom';
// // import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
// // export default function FooterCom() {
// //   return (
// //     <Footer container className='border border-t-8 border-teal-500'>
// //       <div className='w-full max-w-7xl mx-auto'>
// //         <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
// //           <div className='mt-5'>
// //           <Link to="/" className=' font-bold dark:text-white text-1xl'>
// //        <span className='px-2 py-1 bg-gradient-to-r from-teal-500 via-teal-500 to-pink-500 rounded-lg text-white'>World Zambia</span>
// //        </Link>
// //           </div>
// //           <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
// //             <div>
// //               <Footer.Title title='Contact INformation' />
// //               <Footer.LinkGroup col>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                    Head Office: The 3rd Floor, Design House, Cairo Road, 
// //                 </Footer.Link>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                   Kang'ombe and Associates P.O. Box 39428 Lusaka, Zambia
// //                 </Footer.Link>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                   Office: +260955522564, +2609642628
// //                 </Footer.Link>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                   Mobile: +260776214959
// //                 </Footer.Link>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                   Email: wearetheworldzambia@gmail.com
// //                 </Footer.Link>
// //               </Footer.LinkGroup>
// //             </div>
// //             <div>
// //               <Footer.Title title='Follow us' />
// //               <Footer.LinkGroup col>
// //                 <Footer.Link
// //                   href='#'
// //                   target='_blank'
// //                   rel='noopener noreferrer'
// //                 >
// //                   Facebook
// //                 </Footer.Link>
// //                 <Footer.Link href='#'>Instagram</Footer.Link>
// //               </Footer.LinkGroup>
// //             </div>
// //             <div>
// //               <Footer.Title title='Legal' />
// //               <Footer.LinkGroup col>
// //                 <Footer.Link href='#'>Privacy Policy</Footer.Link>
// //                 <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
// //               </Footer.LinkGroup>
// //             </div>
// //           </div>
// //         </div>
// //         <Footer.Divider />
// //         <div className='w-full sm:flex sm:items-center sm:justify-between'>
// //           <Footer.Copyright
// //             href='#'
// //             by="AB Nation Tech"
// //             year={new Date().getFullYear()}
// //           />
// //           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
// //             <Footer.Icon href='#' icon={BsFacebook}/>
// //             <Footer.Icon href='#' icon={BsInstagram}/>
// //             <Footer.Icon href='#' icon={BsTwitter}/>
// //             {/* <Footer.Icon href='https://github.com/sahandghavidel' icon={BsGithub}/>
// //             <Footer.Icon href='#' icon={BsDribbble}/> */}

// //           </div>
// //         </div>
// //       </div>
// //     </Footer>
// //   );
// // }

// import { Footer } from 'flowbite-react';
// import { Link } from 'react-router-dom';
// import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
// export default function FooterCom() {
//   return (
//     <Footer container className='border border-t-8 border-teal-500'>
//       <div className='w-full max-w-7xl mx-auto'>
//         <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
//           <div className='mt-5'>
//             <Link
//               to='/'
//               className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
//             >
//               <span className=' px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//               We Are The World Zambia
//               </span>
            
//             </Link>
//           </div>
//           <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-4 sm:gap-6'>
//             <div>
//               <Footer.Title title='Contact' />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href='#'
//                 //   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//                 <Footer.Link
//                   href='/about'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title='About' />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href='https://www.100jsprojects.com'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//                 <Footer.Link
//                   href='/about'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title='About' />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href='https://www.100jsprojects.com'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//                 <Footer.Link
//                   href='/about'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
                  
//                 </Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title='Follow us' />
//               <Footer.LinkGroup col>
//                 <Footer.Link
//                   href='#'
//                   target='_blank'
//                   rel='noopener noreferrer'
//                 >
//                   Facebook
//                 </Footer.Link>
//                 <Footer.Link href='#'>Instagram</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//             <div>
//               <Footer.Title title='Legal' />
//               <Footer.LinkGroup col>
//                 <Footer.Link href='#'>Privacy Policy</Footer.Link>
//                 <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
//               </Footer.LinkGroup>
//             </div>
//           </div>
//         </div>
//         <Footer.Divider />
//         <div className='w-full sm:flex sm:items-center sm:justify-between'>
//           <Footer.Copyright
//             href='#'
//             by="AB Nation Tech"
//             year={new Date().getFullYear()}
//           />
//           <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
//             <Footer.Icon href='#' icon={BsFacebook}/>
//             <Footer.Icon href='#' icon={BsInstagram}/>
//             <Footer.Icon href='#' icon={BsTwitter}/>
//             <Footer.Icon href='#' icon={BsGithub}/>
//             <Footer.Icon href='#' icon={BsDribbble}/>

//           </div>
//         </div>
//       </div>
//     </Footer>
//   );
// }