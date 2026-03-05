import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarComponent from "../../instructor-dashboard/detailedCourses/calendar/calendar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from "@fortawesome/free-brands-svg-icons";
import { EmbedMap } from "./embedmap/embedmap.jsx";

const EbookingSchedule = (props) => {

  return(
  <div className="eBooking-schedule-container" id="eBooking-schedule">
    <div className="eBooking-schedule-title">
      <div
        className="eBooking-textClose"
        onClick={() => props.handleShowDetails(0)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
    <div className="eBooking-schedule">
      { !props.onlineMeetingDetails &&
        <div className="eBooking-venue-container">
        <div className="eBooking-venue">
          <EmbedMap
            mapURL={
              "https://www.google.com/maps/embed/v1/place?q=" +
              props.venueLatitude +
              "," +
              props.venueLongitude +
              "&key=" +
              process.env.REACT_APP_GOOGLE_EMBED_MAP_KEY +
              "&zoom=17&maptype=roadmap"
            }
          />
          {/* <div className="eBooking-venueImg" style={{background:`url(${props.venueImg})`}}></div> */}
          <div>
            <b>Address: </b>
            {props.venueAddress}
          </div>
          {/* <div>Landmark: <span style={{color:"black"}}><b>{props.landmark}</b></span></div> */}
          <a
            href={
              "https://www.google.com/maps/search/?api=1&query=" +
              props.venueLatitude +
              "%2c" +
              props.venueLongitude
            }
          >
            <FontAwesomeIcon icon={faMapMarkedAlt} /> Open in Google Maps
          </a>
          {/* <a href=""><FontAwesomeIcon icon={faWhatsappSquare}/> WhatsApp me the location</a> */}
        </div>
      </div>}

      { props.onlineMeetingDetails &&
        <div className="eBooking-venue-container">
        <div className="eBooking-venue">
          <div>
            <b>Platform: </b>
            {props.onlineMeetingDetails.platform}
          </div>

          <div>
            <b>Meeting Link: </b>
            <a href={props.onlineMeetingDetails.meetingLink} target="_blank">Click to Join</a>
          </div>

          <div>
            <b>Meeting ID: </b>
            {props.onlineMeetingDetails.meetingID}
          </div>

          <div>
            <b>Passcode: </b>
            {props.onlineMeetingDetails.passcode}
          </div>

          <div>
            <b>Description: </b>
            {props.onlineMeetingDetails.description}
          </div>
        </div>
      </div>}

      <div className="eBooking-schedule-content">
        <CalendarComponent
          displayTitle="none"
          eBooking={true}
          firstDay={props.calendar.firstDay}
          lastDay={props.calendar.lastDay}
          daysNumber={props.calendar.daysNumber}
          includeWeekends={props.calendar.includeWeekends}
          courseDayInfoList={props.calendar.courseDayInfoList}
        />
      </div>
    </div>
  </div>
)};

export default EbookingSchedule;
