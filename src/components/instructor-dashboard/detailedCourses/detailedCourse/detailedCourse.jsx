import React from 'react';
import './detailedCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DetailedCourse = props => (
  <div className="detailed-info">
        <div className="upper-info">
              <div className="course-title" style={{marginLeft:'30px',color:'#008cb6'}}>{props.details.title}</div>
              <div className="info-part" style={{color:'#de456a'}}><FontAwesomeIcon icon='rupee-sign' size='1x'/> {props.details.price}</div>
              <div className="info-part" style={{marginRight:'15px',color:props.details.status==="IN PROGRESS"?'green':props.details.status==="COMPLETED"?'grey':'orange'}}>
                    {props.details.status}
              </div>
        </div>

        <div className="bottom-info">
                <div style={{marginLeft:'30px'}}>
                      <div><b>ENROLLMENTS</b></div>
                      <div>{props.details.enrollments}</div>
                </div>

                <div className="bottom-part">
                      <div><b>SCHEDULE</b></div>
                      <div>{props.details.schedule}</div>
                </div>

                <div className="bottom-part">
                      <div><b>DATES</b></div>
                      <div>{props.details.dates}</div>
                </div>
        </div>

  </div>
);

export default DetailedCourse;
