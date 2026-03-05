import React,{useState,useEffect}    from 'react';
import './detailedCourseContainer.css';
import DetailedCourse from './detailedCourse/detailedCourse.jsx';
import {NavLink} from 'react-router-dom';
import response from './JSONdetailed.js';
import Learners from './learners/learners.jsx';
import Feedback from './feedback/feedback.jsx';
import Finance from './finance/finance.jsx';
import CalendarComponent from './calendar/calendar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailedCourseContainer = props => {

  const [change,setChange] = useState("details")
  const setDetails =() => setChange("details")
  const setLearners =() => setChange("learners")
  const setFeedback = () => setChange("feedback")
  const setFinance = () => setChange ("finance")

  useEffect(()=>{
    props.schedulePathHandler()
  },[1])

  return(
  <div className="detailed-container">
        <NavLink to='/instructor-dashboard/scheduled' style={{color:'#008cb6',width:'250px',textDecoration:'none'}}><FontAwesomeIcon icon='chevron-left' style={{marginRight:'10px'}}/>Back to scheduled courses</NavLink>
        <DetailedCourse details={response.detailed}/>
        <div className="detailed-content">
              <div className="link-container">
                    <NavLink exact to="/instructor-dashboard/scheduled/76/details" onClick={setDetails}  className="detailed-link" activeClassName="detailed-link-active">Details</NavLink>
                    <NavLink exact to="/instructor-dashboard/scheduled/76/learners" onClick={setLearners} className="detailed-link" activeClassName="detailed-link-active" >Learners</NavLink>
                    <NavLink exact to="/instructor-dashboard/scheduled/76/feedback" onClick={setFeedback} className="detailed-link" activeClassName="detailed-link-active" >Feedback</NavLink>
                    <NavLink exact to="/instructor-dashboard/scheduled/76/finance" onClick={setFinance} className="detailed-link" activeClassName="detailed-link-active" >Finance</NavLink>
              </div>
              <div className="detailed-page">

                            { change==="details"?<CalendarComponent/>:
                              change==="learners"?<Learners/>:
                              change==="feedback"?<Feedback/>:
                              change==="finance"?<Finance/>:''}
              </div>
        </div>
  </div>
);}

export default DetailedCourseContainer;
//<div><b>Schedule</b></div>
