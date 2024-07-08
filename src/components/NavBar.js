import React, { useState } from "react";
import logo from "../images/logo.webp";
import profile from "../images/profile .png";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn); 
  const dispatch = useDispatch()

  return (
    <nav className=" navbarstyling">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Internee.pk" />
      </div>

      <div className={showNavLinks ? " mobile-menu-link" : "navbar-menu"}>
        <ul className="nav-links">
          <li>
            <Link to="/internship" className="nav-text">Internship</Link>
          </li>
          <li>
          <Link to="/collaborations" className="nav-text"> Company Collaborations</Link>    
          </li>
          <li>
          <Link to="/contactUs" className="nav-text">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="button">
      {isLoggedIn ? (
        <>
        <Link to="/profile">
        <img src={profile} alt="Profile" className="profile-icon"/>
      </Link>
      </>
      ) : (
        <button className="btn-login">
        <Link to="/interneeLogin" className="btn-text">Internee's Login</Link>
      </button>        
      )}

      </div>
      {/* <div className="hamburger-menu">
        <a href="#" onClick={() => setShowNavLinks(!showNavLinks)}>
          <GiHamburgerMenu />
        </a>
      </div> */}
    </nav>
  );
};

export default Navbar;
