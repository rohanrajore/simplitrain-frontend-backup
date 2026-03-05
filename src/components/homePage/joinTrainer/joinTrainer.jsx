import React from 'react';
// import './joinTrainer.css';
import logo from '../../../assets/logo-short.jpg';
import {Link} from 'react-router-dom';
import homePage1 from "../../../assets/join-trainer/data-science.png";
import homePage2 from "../../../assets/join-trainer/cooking.png";
import homePage3 from "../../../assets/join-trainer/ui-ux.png";
import homePage4 from "../../../assets/join-trainer/iit-jee.png";
import homePage5 from "../../../assets/join-trainer/upsc-cse.png";
import homePage6 from "../../../assets/join-trainer/yoga.png";
import homePage7 from "../../../assets/join-trainer/painting.png";
import { JoinNewTrainer, JoinTrainerContainer, JoinTrainerItem, JoinTrainerList, JoinTrainerTitle } from '../home.style';
import { Container } from 'react-bootstrap';

const joinTrainers = [
      {
            path:homePage1,
            name:'Data Science'
      },
      {
            path:homePage2,
            name:'Baking & Cooking'
      },
      {
            path:homePage3,
            name:'UI/UX'
      },
      {
            path:homePage4,
            name:'IIT-JEE'
      },
      {
            path:homePage5,
            name:'UPSE-CSE'
      },
      {
            path:homePage6,
            name:'Yoga'
      },
      {
            path:homePage7,
            name:'Painting'
      }
];

const JoinTrainer = props => (
  <JoinTrainerContainer className="page-section">
      <Container className="join-content">
        <JoinTrainerTitle>Join our growing Trainer community!</JoinTrainerTitle>
        <JoinTrainerList>
            {
                  joinTrainers.map((joinTrainer)=>(
                        <JoinTrainerItem key={joinTrainer.name}>
                              <img src={joinTrainer.path} alt={joinTrainer.name} />
                              <h4>{joinTrainer.name}</h4>
                        </JoinTrainerItem>
                  ))
            }
            <JoinNewTrainer>
                  <img src={logo}  alt="" />
                  <h4>What's your skill?</h4>
                  <Link to='/become-an-instructor' className="join-button">Become a Trainer</Link>
            </JoinNewTrainer>
        </JoinTrainerList>
      </Container>
  </JoinTrainerContainer>
);

export default JoinTrainer;
