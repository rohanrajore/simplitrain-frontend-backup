import React from 'react';
import './scheduledCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ScheduledCourse = props => {

    const dateFormatOne = "MMMM Do YYYY"
    const dateFormatTwo = "Do MMM YYYY"

    const dateHandler = (date,format) =>{
      return date!=null?( moment(date.includes("[Etc/UTC]")?
                               date.replace("[Etc/UTC]",""):
                               date).format(format)
                      ): ""
    }

    const completed = Math.ceil(moment().diff(moment(props.startDate),'days','true')) +" of " +
                      Math.ceil(moment(props.endDate).diff(moment(props.startDate),'days','true')) + " completed"
  return(
  <div className="scheduled-container">
        <div className="scheduled-header">
          <div className="header-split">
              <div style={{width:'50%',paddingLeft:'20px'}}>
                    <div>ENROLLMENTS</div>
                    <div style={{color:'#018cb0'}}>{props.enrollments}</div>
              </div>

              <div style={{width:'50%'}}>
                    <div>SCHEDULE</div>
                    <div style={{color:'#018cb0'}}>
                          { props.status==="UPCOMING"? dateHandler(props.startDate,dateFormatOne) + " - " + moment(props.startDate).from(moment()) :
                            props.status==="IN_PROGRESS"? completed
                            : ""
                        }
                    </div>
              </div>
          </div>
          <div className="header-split">
              <div style={{width:'50%',paddingLeft:'20px'}}>
                    <div>FEEDBACK</div>
                    <div style={{color:'#018cb0'}}>{props.feedback}</div>
              </div>

              <div style={{width:'50%',textAlign:'right',paddingRight:'20px',color:props.status==="IN_PROGRESS"?'green':props.status==="COMPLETED"?'grey':'orange'}}>
                    {props.status} <FontAwesomeIcon icon='ellipsis-v' style={{color:'#018cb0',marginLeft:'15px'}} size='1x'/>
              </div>
          </div>
        </div>

        <div className="scheduled-details">
          <div className="scheduled-content">
                <img src={props.img} alt='course'/>
                <div className="scheduled-info">
                      <div className="course-title"><Link to='/instructor-dashboard/scheduled/76/details' className="scheduled-link">{props.title}</Link></div>
                      <div>
                            <div><FontAwesomeIcon icon='calendar' style={{color:'#018cb0'}} size='1x'/>
                                      {" " + dateHandler(props.startDate,dateFormatTwo) + " - " + dateHandler(props.endDate,dateFormatTwo) +` (${props.durationInDays}` } {props.durationInDays>1?" days)": " day)"}
                            </div>
                      </div>
                      <div>
                            <div className="location"><FontAwesomeIcon icon='map-marker-alt' style={{color:'#018cb0'}} size='1x'/> {props.location}</div>
                      </div>
                      <div>
                            <div style={{color:'#de456a'}}><FontAwesomeIcon icon='rupee-sign' size='1x'/> {props.price}</div>
                      </div>
                </div>
          </div>

          <div className="scheduled-buttons-container">       {/*If status is completed or in progress, it will not show the first button,*/}
                <Link className="scheduled-button" style={{display:props.status!=='UPCOMING'?'none':''}}
                      to={`/edit-scheduled-course/${props.id}/schedule`}>  Edit
                </Link>
                <div className="scheduled-button">Message Learners</div>
                                                      {/*If status is in progress button title should be changed*/}
                <div className="scheduled-button"> {props.status==='IN_PROGRESS'?'Announcments':'Message Venue Provided'} </div>
          </div>
        </div>

  </div>
 );
}

export default ScheduledCourse;
