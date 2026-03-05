import React,{useEffect} from 'react';
import "./leadership.css";
import {useLocation} from "react-router-dom";
import MuralidharKoteshwar from '../../../assets/MuralidharKoteshwar.jpeg';
import RohanRajore from '../../../assets/RohanRajore.jpeg';

const Leadership = props => {

  const { pathname } = useLocation()
  useEffect(()=>(
    window.scroll({top:0, behavior:'smooth'})
  ),[pathname])

  return(
  <div className="footerLink-leadership">
      <div className="leadership-mainImg">Our Leadership</div>
      <div className='page-section'>
      <div className="leadership-cards">
        <div className="leadership-cardsTitle">Meet the founders</div>
        <div className='row'>
            <div className="leadership-card">
                    <div className="leadership-cardInfo">
                        <img src={MuralidharKoteshwar} />
                        <div>Muralidhar Koteshwar</div>
                        <div>Corporate Trainer</div>
                    </div>

                    <div className="leadership-cardText">
                        <p>
                            Muralidhar Koteshwar is an engineering professional who is equally passionate about Education. In a career that spans three decades after a B-Tech from IIT-Madras, he held leadership positions in multinational organisations like C-DAC, Tektronix, Tata Elxsi, Celstream, Trilogy, Sonim and Avankia 
                        </p>
                        <p>
                            He is a visiting faculty at IIIT-B & IIM Indore and was the founding secretary of the Advanced Computing Society of India He is a facilitator of the Executive Leadership Program of AICTE for faculty of Engineering and Management Colleges and is on the Andhra Pradesh Government Committee for Skills EducationHe was a keynote speaker at the Hindustan Times Annual Education Summit and has been felicitated by various institutions including the Government of Taiwan for service to society
                        </p>
                    </div>
                </div>
            <div className="leadership-card">
                <div className="leadership-cardInfo">
                    <img src={RohanRajore} />
                    <div>Rohan Rajore</div>
                    <div>Corporate Trainer</div>
                </div>

                    <div className="leadership-cardText">
                        <p>Rohan Rajore is an IT professional with a Bachelors degree in Computer Engineering from Mumbai University. Having worked in the IT industry for over 9 years in companies like Infosys, Accenture and Oracle, Rohan moved on to pursue his passion for teaching to be a technology instructor.</p>

                        <p>
                           Rohan has travelled to more than 20 countries in 5 continents delivering Technology programs to 50+ global organizations. Rohan is a perpetual learner himself and has other varied interests like teaching Art of Living meditation programs, playing Guitar to mention a few.</p>
                    </div>
                </div>

                
            </div>
        </div>
      </div>

  </div>
);}

export default Leadership;
