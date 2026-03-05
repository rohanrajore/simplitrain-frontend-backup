import React,{useEffect} from 'react';
import "./about.css";
import AboutCard from "./aboutCard.jsx";
import {useLocation} from 'react-router-dom';

const About = props => {

  const { pathname } = useLocation()
  useEffect(()=>(
    window.scroll({top:0, behavior:'smooth'})
  ),[pathname])

  return(
  <div className="footerLink-about">
      <div className="about-mainImg">
          <p>About Us</p>
          <p>SimpliTrain is a platform that enables learners and instructors to communicate and participate in knowledge exchange</p>
      </div>

      <div className="about-cardContainer page-section">
          <AboutCard imagePosition="right" title="Vision"/>
          {/* <AboutCard imagePosition="left" title="Lorem ipsum dolor sit"/> */}
      </div>
  </div>
);}

export default About;
