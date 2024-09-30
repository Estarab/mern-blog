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
import ProgramsPage from './pages/ProgramsPage';
import ProgramCard from './components/ProgramCard';
import OurPartners from './components/OurPartners';
import BlogSections from './components/BlogSections';
import StakeholderPage from './pages/StakeholderPage'; 
import TeamMemberPage from './pages/TeamMemberPage'; // Import the new component
import StakeholderSignUp from './components/StakeholderSignUp'; // Import the new component
import NextProgramsPage from './pages/NextProgramsPage';
import MessageUs from './components/MessageUs';


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

        <Route path='/programs' element={<ProgramsPage />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/donate' element={<Donate />} />
        <Route path='/get-involved' element={<GetInvolved />} />
        <Route path='/stake-holders' element={<StakeHolders />} />
        <Route path='/programs' element={<ProgramCard />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
        <Route path='/message-us' element={<MessageUs/>} />

        
        <Route path='/partners' element={<OurPartners />} />
        <Route path='/blogs' element={<BlogSections />} />
        <Route path='/stakeholder/:name' element={<StakeholderPage />} />
        <Route path='/team-member/:name' element={<TeamMemberPage />} /> {/* New route for team member blog pages */}
        <Route path='/stakeholder-signup' element={<StakeholderSignUp/>} />
        <Route path='/next-programs' element={<NextProgramsPage />} /> {/* New route for upcoming programs */}
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}
