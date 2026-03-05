import React,{useState,useEffect} from 'react';
//import "./instructorProfile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCommentAlt, faUserCircle, faComments} from "@fortawesome/free-regular-svg-icons";
import {faChalkboardTeacher, faGlobe} from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagram, faLinkedinIn,
        faYoutube, faTwitter, faBehanceSquare, faDribbbleSquare, faVimeo,
        faFlickr, faPinterest, faYahoo, faReddit, faSoundcloud,
        faTumblrSquare, faGithub} from "@fortawesome/free-brands-svg-icons";
import Course from "../homePage/course/course.jsx";
import ReactPaginate from 'react-paginate';
import fetchInstructorDetails from "./fetchInstructorDetails.js";
import fetchInstructorCourses from "./fetchInstructorCourses.js";
import SocialNetworks from "./socialNetworks/socialNetworks.jsx";
import { Col, Container, Row } from 'react-bootstrap';
import {InstructorProfileContainer,PageTitleRow,InstructorProfileContent,CoursesGridContainer} from '../instructor-profile/instructorProfile.style';
import UserIcon from '../../assets/user.png';
import CommentIcon from '../../assets/comment.png';
import BatchesIcon from '../../assets/batches.png';
import CoursesIcon from '../../assets/courses.png';
import userdemo from "../../assets/userdemo.svg";

const InstructorProfile = props => {

    const [instructorDetails,setInstructorDetails] = useState("")
    const [currentCourses,setCurrentCourses] =useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [paginationSize, setPaginationSize] = useState()

    useEffect(()=>{
      async function fetch(){
        if(instructorDetails===""){
            let instructorDetails = await fetchInstructorDetails(props.match.params.id)
            console.log(instructorDetails)
            setInstructorDetails(instructorDetails)
        }
        let courses = await fetchInstructorCourses(props.match.params.id,pageNumber,6)
        setCurrentCourses(courses.content)
        setPaginationSize(courses.totalPages)
      }
      fetch()
    },[pageNumber])

    const handlePageClick= e =>{
      setPageNumber(e.selected)
    }

  return(
    <InstructorProfileContainer>

      <PageTitleRow>
        <div className="pageTitle page-section">
          <Container>
              <h4>Instructor Profile</h4>
          </Container>
        </div>
      </PageTitleRow>


      <InstructorProfileContent className="page-section">
        <Container>
          <Row>
            <Col sm={4} md={4}>
              <div className="InstructorBox">
                <div className="userProfile">
                    <img className="instructor-img instr-img" src={!instructorDetails.img?userdemo:instructorDetails.img} alt="Instructor"/>
                </div>
                <div className="instructorValues">
                  <Row>
                    <Col sm={6} md={6}>
                      <div className="instructorVal">
                       <img src={UserIcon}/>{instructorDetails.students} Students
                      </div>
                    </Col>
                    <Col sm={6} md={6}>
                      <div className="instructorVal">
                       <img src={CommentIcon}/>{instructorDetails.reviews} Reviews
                      </div>
                    </Col>
                    <Col sm={6} md={6}>
                      <div className="instructorVal">
                        <img src={BatchesIcon}/>{instructorDetails.batches} Batches
                      </div>
                    </Col>
                    <Col sm={6} md={6}>
                      <div className="instructorVal">
                        <img src={CoursesIcon}/>{instructorDetails.courses} Courses
                      </div>
                    </Col>
                  </Row>
                  {/* <div className="instructorMsg">
                    Send Message to Instructor
                  </div> */}
              </div>

                <div className="socialNetwork">
                    {instructorDetails!=="" && <SocialNetworks instructorDetails={instructorDetails}/>}
                </div>
              </div>
            </Col>
            <Col sm={8} md={8}>
                <div className="instructorDetail">
                  <div className="instructor-name"> {instructorDetails.name} </div>
                  <div className="instructor-role">{instructorDetails.role}</div>
                  <div className="instructor-description">
                    <div>{instructorDetails.description}</div>
                  </div>
                </div>
            </Col>
          </Row>

        </Container>
      </InstructorProfileContent>


    <CoursesGridContainer className="page-section">
        <Container>
          <div id="react-paginate-instructor-profile">
              <div className="instructor-profile-courses">
                    {currentCourses.map(course=>(
                      <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                      date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                      authorID={course.authorID} actualPrice={course.actualPrice} startDate={course.startDate}/>
                    ))}
              </div>
            {paginationSize>1 && <ReactPaginate
              previousLabel={'previous'}
              nextLabel={'next'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={paginationSize}
              onPageChange={handlePageClick}
              pageClassName={'pagination-li'}
              pageLinkClassName={'pagination-link'}
              previousLinkClassName={'pagination-link'}
              nextLinkClassName={'pagination-link'}
              activeLinkClassName={'pagination-active'}
              containerClassName={'pagination-container'}
              subContainerClassName={'pages pagination'}
              activeClassName={'active'}
            />}
          </div>
        </Container>
      </CoursesGridContainer>

    </InstructorProfileContainer>
  );
}

export default InstructorProfile;
