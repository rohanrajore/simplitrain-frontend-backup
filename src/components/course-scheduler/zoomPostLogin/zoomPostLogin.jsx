import React, { useState } from "react";
import "./zoomPostLogin.css";

const ZoomPostLogin = (props) => {

  const topicHandler = (e) => props.handleZoomPostLog("topic",e.target.value);
  const descriptionHandler = (e) => props.handleZoomPostLog("description",e.target.value);
  const passwordHandler = (e) => props.handleZoomPostLog("password",e.target.value);
  const autoRecordHandler = () => props.handleZoomPostLog("autoRecord",!props.zoomPostLog.autoRecord);
  const waitingRoomHandler = () => props.handleZoomPostLog("waitingRoom",!props.zoomPostLog.waitingRoom);
  const joinBeforeHostHandler = () => props.handleZoomPostLog("joinBeforeHost",!props.zoomPostLog.joinBeforeHost);
  const storageTypeHandler = (e) => props.handleZoomPostLog("storageType",e.target.value);

  const handleConfirmMeeting = async function () {
    await createMeetingAPI();
  };

  const copyToClipboard = (str) => {
    const el = document.createElement("textarea");
    el.value = props.zoomPostLog.meetingLink;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    props.handleZoomPostLog("copiedMsg",`Meeting link copied!`);
    setTimeout(() => {
      props.handleZoomPostLog("copiedMsg","")
    }, 5000);
  };

  const createMeetingAPI = async function () {
    try {

      let currCourseBatchID = localStorage.getItem("currentCourseBatchID");
      let url =
        process.env.REACT_APP_API_URL +
        "/zoom/meetings?userID=" +
        props.currentUser.id;
      url +=
        "&meetingType=" +
        props.zoomPostLog.type.toUpperCase() +
        "&courseBatchID=" +
        currCourseBatchID;

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", accept: "*/*" },
        body: JSON.stringify({
          "topic": props.zoomPostLog.topic,
          "agenda": props.zoomPostLog.description,
          "scheduling": JSON.parse(props.everydaySch),
          "password":props.zoomPostLog.password,
          "autoRecord":props.zoomPostLog.autoRecord,
          "settings": {
            "join_before_host": props.zoomPostLog.joinBeforeHost,
            "auto_recording": props.zoomPostLog.storageType,
            "waiting_room": props.zoomPostLog.waitingRoom
          }
        }),
      });
      const data = await response.json();
      console.log(data);

      if (data.actionResult === "SUCCESS") {
        props.handleZoomPostLog("meetingCreated",true);
        props.handleZoomPostLog("meetingTime",JSON.parse(props.everydaySch));
        props.handleZoomPostLog("meetingLink",data.zoomMeeting.join_url);

        localStorage.setItem("zoomMeetingURL", data.zoomMeeting.join_url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const convertTime = (value) => {
    // set minutes
    let minutes;
    value % 2 === 0 ? (minutes = "00") : (minutes = "30");

    //set hours
    let hours;
    const tmp = Math.trunc(value / 2);
    if (tmp < 11) {
      if (tmp <= 9) {
        hours = `0${tmp}`;
      } else {
        hours = tmp;
      }
    } else if (tmp === 12) {
      hours = "12";
    } else {
      let newTmp = tmp - 12;
      if (newTmp <= 9) {
        hours = `0${newTmp}`;
      } else {
        hours = newTmp;
      }
    }

    //set period
    let period;
    if (value >= 0 && value <= 23) {
      period = "AM";
    } else {
      period = "PM";
    }
    const convertedTime = `${hours}:${minutes} ${period}`;
    return convertedTime;
  };

  return (
    <div className="zoom-post-login-container">
      <div className="zoom-post-login-schedule">Schedule</div>
      <div className="zoom-post-login-intro">
        Zoom integration allows you to provide your learners with live 1:1 or
        group sessions, host live webinars.
      </div>

      <fieldset className="zoom-post-login-fieldset">
        <div className="zoom-fieldset-title">Zoom Setup</div>
        <label className="zoom-fieldset-label">Topic</label>
        <input
          type="text"
          className="zoom-fieldset-input"
          value={props.zoomPostLog.topic}
          onChange={topicHandler}
        />

        {/*This div will shows up when we create meeting*/}
        <div
          className="zoom-postCreate-meeting"
          style={{ display: props.zoomPostLog.meetingCreated === false ? "none" : "" }}
        >
          <div className="zoom-postCreate-info">
            <div>
              <b>Zoom Integration</b>
            </div>
            <div>
              {props.zoomPostLog.meetingTime.map((day) => (
                <div className="zoom-schedule-field" key={day.schedule}>
                  <div className="zoom-schedule-margin">{day.schedule}</div>
                  <div>
                    {convertTime(day.startTime)} - {convertTime(day.endTime)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className={
              props.zoomPostLog.copiedMsg === "" ? "zoom-postCreate-btn" : "zoom-approved-message"
            }
            onClick={copyToClipboard}
          >
            <b>{props.zoomPostLog.copiedMsg === "" ? "COPY MEETING LINK" : props.zoomPostLog.copiedMsg}</b>
          </div>
          <a
            href="https://zoom.us/"
            className="zoom-postCreate-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>MANAGE ON ZOOM</b>
          </a>
          <a
            href={props.zoomPostLog.meetingLink}
            className="zoom-postCreate-btn zoom-postCreate-btn2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <b>START MEETING</b>
          </a>
        </div>

        <label className="zoom-fieldset-label">Description</label>
        <textarea
          className="zoom-fieldset-input"
          rows="4"
          value={props.zoomPostLog.description}
          onChange={descriptionHandler}
        />
      </fieldset>

      <fieldset className="zoom-post-login-fieldset">
        <div className="zoom-fieldset-title">Scheduling</div>
        <label className="zoom-fieldset-label">When</label>
        <div className="zoom-schedule">
          {JSON.parse(props.everydaySch || "[]").map((day) => (
            <div className="zoom-schedule-field" key={day.schedule}>
              <div className="zoom-schedule-margin">{day.schedule}</div>
              <div>
                {convertTime(day.startTime)} - {convertTime(day.endTime)}
              </div>
            </div>
          ))}
        </div>
      </fieldset>

      <fieldset className="zoom-post-login-fieldset">
        <div className="zoom-fieldset-title">Meeting Security</div>
        <label className="zoom-fieldset-label">Meeting Password</label>
        <input
          type="text"
          className="zoom-fieldset-input shortenInput"
          value={props.zoomPostLog.password}
          onChange={passwordHandler}
        />
      </fieldset>

      <fieldset className="zoom-post-login-fieldset">
        <div className="zoom-fieldset-radioButtons">
          <input
            className="zoom-fieldset-radio"
            type="checkbox"
            id="recordAuto"
            name="recordAuto"
            value="recordAuto"
            checked={props.zoomPostLog.autoRecord}
            onChange={autoRecordHandler}
          />
          <label className="zoom-fieldset-radioLabel">
            Recording the meeting automatically
          </label>
        </div>

        <div
          className="zoom-fieldset-radioButtons"
          style={{
            display: props.zoomPostLog.autoRecord === true ? "" : "none",
            marginLeft: "25px",
          }}
        >
          <input
            className="zoom-fieldset-radio"
            type="radio"
            id="local"
            name="storageType"
            value="local"
            checked={props.zoomPostLog.storageType === "local"}
            onChange={storageTypeHandler}
          />
          <label className="zoom-fieldset-radioLabel">
            on the local computer
          </label>
        </div>

        <div
          className="zoom-fieldset-radioButtons"
          style={{
            display: props.zoomPostLog.autoRecord === true ? "" : "none",
            marginLeft: "25px",
          }}
        >
          <input
            className="zoom-fieldset-radio"
            type="radio"
            id="cloud"
            name="storageType"
            value="cloud"
            checked={props.zoomPostLog.storageType === "cloud"}
            onChange={storageTypeHandler}
          />
          <label className="zoom-fieldset-radioLabel">in the cloud</label>
        </div>

        <div className="zoom-fieldset-radioButtons">
          <input
            className="zoom-fieldset-radio"
            type="checkbox"
            id="enableJoin"
            name="enableJoin"
            value="enableJoin"
            checked={props.zoomPostLog.joinBeforeHost}
            onChange={joinBeforeHostHandler}
          />
          <label className="zoom-fieldset-radioLabel">
            enable join before host
          </label>
        </div>

        <div className="zoom-fieldset-radioButtons">
          <input
            className="zoom-fieldset-radio"
            type="checkbox"
            id="enableWaiting"
            name="enableWaiting"
            value="enableWaiting"
            checked={props.zoomPostLog.waitingRoom}
            onChange={waitingRoomHandler}
          />
          <label className="zoom-fieldset-radioLabel">
            Enable waiting room
          </label>
        </div>
      </fieldset>

      <div
        className="zoom-confirm-btn"
        onClick={handleConfirmMeeting}
        style={{ display: props.zoomPostLog.meetingCreated === true ? "none" : "" }}
      >
        Confirm Meeting
      </div>
    </div>
  )
};

export default ZoomPostLogin;
