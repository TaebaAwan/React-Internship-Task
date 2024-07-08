import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Collaborations from './components/pages/Collaborations';
import ContactUs from './components/pages/ContactUs';
import Internships from './components/pages/Internships';
import JobPortal from './components/pages/JobPortal';
import Profile from './components/pages/Profile';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import ForgotPassword from './components/pages/ForgotPassword';
import LMS from './components/pages/LMS';

function App() {
  return (
    <div className="App">
        
        <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/collaborations'  element={<Collaborations />} />
            <Route path='/contactUs'  element={<ContactUs />} />
            <Route path='/internship' element={<Internships />} />
            <Route path='/jobPortal'  element={<JobPortal />} />
            <Route path='/profile'  element={<Profile />} />
            <Route path='/interneeLogin'  element={<Login />} />
            <Route path='/interneeSignUp'  element={<SignUp />} />
            <Route path='/forgotPassword'  element={<ForgotPassword />} />
            <Route path=' /LMS'  element={<LMS />} />
          </Routes>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;