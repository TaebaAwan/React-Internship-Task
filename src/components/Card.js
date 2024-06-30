import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import backend from "../images/BackendDevelopment.webp";
import appdev from "../images/mobiledev.webp";
import graphic from "../images/logo-designer-working-computer-desktop.webp";
import chatBot from "../images/chatbotDevelopment.webp";
import dataAnalytics from "../images/analysis.webp";
import figma from "../images/figma.png";
import cloud from "../images/cloud.webp";
import FrontEnd from "../images/FrontEnd.webp";
import cyber from "../images/hack.webp";
import digital from "../images/marketing-assistant.webp";
import video from "../images/portrait-woman-customer-service-worker.webp";
import techical from "../images/young-woman-teaching-english-lessons.webp";
import cardImg from "../images/portrait-woman-customer-service-worker.webp";

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards-heading">
        Click Below and grab your internship now 👇
      </h1>
      <p className="cards-text">
        Internships every months Introducing Internee.pk, the ultimate platform
        designed to turbocharge the IT sector in Pakistan! We recognize the
        immense potential of talented individuals in the country and aim to
        bridge the gap between them and the thriving IT industry. Internee.pk
        offers a comprehensive range of virtual internship opportunities
        exclusively in the IT field.
      </p>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={backend}
              text="Backend Development"
              path="/internship"
            />
            <CardItem src={FrontEnd} text="Frontend Development " />
          </ul>
          <ul className="cards__items">
            <CardItem src={cyber} text="Cyber Security" path="/internship" />
            <CardItem src={figma} text="Figma Design" path="/internship" />
            <CardItem src={video} text="Video Editing" path="/internship" />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={chatBot}
              text="Chatbot Development"
              path="/internship"
            />
            <CardItem src={appdev} text="App Development" path="/internship" />
            <CardItem
              src={graphic}
              text="Graphic Designing"
              path="/internship"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={techical}
              text="Technical Writing"
              path="/internship"
            />
            <CardItem
              src={dataAnalytics}
              text="Data Analytics"
              path="/internship"
            />
            <CardItem src={cloud} text="Cloud Computing" path="/internship" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
