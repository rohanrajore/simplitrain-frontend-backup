import React,{useState,useLayoutEffect} from 'react';
import { CoursesContainer } from "./instructorCourseDetails.style";
import './instructorCourseDetails.css';
import {Link} from 'react-router-dom';
import InstructorCourseDetails from "./instructorCourseDetails.jsx";
import InstructorBatchDetails from "../instructorBatchDetails/instructorBatchDetails.jsx";
import batchDetails from "../instructorBatchDetails/responseJSON.js";
import fetchCourseDetails from "../../edit-course/fetchCourseDetails.js";
import LoaderGif from '../../../styles/images/loading_spinner.gif';
import { Col, Container, Row } from 'react-bootstrap';

const InstructorCourseContainer = props => {

  const [activeTab, setActiveTab] = useState(1)
  const [courseDetails, setCourseDetails] = useState()
  const [loading, setLoading] = useState(true)

  useLayoutEffect(()=> {
    async function fetchData() {
     const response= await fetchCourseDetails(props.match.params.id)
     await setCourseDetails(response.courseDetails)
     setLoading(false)
    }
    fetchData();
       },[1])

  return(
  <CoursesContainer>
   {loading && <img className="instCourseDetails-gif"  src={LoaderGif} alt='' />}
   {!loading && <React.Fragment>
      <div className="insDash-myCourses-title" style={{position:'relative'}}>{courseDetails.title}
        <Link
          className="button"
          style={{position:'absolute',right:'0px',top:'-25px'}}
          to={`/instructor/edit-course/${courseDetails.courseID}`}
        >
          Edit Details
        </Link>
      </div>

      <div className="instCourseDetails-desc">{courseDetails.description} </div>

      <div className="insDash-myCourses-title instCourseDetails-nav">
          <div className={activeTab===1?'instCourseDetails-actTab':''}
               onClick={()=>setActiveTab(1)}>Details</div>

          <div className={activeTab===2?'instCourseDetails-actTab':''}
               onClick={()=>setActiveTab(2)}>Batches</div>
      </div>

      {activeTab===1 && <InstructorCourseDetails courseDetails={courseDetails}/>}
      { activeTab===2 && <div>
                             {batchDetails.map(batchDetail=>(
                                  <InstructorBatchDetails batchDetails={batchDetail} />
                             ))}
                         </div>
      }
    </React.Fragment>}
  </CoursesContainer>
)}

export default InstructorCourseContainer;
