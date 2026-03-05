import React from 'react';
import './weekScheduler.css';
import weeks from './responseJSON.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WeekScheduler = props => (
  <div className="weekScheduler-container">
          <div className="weekScheduler-button"><FontAwesomeIcon icon="chevron-left" size='2x'/></div>

          {weeks.map(week=>(
                  <div className="weekScheduler-week" key={week.id}>
                        <div className="weekScheduler-week-date">{week.date}</div>
                        <div className="weekScheduler-week-courses">{week.courses} Courses</div>
                  </div>
          ))}

          <div className="weekScheduler-button"><FontAwesomeIcon icon="chevron-right" size='2x'/></div>
  </div>
);

export default WeekScheduler;
