import React from "react";
// import './becomeInstructor.css';
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  BecomeInstructorButton,
  BecomeInstructorContainer,
  BecomeInstructorNumber,
  BecomeInstructorNumbers,
  BecomeInstructorTitle,
} from "../home.style";

const BecomeInstructor = (props) => (
  <BecomeInstructorContainer className="page-section">
    <Container>
      <div className="instructor-content">
        <BecomeInstructorTitle>PASS IT ON!</BecomeInstructorTitle>
        <BecomeInstructorButton>
          <Link to="/become-an-instructor" className="becomeInstructor-btn">
            Become a Trainer
          </Link>
        </BecomeInstructorButton>
        {/* <BecomeInstructorNumbers>
            <BecomeInstructorNumber>
                  <span className="numberTitle">Trainers</span>
                  <span className="numberValue">50k+</span>
            </BecomeInstructorNumber>
            <BecomeInstructorNumber>
                  <span className="numberTitle">Students</span>
                  <span className="numberValue">10M+</span>
            </BecomeInstructorNumber>
            <BecomeInstructorNumber>
                  <span className="numberTitle">Revenue</span>
                  <span className="numberValue">200M+</span>
            </BecomeInstructorNumber>
        </BecomeInstructorNumbers> */}
      </div>
    </Container>
  </BecomeInstructorContainer>
);

export default BecomeInstructor;
