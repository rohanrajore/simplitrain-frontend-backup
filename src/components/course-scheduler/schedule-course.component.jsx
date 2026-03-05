import React, { Component } from "react";
import TimePicker from "react-time-picker";
import ComboBox from "../../common/combobox/combo-box";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "moment/locale/en-gb";
import EverydaySchedule from "./everyday-schedule.component";
import $ from "jquery";
import moment from "moment";
//import "./schedule-course.component.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ScheduleCourseStyle} from "../course-scheduler/schedule-course.component.style";
import { Col, Container, Row } from 'react-bootstrap';
import { colors } from "@material-ui/core";

export class ScheduleCourse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: props.fieldValues.startDate || new Date(),
      endDate: props.fieldValues.endDate || new Date(),
      startTime: props.fieldValues.startTime || { id: 18, name: "09:00 AM" },
      durHours: props.fieldValues.durHours || 8,
      durMins: props.fieldValues.durMins || 0,
      includeWeekend: props.fieldValues.includeWeekend || false,
      everydaySch: JSON.parse(localStorage.getItem("everydaySch")) || [],
      timesComboData: [],
      timeObj: null,
      timesData: [],
      displayEverydaySchedule: false
    };

    // Here we check if everydaySch exist in localStorage, if it dont exist we set it to [],
      if(JSON.parse(localStorage.getItem("everydaySch"))===null){
          localStorage.setItem("everydaySch","[]")
     }
  }

  componentDidMount = () => {
    let times = [];
    const periods = ["AM", "PM"];
    const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    for (let prop in periods) {
      if (periods[prop] === "AM") {
        times.push("00:00 AM");
        times.push("00:30 AM");
      }
      for (let hour in hours) {
        for (let min = 0; min < 60; min += 30) {
          times.push(
            ("0" + hours[hour]).slice(-2) +
              ":" +
              ("0" + min).slice(-2) +
              " " +
              periods[prop]
          );
        }
      }
      if (periods[prop] === "AM") {
        times.push("12:00 PM");
        times.push("12:30 PM");
      }
    }

    let timeComboObj = {
      id: null,
      name: null,
    };
    let tmpTimeDataArr = [];
    for (let i = 0; i < times.length; i++) {
      let tmpTimeObj = $.extend(true, {}, timeComboObj);
      tmpTimeObj.id = i;
      tmpTimeObj.name = times[i];
      tmpTimeDataArr.push(tmpTimeObj);
    }

    var timeObj = tmpTimeDataArr.reduce(function (acc, cur, i) {
      acc[cur.id] = cur.name;
      return acc;
    }, {});

    this.setState({
      timesData: times,
      timesComboData: tmpTimeDataArr,
      timeObj: timeObj
    });
  };

  onStartDateChange = (value) => {
    this.calculateDateRange("startDate", value);
  };

  onEndDateChange = (value) => {
    this.calculateDateRange("endDate", value);
  };

  onTimeChange = (e, value) => {
    this.calculateDateRange("startTime", value);
  };

  durHourChange = (e) => {
    e.preventDefault();
    this.calculateDateRange("durHours", e.target.value);
  };

  durMinChange = (e) => {
    e.preventDefault();
    this.calculateDateRange("durMins", e.target.value);
  };

  handleCheckbox = (e) => {
    this.calculateDateRange("includeWeekend", e.target.checked);
  };

  setEverydaySchedule = (data) => {
    localStorage.setItem("everydaySch",JSON.stringify(data))
    if(data.length>0){
          localStorage.setItem("startDate",new Date(data[0].schedule))
          this.setState({
            startDate: new Date(data[0].schedule)
          })
          this.setState({
            everydaySch: data,
          })

          let lastItem=data.length
          localStorage.setItem("endDate",new Date(data[lastItem-1].schedule))
          this.setState({
            endDate: new Date(data[lastItem-1].schedule)
          })
          this.setState({
            everydaySch: data,
          })

        }
  };

  calculateDateRange = (stateAttr, value) => {
    const everydaySch = [];
    let {
      startDate,
      endDate,
      startTime,
      durHours,
      durMins,
      includeWeekend,
    } = this.state;
    let tmpStartTime = {};

    switch (stateAttr) {
      case "startDate":
        startDate = value;
        break;

      case "endDate":
        endDate = value;
        break;

      case "startTime":
        startTime = value;
        break;

      case "durHours":
        durHours = value;
        break;

      case "durMins":
        durMins = value;
        break;
      case "includeWeekend":
        includeWeekend = value;
        break;
    }

    if (!startDate) {
      startDate = new Date();
    }
    if (!endDate) {
      endDate = new Date();
    }

    startDate.setHours(0, 0, 0);
    endDate.setHours(0, 0, 0);

    if (startDate > endDate) {
      endDate = startDate;
    }

    tmpStartTime[startTime.id] = startTime.name;

    // Strip hours minutes seconds etc.
    let currentDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );

    let scheduleObj = {
      day: "Day ",
      schedule: "",
      startTime: "",
      endTime: "",
    };

    for (let i = 1; currentDate <= endDate; i++) {
      var isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6;

      var tmpSchObj = $.extend(true, {}, scheduleObj);
      tmpSchObj.day += i;
      tmpSchObj.schedule = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
      }).format(currentDate);

      tmpSchObj.startTime = startTime.id;

      tmpSchObj.endTime = startTime.id + durHours * 2;

      if (tmpSchObj.endTime > 47) {
        tmpSchObj.endTime = 47;
      }

      if (isWeekend) {
        if (includeWeekend) {
          everydaySch.push(tmpSchObj);
        }
      } else {
        everydaySch.push(tmpSchObj);
      }

      currentDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() + 1 // Will increase month if over range
      );
    }

    localStorage.setItem("everydaySch", JSON.stringify(everydaySch))
    localStorage.setItem("startDate", startDate)
    localStorage.setItem("endDate", endDate)
    localStorage.setItem("includeWeekend",includeWeekend)
    this.setState({
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      durHours: durHours,
      durMins: durMins,
      everydaySch: $.extend(true, [], everydaySch),
      includeWeekend: includeWeekend,
    });
  };

  componentDidUpdate(prevProps) {
    var data = {
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      startTime: this.state.startTime,
      durHours: this.state.durHours,
      durMins: this.state.durMins,
      includeWeekend: this.state.includeWeekend,
      everydaySch: this.state.everydaySch,
      timeObj: this.state.timeObj,
    };
      if(this.props.editScheduledCourseDetails!== undefined){
      if (this.props.fieldValues.everydaySch !== prevProps.fieldValues.everydaySch){
            this.setState({startDate: new Date(this.props.editScheduledCourseDetails.startDate),
                             endDate: new Date(this.props.editScheduledCourseDetails.endDate),
                             includeWeekend: this.props.fieldValues.includeWeekend,
                             everydaySch: this.props.fieldValues.everydaySch})
        }
      }

    if (this.props.saveValues) {
      this.props.saveValues(data);
    }
  }

  render() {
    const {
      startDate,
      endDate,
      startTime,
      durHours,
      durMins,
      timesData,
      everydaySch,
      timeObj,
      timesComboData,
      includeWeekend,
      displayEverydaySchedule
    } = this.state;

    const calDate = [startDate, endDate];

    const cols = [
      { title: "Day", field: "day", editable: "never" },
      { title: "Schedule", field: "schedule", type: "date", editable: "never" },
      {
        title: "Start Time",
        field: "startTime",
        lookup: timeObj,
      },
      {
        title: "End Time",
        field: "endTime",
        lookup: timeObj,
      },
    ];

    const optionRows = [];
    const minRowSet = [0, 15, 30, 45];
    const optionMinRows = [];

    for (let i = 1; i < 13; i++) {
      optionRows.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }

    minRowSet.map(function (min) {
      optionMinRows.push(
        <option key={min} value={min}>
          {min}
        </option>
      );
    });

    return (
      <ScheduleCourseStyle>
      <div>
        <fieldset className="needs-validation fieldset1">
          <div className="schedule-title">
            Schedule
          </div>
          <div className="scheduleMainContainer">
            <Row>
              <Col xs={12} md={8}>
                <Row>
                  <Col xs={12} md={6}>
                    <label className="required">
                      Start Date
                    </label>
                    <DatePicker selected={startDate}
                                onChange={this.onStartDateChange}
                                dateFormat="dd/MMM/yyyy"
                                className="datepicker-no-focus form-control"
                                minDate={new Date()} />
                  </Col>
                  <Col xs={12} md={6}>
                    <label className="required">
                      End Date
                    </label>
                    <DatePicker selected={endDate}
                                onChange={this.onEndDateChange}
                                dateFormat="dd/MMM/yyyy"
                                className="datepicker-no-focus form-control"
                                minDate={startDate}/>
                  </Col>
                  <Col xs={12} md={6}>
                    <label className="required time-label">
                      Start Time
                    </label>
                    <ComboBox
                      id="starttime-id"
                      optionsList={timesComboData}
                      isClearable={false}
                      label="Start Time"
                      onChange={this.onTimeChange}
                      defaultValue={startTime}
                      className="schedule-timeSelect form-control"
                      style={{ height: "30px" }}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <label className="required">Duration</label>
                    <Row className="justify-content-center align-items-center">
                      <Col xs={4} md={4}>
                        <select
                          className="schedule-timeSelect form-control"
                          id="inHours"
                          defaultValue={durHours}
                          onChange={this.durHourChange}
                        >
                        {optionRows}
                      </select>
                      </Col>
                      <Col xs={2} md={2}>
                      <label
                        htmlFor="inHours"
                        className="inline-label"
                        style={{ margin: "0 10px" }}
                      >
                        Hrs
                      </label>
                      </Col>
                      <Col xs={4} md={4}>
                        <select
                          className="schedule-timeSelect form-control" 
                          id="inMins"
                          defaultValue={durMins}
                          onChange={this.durMinChange}
                        >
                          {optionMinRows}
                        </select>
                      </Col>
                      <Col xs={2} md={2}>
                        <label htmlFor="inMins" className="inline-label">Mins</label>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={12}>
                    <div className="custom-control custom-checkbox pl2 ignoreWeekend">
                      <input
                        onChange={this.handleCheckbox}
                        id="weekendCheck"
                        type="checkbox"
                        checked={includeWeekend}
                        className="custom-control-input"
                      />
                      <label htmlFor="weekendCheck" className="custom-control-label">
                        Include Weekends
                      </label>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} md={4}>
                <div className="calendar-everyday-container">
                  <fieldset className="fieldset2">
                    <div>
                      <Calendar
                        onChange={this.onDateRangeChange}
                        value={calDate}
                        selectRange={true}
                        tileClassName={({activeStartDate, date, view }) => !includeWeekend && (date.getDay() === 0 || date.getDay()===6) ? "disableWeekend disable-calendar": "disable-calendar"}
                        minDate={new Date()}
                      />
                    </div>
                  </fieldset>
                </div>
              </Col>

            </Row>

            <Row>
              <Col xs={12} md={12}>
                  <fieldset className="everyday-container">
                    <div className="schedule-title everydayTitle themeColor" onClick={() =>this.setState({displayEverydaySchedule:!displayEverydaySchedule})}>
                      Customize
                      <FontAwesomeIcon icon="chevron-down" style={{marginLeft:"5px",paddingTop:"3px"}}/>
                    </div>
                      {displayEverydaySchedule &&  <EverydaySchedule
                          columns={cols}
                          data={everydaySch}
                          setEverydaySchedule={this.setEverydaySchedule}
                        /> }
                  </fieldset>
              </Col>
            </Row>
            
          </div>
        </fieldset>
      </div>
      </ScheduleCourseStyle>
    );
  }
}
export default ScheduleCourse;
