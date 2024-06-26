import React from 'react'
import "./HeroSec.css";
import PITB from "../images/incubation.jpg";
import tower from "../images/nep.png";
import NICS from "../images/nic.png";
import { ReactTyped }  from 'react-typed';

import { Cursor} from 'react-simple-typewriter';

export default function HeroSection() {

  const strings = ['Get hands on experience or a competitive job!'];
  const typeSpeed = 50;

  return (
    <div className="hero-section">
       <h1 className="hero-text col-4">Looking for dream internship?</h1>
     <h2 className="blinking-text"><ReactTyped strings={['On your desired domain', 'Get hands on experience', 'Get a competitive job']} typeSpeed={100} loop /></h2>
       <p className="hero-subtext col-4">Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>



<div className="PITN-NICS-Icons">

        <img className="pitb" src={PITB} alt="pitb" />
        <img className="nep" src={tower} alt="nep" />
        <img className="nics" src={NICS} alt="NICS" />
      

</div>
<div className="Buttons">
<button className="portal">
          <a href="/jobPortal" className="btn-text">
            Job Portal
          </a>
        </button>
        <button className="lms">
          <a href="/LMS" className="btn-text">
            Our LMS
          </a>
        </button>

</div>


    </div>
  )
}
