import React, { useState } from "react";
import logo from "../images/logo.webp";
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <nav className=" navbarstyling">
      <div className="logo">
        <img className="logo-image" src={logo} alt="Internee.pk" />
      </div>

      <div className={showNavLinks ? " mobile-menu-link" : "navbar-menu"}>
        <ul className="nav-links">
          <li>
            <a href="/internship" className="nav-text">
              Internship
            </a>
          </li>
          <li>
            <a href="/collaborations" className="nav-text">
              Company Collaborations
            </a>
          </li>
          <li>
            <a href="/contactUs" className="nav-text">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="button">
        <button className="btn-login">
          <a href="/interneeLogin" className="btn-text">
            Internee's Login
          </a>
        </button>
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
