import React from "react";
import "./Footer.css";
import logo from "../images/logo.webp";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-content-align">
            <div className="footer-column">
              <img className="logo-image" src={logo} alt="Internee.pk" />
            </div>
            <div className="footer-column">
              <p className="footer-text-header">Company</p>
              <Link to="/contactUs" className="footer-text">
                Contact Us
              </Link>
              <Link to="/privacyPolicy" className="footer-text">
                Privacy Policy
              </Link>
              <Link to="/terms" className="footer-text">
                Terms & Conditions
              </Link>
            </div>

            <div className="footer-column">
              <p className="footer-text-header">Get Help</p>
              <Link to="/trainingVids" className="footer-text">
                Training Videos
              </Link>
              <Link to="/help" className="footer-text">
                Request Help
              </Link>
            </div>
            <div className="footer-column">
              <p className="footer-text-header">Socialize with us</p>
              <div className="socials-icons">
                <a href="https://www.youtube.com/" target="_blank">
                  <FaYoutubeSquare className="icon youtube" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FaInstagramSquare className="icon instagram" />
                </a>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookSquare className="icon" />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <FaTwitterSquare className="icon" />
                </a>
              </div>
              <p className="footer-text">+923453191638</p>
              <p className="footer-text">info@internee.pk</p>
              <p className="footer-text">
                CopyRights© 2024 Internee.pk Pvt Ltd
              </p>
              <p className="footer-text">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
