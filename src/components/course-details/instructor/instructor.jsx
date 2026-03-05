import React from 'react';
// import './instructor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import {faCommentAlt, faUserCircle, faComments} from "@fortawesome/free-regular-svg-icons";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";
import SocialNetworks from "../../instructor-profile/socialNetworks/socialNetworks.jsx";
import { InstructorContainer } from './instructor.style';
import { Row, Col } from 'react-bootstrap';
import userdemo from "../../../assets/userdemo.svg";

const Instructor = props => {

      const info= props.info

return(

  <InstructorContainer>
          <h4 className="instructor-title">About the Instructor </h4>
          <Row className="instructor-content">
            <Col md="4" >
              <div className="instructor-details">
                <img className="instructor-img" src={!info.img?userdemo:info.img} alt="Instructor"/>
                <div className="instructor-values">
                    <div className="instructor-val"> <FontAwesomeIcon className="instructor-icons" icon={faCommentAlt} />{info.reviews+ " "} Reviews </div>
                    <div className="instructor-val"> <FontAwesomeIcon className="instructor-icons" icon={faUserCircle} />{info.students + " "} Students </div>
                    <div className="instructor-val"> <FontAwesomeIcon className="instructor-icons" icon={faChalkboardTeacher} />{info.batches + " "} Batches </div>
                    <div className="instructor-val"> <FontAwesomeIcon className="instructor-icons" icon='play' />{info.courses + " "} Courses </div>
                </div>
                {/*<div className="instructor-msg">
                       <FontAwesomeIcon className="instructor-icons" style={{color:"white"}} icon={faComments}/> Send Message to Instructor
                </div>*/}
                <div className="instructor-socialNetwork">
                  <SocialNetworks instructorDetails={info} />
                </div>
              </div>
            </Col>
            {/*Here we will use class info-link from courseInfo.css*/}
            <Col md="8" className="instructor-description">
                <div className="instructor-name"> <Link className="info-link" to={`/instructor-profile/${info.id}`}>{info.name}</Link> </div>
                <div className="instructor-role">{info.role}</div>
                <div className="instructor-text-info">{info.description}</div>
            </Col>
          </Row>
  </InstructorContainer>

);}

export default Instructor;
