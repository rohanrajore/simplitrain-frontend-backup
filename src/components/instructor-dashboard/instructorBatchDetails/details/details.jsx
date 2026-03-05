import React from 'react';
//import "./details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import CalendarComponent from "../../detailedCourses/calendar/calendar.jsx";
import moment from 'moment';
import {InstructorBatchDetails} from "../../instructorBatchDetails/details/details.style";

const InstructorDetails = props => {

 // We must convert Date to format our calendar component accepts, which is like this (year, month, day) Where month goes (0-January to 11- December)

  const firstDay=moment(props.batchDetails.startDate.includes("[Etc/UTC]")?
              props.batchDetails.startDate.replace("[Etc/UTC]",""):
              props.batchDetails.startDate).format('YYYY,M,D')

  const lastDay=moment(props.batchDetails.endDate.includes("[Etc/UTC]")?
              props.batchDetails.endDate.replace("[Etc/UTC]",""):
              props.batchDetails.endDate).format('YYYY,M,D')

  return(
<InstructorBatchDetails>
  <div className="instructorBatch-details">
      <div className="tabTitle">
          <div className="instructorBatch-details-head">Schedule</div>
          <FontAwesomeIcon className="instructorBatch-details-close"
                           icon={faTimes}
                           onClick={()=>props.handleActiveTab(0)}/>
      </div>

      <div>
          <CalendarComponent displayTitle="none"
                             marginTop={false}
                             includeWeekend={props.batchDetails.includeWeekend==='true'}
                             firstDay={firstDay}
                             lastDay={lastDay}
                             />
      </div>

      <div>
          <div className="instructorBatch-details-head">Venue</div>
      </div>

      <div className="instructorBatch-details-venue">
          <img src={props.batchDetails.venueImg}/>
          <div className="instructorBatch-details-venueInfo">
            <div>{props.batchDetails.venueLocation}</div>
            <div>Landmark: <span>{props.batchDetails.venueLandmark}</span></div>
            <div>
              <div>
                  <FontAwesomeIcon className="instructorBatch-details-close" icon="map-marker-alt"/>
                  <div>Open in Google Maps</div>
              </div>
              {/* <div>
                  <FontAwesomeIcon className="instructorBatch-details-close" icon={['fab','whatsapp']}/>
                  <div>WhatsApp me the location</div>
              </div> */}
            </div>
          </div>
      </div>
  </div>
  </InstructorBatchDetails>
)};

export default InstructorDetails;
