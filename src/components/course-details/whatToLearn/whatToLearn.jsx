import React from 'react';
// import './whatToLearn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CourseDetailSection } from './whatLearn.style';

const WhatToLearn = props => (
  <CourseDetailSection id="course-highlights">
      <div className="course-detail-title">
          Course Highlights
      </div>

      <div className="course-detail-content">

          {props.info.map(item=>(
            <div className="learn-elem" key={item}>
              <FontAwesomeIcon icon='check' style={{color:"grey",marginRight:'10px'}} size='1x'/>
              {" "+ item}
            </div>
          ))}

      </div>
  </CourseDetailSection>
);

export default WhatToLearn;
