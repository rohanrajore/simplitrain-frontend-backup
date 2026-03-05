import React, {useState,useLayoutEffect} from 'react';
import CreateCourse from '../create-course';
import fetchCourseDetails from './fetchCourseDetails.js';
import NavigationBlocker from '../../common/navigationBlocker/navigationBlocker.js';

const EditCourse = props => {

const courseId= props.match.params.id

useLayoutEffect(()=> {
  async function fetchData() {
   const editCourseDetails= await fetchCourseDetails(courseId)
   await setCourseDetails(editCourseDetails.courseDetails)
  }
  fetchData();
     },[1]);

  const [courseDetails, setCourseDetails] = useState()
    console.log(courseDetails)
  return(
    <React.Fragment>

        <CreateCourse  editCourseDetails={courseDetails} courseID={courseId}/>
    </React.Fragment>
);}

export default EditCourse;
