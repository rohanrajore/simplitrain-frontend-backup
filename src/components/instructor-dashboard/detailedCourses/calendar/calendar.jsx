import React,{useState} from 'react';
//import './calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import response from '../JSONdetailed.js';
import moment from 'moment';
import {CalendarContainer} from "../calendar/calendar.style";

const CalendarComponent = props => {

    const [value, setValue] = useState([new Date(props.firstDay || response.calendar.firstDay),
                                        new Date(props.lastDay || response.calendar.lastDay)])

    const changeHandler= nextValue => setValue(nextValue)

  return (
  <CalendarContainer>
  <div className="calendar-container">
        <div style={{display:props.displayTitle==="none"?"none":""}}><b>Schedule</b></div>
        <div className="calendar-content" style={{marginTop:props.marginTop===false?'0':''}}>
            {/* <Calendar onChange={changeHandler}
                      value={value}
                      selectRange={true}
                      tileClassName={({activeStartDate, date, view }) =>(!props.includeWeekend && (date.getDay() === 0 || date.getDay()===6) ?
                                                                                                      "disableWeekend disable-calendar":
                                                                                                      "disable-calendar")}
                      className={props.eBooking?"eBookingCalendar":""} /> */}
            <div className="calendar-details">
                  <div className="days">Number of days: {props.daysNumber || response.calendar.daysNumber}</div>
                  <div>
                    {(props.courseDayInfoList || response.calendar.days).map(day=>(
                      <div className="day" key={day.name}>
                          <div style={{width:'10%', padding:'0px 5px', boxSizing: 'border-box'}}><span><b>{day.name}</b></span></div>
                          <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}><span>{moment(day.date).format("ddd, MMM Do YYYY")}</span></div>
                          <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}>From <span>{day.from}</span></div>
                          <div style={{width:'30%', padding:'0px 5px', boxSizing: 'border-box'}}>To <span>{day.to}</span></div>
                      </div>
                    ))}
                  </div>
            </div>
        </div>

  </div>
  </CalendarContainer>
);}

export default CalendarComponent;
