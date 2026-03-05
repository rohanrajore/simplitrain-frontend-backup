import React,{useLayoutEffect, useState} from 'react';
import fetchScheduledCourseDetails from './fetchScheduledCourseDetails.js';
import ScheduleCourse from '../course-scheduler';
const EditScheduledCourse = props => {

   const batchId= props.match.params.id
  useLayoutEffect(()=> {
    async function fetchData() {
     const data= await fetchScheduledCourseDetails(batchId)
     await setScheduledCourseDetails(data.courseBatchCompleteDetails)
     console.log(new Date(data.courseBatchCompleteDetails.startDate))
    }
    fetchData();
       },[1]);

    const [scheduledCourseDetails,setScheduledCourseDetails] = useState()
  return(
    <React.Fragment>
        <ScheduleCourse editScheduledCourseDetails={scheduledCourseDetails} batchId={batchId}/>
    </React.Fragment>
);}

export default EditScheduledCourse;
