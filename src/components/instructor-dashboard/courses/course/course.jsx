import React, { useState } from "react";
import { connect } from "react-redux";
//import "./course.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import FullPageLoader from "../../../../common/fullpage-loader/FullPageLoader";
import Axios from 'axios';
import moment from 'moment';
import { Col, Container, Row } from 'react-bootstrap';
import {InstructorCourseCardContainer} from "../course/course.style";

const Course = (props) => {
  const history = useHistory("");
  const createdTime = moment(props.created.includes("[Etc/UTC]")? props.created.replace("[Etc/UTC]","")
                                                                : props.created).format('Do MMM YYYY, h:mm a')

  const modifiedTime = moment(props.lastModified.includes("[Etc/UTC]")? props.lastModified.replace("[Etc/UTC]","")
                                                                      : props.lastModified).format('Do MMM YYYY, h:mm a')

  const [loading, setLoading] = useState(false);

  const handleClick = (e) => {
    props.updateCourseName(e.target.getAttribute("value"));
    props.updateCourseID(e.target.getAttribute("courseID"));
    props.setActiveTab(2.5)
  };

  const onSchedule = (e) => {
    localStorage.setItem("everydaySch","[]")
    localStorage.setItem("startDate",new Date())
    localStorage.setItem("endDate",new Date())
    localStorage.setItem("includeWeekend", null)
    localStorage.setItem("currentCourseId", props.courseId);
    let url = process.env.REACT_APP_API_URL + "/courses/schedule?action=SAVE";
    const jsonData = {
      courseID: props.courseId,
      userID: props.currentUser.id
    };

    setLoading(true);
    Axios.post(url, jsonData).then((response) => {
      setLoading(false);
      const data = response.data;

      if (data.actionResult === 'SUCCESS') {
          localStorage.setItem("currentCourseBatchID", data.scheduledCourseBatchDetails.courseBatchID);
        history.push("/schedule-course/schedule");
      }
    })
  };

  return (
    <InstructorCourseCardContainer>
    <div className="instructorCourseCard-container">
      <div className="course-content">
        <Row>
          <Col xs={12} sm={12} md={12} lg={3}>
           <img src={props.img} alt="course" className="fluid"/>
          </Col>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="course-info">
              <div className="course-title" onClick={handleClick}>
                <Link
                  to={`/instructor-dashboard/courses/${props.courseId}`}
                  className="scheduled-link"
                  value={props.title}
                  courseid={props.courseId}
                >
                  {props.title}
                </Link>
              </div>

              <div className="course-created">
                <div>Created: {" " + createdTime}</div>
                <div>Last Modified: {" " + modifiedTime}</div>
              </div>

              <div className="instDash-scheduledBatch">
                1 Batch Scheduled
                <FontAwesomeIcon icon="chevron-down" style={{marginLeft:'20px',color:'#818487'}}/>
              </div>

              <div className="instDash-batchStats">
                <div><span>5</span> Batches Complete</div>
                <div><span>{props.studentsEnrolled}</span> Students enrolled</div>
                <div className="rightContent-ratings wishlistCourse-ratings instDash-stars">
                        <FontAwesomeIcon icon={props.rating<0.5? ['far', 'star']: props.rating>=0.5&& props.rating<1?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.rating<1.5? ['far', 'star']: props.rating>=1.5&& props.rating<2?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.rating<2.5? ['far', 'star']: props.rating>=2.5&& props.rating<3?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.rating<3.5? ['far', 'star']: props.rating>=3.5&& props.rating<4?'star-half-alt' : 'star'}/>
                        <FontAwesomeIcon icon={props.rating<4.5? ['far', 'star']: props.rating>=4.5&& props.rating<5?'star-half-alt' : 'star'}/>
                        ({props.numberOfRates})
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={2}>
          <Link to={`/instructor/edit-course/${props.courseId}`} className="course-button">Edit Course</Link>
            <div className="course-button" onClick={onSchedule}>
              Schedule Course
            </div>
          </Col>
        </Row>
        
        </div>
      </div>

      <div className="buttons-container">
      <FullPageLoader loading={loading} />
    </div>
    </InstructorCourseCardContainer>
  );
};


const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(Course);
