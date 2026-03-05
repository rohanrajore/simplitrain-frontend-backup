import React, { useState, useLayoutEffect, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import "./course-details.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setSubCategory,
  setSearch,
} from "../../redux/browse-courses/browse-courses-actions.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CourseInfo from "../../components/course-details/courseInfo/courseInfo.jsx";
import CourseCard from "../../components/course-details/courseCard/courseCard.jsx";
import VideoWatch from "../../components/course-details/videoWatch/videoWatch.jsx";
import WhatToLearn from "../../components/course-details/whatToLearn/whatToLearn.jsx";
import AccordionContainer from "../../components/course-details/accordion/accordion.jsx";
import Requirements from "../../components/course-details/requirements/requirements.jsx";
import Description from "../../components/course-details/description/description.jsx";
import Instructor from "../../components/course-details/instructor/instructor.jsx";
import Feedback from "../../components/course-details/feedback/feedback.jsx";
import ReviewsContainer from "../../components/course-details/pagination/pagination.jsx";
import Navbar from "../../components/course-details/navbar/navbar.jsx";
import MobileCourseInfo from "../../components/course-details/mobileCourseInfo/mobileCourseInfo.jsx";
import MoreCourses from "../../components/course-details/moreCourses/moreCourses.jsx";
import QuestionsAnswers from "../../components/course-details/questionsAnswers/questionsAnswers.jsx";
import fetchCourseDetails from "./fetchCourseDetails.js";
import fetchCoupons from "./fetchCoupons.js";
import { Col, Container, Row } from 'react-bootstrap';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";

import {
  faClosedCaptioning,
  faGlobe,
  faExclamationCircle,
  faHeart,
  faShare,
  faStopwatch,
  faPlayCircle,
  faFile,
  faDownload,
  faInfinity,
  faMobileAlt,
  faMedal,
  faPlay,
  faCheck,
  faChevronDown,
  faStar,
  faStarHalfAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { CourseDetailsContainer, Breadcrumbs, CourseDetailTop, CourseDetailBottom, MoreCoursesContainer } from "./course-details.styles.jsx";
// add fontawesome icons  to the library, so they can be used in other files...
library.add(
  faClosedCaptioning,
  faGlobe,
  faExclamationCircle,
  faHeart,
  faShare,
  faStopwatch,
  faPlayCircle,
  faFile,
  faDownload,
  faInfinity,
  faMobileAlt,
  faMedal,
  faPlay,
  faCheck,
  faChevronDown,
  faStar,
  faStarHalfAlt,
  far,
  faUserFriends
);

function CourseDetails(props) {
  // This will open videoWatch component when user clicks on courseCard video watch, it is being sent to VideoWatch component as prop
  const [isWatched, setIsWatched] = useState(false);
  const [courseDetails, setCoursesDetails] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  // This will set isWatched attribute, and is passed as prop to component CourseCard and VideoWatch
  const watchHandler = (e) => setIsWatched(!isWatched);
  const subCategoryHandler = (e) => {
    dispatch(setSearch(""));
    let subName=e.target.getAttribute("name")
    let subID=e.target.getAttribute("subID")
    let subCat= {"id":subID,"name":subName}
    dispatch(setSubCategory(subCat));
  }
  const categoryHandler = (e) => {
    dispatch(setSearch(""));
    let name=e.target.getAttribute("name")
    let id=e.target.getAttribute("id")
    let cat= {"id":id,"name":name}
    dispatch(setCategory(cat));
  }
  console.log(currentUser);
  const location = useLocation();
  console.log(location.hash.slice(1) === "course-reviews");
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    async function fetch() {
      // if currentUser is null then user isnt loged in, and we pass empty string
      const res = await fetchCourseDetails(
        props.match.params.id,
        currentUser === null
          ? ""
          : currentUser?.id === null
          ? ""
          : currentUser.id
      );
      const coupons = await fetchCoupons(props.match.params.id);
      console.log(res);
      console.log(coupons);
      setCoursesDetails(res.courseBatchCompleteDetails);
      setCoupons(coupons.couponList);
      await setLoading(false);
      // This will scroll to specific ID when clicked on link on another route that contains ID of specific div on this page
      if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1));

        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scroll({ top: 0, behavior: "smooth" });
      }
    }
    fetch();
  }, [props.match.params.id]);

  return (
    <CourseDetailsContainer>
      {courseDetails !== "" && (
          <>
          <Breadcrumbs className="page-section">
             <Container>
               <Link
                 className="info-link"
                 to="/course-search"
                 onClick={categoryHandler}
                 name={courseDetails.courseInfo.categories.main}
                 id={courseDetails.courseInfo.categories.mainID}
               >
                 {" "}
                 {courseDetails.courseInfo.categories.main}{" "}
               </Link>{" "}
              {'>'}
            <Link
              className="info-link"
              to="/course-search"
              onClick={subCategoryHandler}
              name={courseDetails.courseInfo.categories.sub}
              subID={courseDetails.courseInfo.categories.subID}
            >
              {" "}
              {courseDetails.courseInfo.categories.sub}{" "}
            </Link>
            </Container>
          </Breadcrumbs>
          <CourseDetailTop className="page-section">
              <Container>
                <Row>
                  <Col md="8">
                    <div id="course-info">
                      {/* <MobileCourseInfo
                        info={courseDetails.courseInfo}
                        id={courseDetails.id}
                        details={courseDetails.courseCard}
                        handler={watchHandler}
                      /> */}
                      <CourseInfo info={courseDetails.courseInfo} />
                      <VideoWatch
                        info={courseDetails}
                        isWatched={isWatched}
                        handler={watchHandler}
                      />
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="card-image" onClick={()=> watchHandler()}  style={{background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url("${ courseDetails && courseDetails.courseCard ? courseDetails.courseCard.imageUrl : null }")`,backgroundSize:"cover"}} >
                        <FontAwesomeIcon icon={faPlayCircle} size='3x'/>
                        {/* <p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}>Preview this course</p> */}
                    </div>
                  </Col>
                </Row>
              </Container>
          </CourseDetailTop>

          <CourseDetailBottom className="page-section">
            <Container>
              <Row>
                <Col md="8">
                  <Navbar />
                  <div id="course-highlights" style={{paddingTop:20}} className="page-container">
                    <WhatToLearn info={courseDetails.learn} />
                  </div>
                  {/*THIS IS COURSE CONTENT PAGE*/}
                  <div id="course-content" style={{paddingTop:20}} className="page-container">
                  <AccordionContainer info={courseDetails.courseContent} />
                  </div>
                  {/*THIS IS DESCRIPTION PAGE*/}
                  <div id="course-description" style={{paddingTop:20}} className="page-container">
                  <Description info={courseDetails.description} />
                  </div>
                  {/*THIS IS Q&A PAGE*/}
                  <div id="course-q&a" style={{paddingTop:20}} className="page-container">
                  <QuestionsAnswers
                    questionsAnswers={courseDetails.questionsAnswers}
                    currentUser={currentUser}
                    courseID={courseDetails.id}
                  />
                  </div>
                  {/*THIS IS COURSE INSTRUCTOR PAGE*/}
                  <div id="course-instructor" style={{paddingTop:20}} className="page-container">
                  <Instructor info={courseDetails.instructor} />
                  </div>
                  {/*THIS IS COURSE REVIEWS PAGE*/}
                  <div id="course-reviews" style={{paddingTop:20}} className="page-container">
                  <Feedback info={courseDetails.feedback} />
                  <ReviewsContainer info={courseDetails.reviews} />
                  </div>
                  <div className="page-container">
                  {
                    courseDetails.moreCourses.length >0?
                      <MoreCourses info={courseDetails} />
                    :null
                  }

                  </div>
                  {/* <MoreCoursesContainer className="page-section">
                  <Container>

                  </Container>
                </MoreCoursesContainer> */}
                </Col>
                <Col md="4">
                  <CourseCard
                    details={courseDetails.courseCard}
                    startDate={courseDetails.courseInfo.startDate}
                    id={courseDetails.id}
                    handler={watchHandler}
                    coupons={coupons}
                  />
                </Col>
              </Row>
            </Container>
          </CourseDetailBottom>
        </>
      )}
    </CourseDetailsContainer>
  );
}

export default CourseDetails;
