// //  import { BrowserRouter, Routes, Route } from 'react-router-dom';
// //  import Home from './pages/Home';
// //  import About from './pages/About';
// //  import SignIn from './pages/SignIn';
// //  import Dashboard from './pages/Dashboard';
// //  import SignUp from './pages/SignUp';
// // import Programs from './pages/Programs';
// // import Blog from './pages/Blog';
// // import Donate from './pages/Donate';
// // import GetInvolved from './pages/GetInvolved';
// // import StakeHolders from './pages/StakeHolders';
// //  import Header from './components/Header';
// // import ContactUs from './pages/ContactUs';
// //  import Footer from './components/Footer';
// //  import PrivateRoute from './components/PrivateRoute';
// //  import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
// //  import CreatePost from './pages/CreatePost';
// //  import UpdatePost from './pages/UpdatePost';
// //  import PostPage from './pages/PostPage';
// //  import ScrollToTop from './components/ScrollToTop';
// //  import Search from './pages/Search';
// //  //import '@fortawesome/fontawesome-free/css/all.min.css';

// // //import OurPartners from './components/OurPartners';


// // export default function App() {
// //    return (
// //      <BrowserRouter>
// //       <ScrollToTop />
// //       <Header />
      
// //       <Routes>
// //        <Route path='/' element={<Home/>} />
// //         <Route path='/about' element={<About />} />
// //         <Route path='/sign-in' element={<SignIn />} />
// //         <Route path='/sign-up' element={<SignUp />} />
// //         <Route path='/contact-us' element={<ContactUs />} />

// //         <Route path='/search' element={<Search />} />
// //          <Route element={<PrivateRoute />}> 
// //          <Route path='/dashboard' element={<Dashboard />} />
// //          </Route>
// //          <Route element={<OnlyAdminPrivateRoute />}>
// //            <Route path='/create-post' element={<CreatePost />} />
// //           <Route path='/update-post/:postId' element={<UpdatePost />} />
// //         </Route> 

// //         <Route path='/programs' element={<Programs />} />
// //         <Route path='/blog' element={<Blog />} />
// //         <Route path='/donate' element={<Donate />} />
// //         <Route path='/get-involved' element={<GetInvolved />} />
// //         <Route path='/stake-holders' element={<StakeHolders />} />

// //        <Route path='/post/:postSlug' element={<PostPage />} />
       
// //        </Routes>
       
// //        <Footer />
// //      </BrowserRouter>
// //   )
// //  }

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import Home from './pages/Home';
// import About from './pages/About';
// import SignIn from './pages/SignIn';
// import Dashboard from './pages/Dashboard';
// import SignUp from './pages/SignUp';
// import Programs from './pages/Programs';
// import Blog from './pages/Blog';
// import Donate from './pages/Donate';
// import GetInvolved from './pages/GetInvolved';
// import StakeHolders from './pages/StakeHolders';
// import Header from './components/Header';
// import ContactUs from './pages/ContactUs';
// import Footer from './components/Footer';
// import PrivateRoute from './components/PrivateRoute';
// import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
// import CreatePost from './pages/CreatePost';
// import UpdatePost from './pages/UpdatePost';
// import PostPage from './pages/PostPage';
// import ScrollToTop from './components/ScrollToTop';
// import Search from './pages/Search';
// import PopupForm from './components/PopupForm';
// import DonatePage from './components/DonatePage';

// export default function App() {
//     const [userDetails, setUserDetails] = useState(null);

//     const handleFormSubmit = (data) => {
//         setUserDetails(data);
//     };

//     return (
//         <BrowserRouter>
//             <ScrollToTop />
//             <Header />
            
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/about' element={<About />} />
//                 <Route path='/sign-in' element={<SignIn />} />
//                 <Route path='/sign-up' element={<SignUp />} />
//                 <Route path='/contact-us' element={<ContactUs />} />
//                 <Route path='/search' element={<Search />} />
                
//                 <Route element={<PrivateRoute />}>
//                     <Route path='/dashboard' element={<Dashboard />} />
//                 </Route>
                
//                 <Route element={<OnlyAdminPrivateRoute />}>
//                     <Route path='/create-post' element={<CreatePost />} />
//                     <Route path='/update-post/:postId' element={<UpdatePost />} />
//                 </Route>
                
//                 <Route path='/programs' element={<Programs />} />
//                 <Route path='/blog' element={<Blog />} />
                
//                 {/* Donate Page Flow */}
//                 <Route path='/donate' element={userDetails ? <DonatePage /> : <PopupForm onSubmit={handleFormSubmit} />} />

//                 <Route path='/get-involved' element={<GetInvolved />} />
//                 <Route path='/stake-holders' element={<StakeHolders />} />
//                 <Route path='/post/:postSlug' element={<PostPage />} />
//             </Routes>
            
//             <Footer />
//         </BrowserRouter>
//     );
// }
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import Donate from './pages/Donate';
import GetInvolved from './pages/GetInvolved';
import StakeHolders from './pages/StakeHolders';
import Header from './components/Header';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/search' element={<Search />} />

        <Route element={<PrivateRoute />}> 
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route> 

        <Route path='/programs' element={<Programs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/stake-holders' element={<StakeHolders />} />

        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

