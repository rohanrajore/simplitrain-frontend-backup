import React from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { SchedulePopupContainer } from './schedulePopup.Style';
// import './schedulePopup.css';
import moment from 'moment';

const SchedulePopup = props => {

  const calDate=[ new Date(props.startDate),new Date(props.endDate)]
  // const simulateDate=[new Date(), new Date(new Date().getTime()+(5*24*60*60*1000))]
  // const dates = [{"id":"Day 1","time":"9:00am - 5:00pm"},{"id":"Day 2","time":"9:00am - 5:00pm"},{"id":"Day 3","time":"9:00am - 5:00pm"},{"id":"Day 4","time":"9:00am - 5:00pm"},
  // {"id":"Day 5","time":"9:00am - 5:00pm"},{"id":"Day 6","time":"9:00am - 5:00pm"},{"id":"Day 7","time":"9:00am - 5:00pm"},{"id":"Day 8","time":"9:00am - 5:00pm"},
  // {"id":"Day 9","time":"9:00am - 5:00pm"},{"id":"Day 11","time":"9:00am - 5:00pm"},{"id":"Day 12","time":"9:00am - 5:00pm"},{"id":"Day 13","time":"9:00am - 5:00pm"}
  //   ,{"id":"Day 15","time":"9:00am - 5:00pm"},{"id":"Day 16","time":"9:00am - 5:00pm"},{"id":"Day 17","time":"9:00am - 5:00pm"}]
  const includeWeekend = props.includeWeekend===undefined?true:props.includeWeekend
  return(
    <SchedulePopupContainer>
      <div
        className="schedule-popup-backdrop"
        onClick={props.handleShowFullTime}>
      </div>

    <div className="schedule-popup-container">

      <div className="schedule-popup-dates">
        <div className="calendar-details">
              <div className="days">Number of days: {props.scheduleTime?props.scheduleTime.length:0}</div>
              <div>
                {(props.scheduleTime?props.scheduleTime:[]).map(date=>(
                  <div className="day" key={date.id}>
                      <div style={{width:'25%', padding:'0px 5px', boxSizing: 'border-box'}}><span><b>{date.id}</b></span></div>
                      <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}><span><b>{moment(date.date || date.startDate).format("ddd, MMM Do YYYY")}</b></span></div>
                      <div style={{width:'55%', padding:'0px 5px', boxSizing: 'border-box'}}><b>Time: </b> &nbsp; &nbsp;<span>{date.time}</span></div>
                      {/* <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}>From <span>{day.from}</span></div>
                      <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}>To <span>{day.to}</span></div> */}
                  </div>
                ))}
              </div>
        </div>
        {/* {(props.scheduleTime?props.scheduleTime:[]).map(date=>(
          <div
            className="schedule-popup-date"
            key={date.id}>

            <div style={{marginRight:'10px',width:"45px"}}>
              {date.id}
            </div>

            <div>
              {date.time}
            </div>

          </div>
        ))} */}



      </div>


      {/* <Calendar
        value={props.startDate?calDate:null}
        selectRange={true}
        tileClassName={({activeStartDate, date, view }) => !includeWeekend && (date.getDay() === 0 || date.getDay()===6) ? "schedule-popup-tile disableWeekend disable-calendar"
                                                                                                                         : "schedule-popup-tile disable-calendar"}
        minDate={new Date()}
        className="schedule-popup-calendar"
        /> */}

    </div>
    </SchedulePopupContainer>
  );}

export default SchedulePopup;
