import React from "react";
import "./HeroSec.css";
import PITB from "../images/incubation.jpg";
import tower from "../images/nep.png";
import NICS from "../images/nic.png";
import flyImage from "../images/3persons.webp";
import bg from "../images/whyInterneebg.png";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Cursor } from "react-simple-typewriter";
import { BiGasPump } from "react-icons/bi";

export default function HeroSection() {
  const strings = ["Get hands on experience or a competitive job!"];
  const typeSpeed = 50;

  return (
    <div className="hero-section">
      <h1 className="hero-text col-4">Looking for dream internship?</h1>
      <h2 className="blinking-text">
        <ReactTyped
          strings={[
            "On your desired domain",
            "Get hands on experience",
            "Get a competitive job",
          ]}
          typeSpeed={100}
          loop
        />
      </h2>
      <p className="hero-subtext col-4">
        Internee.pk kickstart student's tech careers with first internships,
        providing industry exposure, practical skills, and networking
        opportunities, paving the way for their success in the tech industry.
      </p>

      <div className="PITN-NICS-Icons">
        <img className="pitb" src={PITB} alt="pitb" />
        <img className="nep" src={tower} alt="nep" />
        <img className="nics" src={NICS} alt="NICS" />
      </div>

      <div className="Buttons">
        <button className="portal">
          <Link to="/jobPortal" className="btn-text">
            Job Portal
          </Link>
        </button>
        <button className="lms">
          <Link to="/LMS" className="btn-text">
            Our LMS
          </Link>
        </button>
      </div>

      <div className="split-screen">
        <div className="left">
          <h1 classname="heading-left">Who is internee.pk?</h1>
          <p>
            The ultimate platform designed to turbocharge the IT sector in
            Pakistan! We recognize the immense potential of talented individuals
            in the country and aim to bridge the gap between them and the
            thriving IT industry. Internee.pk offers a comprehensive range of
            virtual internship opportunities exclusively in the IT field..
          </p>
        </div>
        <motion.div
          className="right"
          animate={{ x: 100, scale: 1 }}
          initial={{ scale: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeatType: "reverse",
          }}
        >
          <img src={flyImage} alt="Floating" className="floating-image" />
        </motion.div>
      </div>
    </div>
  );
}
