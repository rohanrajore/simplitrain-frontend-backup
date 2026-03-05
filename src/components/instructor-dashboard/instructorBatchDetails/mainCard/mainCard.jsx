import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InstructorMainCard = props => (
  <div>
     <div className="instDashboard-batchLeftTab">
       <img src={props.batchDetails.img}/>
       <div className="instDashboard-batchLeftTab-info">
          <div>{props.batchDetails.title}</div>
          <div>
            <FontAwesomeIcon icon="calendar"/>
             {props.batchDetails.schedule}
          </div>
          <div>
            <FontAwesomeIcon icon="map-marker-alt"/>
            {props.batchDetails.location}
          </div>
          <div>
            <FontAwesomeIcon icon="rupee-sign"/> {props.batchDetails.price}
          </div>
       </div>
     </div>

     <div className="instDashboard-batchRightTab">
        <div>
          <hr/>
          <div>
            <div className="instDashboard-batchRightTab-numbers">
                <div>Enrollments:</div>
                <div>{props.batchDetails.enrollments}</div>
            </div>
            <div className="instDashboard-batchRightTab-numbers marginBot0">
                <div>Schedule:</div>
                <div>{props.batchDetails.scheduleProgress}</div>
            </div>
          </div>

          <div className="instDashboard-batchRightTab-status">Status: <span>{props.batchDetails.status}</span></div>
        </div>

        <div>Message Learners</div>
     </div>

  </div>
);

export default InstructorMainCard;
