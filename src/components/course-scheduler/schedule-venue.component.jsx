import React, { Component } from "react";
import VenueCard from "./venue-card.component";
import OnlineVenue from "./online-venue.component";
import OnsiteVenue from "./onsite-venue";
import { Route, Switch, Link } from "react-router-dom";
import {ScheduleVenueStyle} from './onsite-venue/Onsite-venue.style';
import { Col, Container, Row } from 'react-bootstrap';

class ScheduleVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOnline: props.fieldValues.selectedOnline || "zoom",
      currentUser: props.currentUser,
      zoomPostLog:{
         meetingCreated: false,
         topic: "",
         description:"",
         type:"meeting",
         password: "",
         autoRecord: false,
         waitingRoom: false,
         joinBeforeHost: false,
         meetingLink: "",
         copiedMsg: "",
         meetingTime: [],
         storageType: "local"
      }
    };
  }

  handleZoomPostLog = (name, value) => {
            let copy = this.state.zoomPostLog
            copy[name]= value
            this.setState({zoomPostLog: copy})
          }

  handleVenueChange = (e) => {
    var id = e.target.id || e.target.parentElement.id;
    if (id === "onsite") {
      this.props.manualyHandleFieldValue("venueType","ONSITE")
    } else if (id === "online") {
      this.props.manualyHandleFieldValue("venueType","ONLINE")
    }
  };

  handleOnlineVenueChange = (data) => {
    this.setState(data);
  };

  nextStep = (e) => {
    e.preventDefault();
    this.continueProcessing("next");
  };

  previousStep = (e) => {
    e.preventDefault();
    this.continueProcessing("previous");
  };

  continueProcessing = (hasStep) => {
    this.fetchValuesAndSave(true);

    switch (hasStep) {
      case "next":
        this.props.nextStep();
        break;
      case "previous":
        this.props.previousStep();
        break;
      default:
        return;
    }
  };

  fetchValuesAndSave = (isSave) => {
    var data = {
      selectedOnline: this.state.selectedOnline
    };

    if (isSave) {
      this.props.saveValues(data);
    }

    return data;
  };

  componentDidUpdate(prevProps) {
      if(this.props.editScheduledCourseDetails!== undefined){
        if(this.props.editScheduledCourseDetails.zoomMeeting!== null){
            if (this.props.editScheduledCourseDetails !== prevProps.editScheduledCourseDetails){
               let copy=this.state
               let currentZoomDetails= this.props.editScheduledCourseDetails.zoomMeeting
               copy.zoomPostLog.topic= currentZoomDetails.topic
               copy.zoomPostLog.description= currentZoomDetails.agenda
               copy.zoomPostLog.password= currentZoomDetails.password
               copy.zoomPostLog.storageType= currentZoomDetails.settings.auto_recording===("local" || "none")?"local":"cloud"
               copy.zoomPostLog.autoRecord= currentZoomDetails.settings.auto_recording===("local" || "cloud")?true:false
               copy.zoomPostLog.waitingRoom= currentZoomDetails.settings.waiting_room
               copy.zoomPostLog.joinBeforeHost= currentZoomDetails.settings.join_before_host
                  this.setState(copy)
              }
          }
      }
  }

  render() {
    const {
      selectedOnline,
      currentUser
    } = this.state; console.log(this.state.zoomPostLog)
    const everydaySch = localStorage.getItem("everydaySch");
    const currentPath= window.location.pathname
    const activeButton =
      currentPath.includes("/venue/online/zoom-login")
        ? "online"
        : currentPath.includes("/venue/online/zoom-details")
        ? "online"
        : currentPath.includes("/venue/online/custom")
        ? "online"
        : currentPath.includes("/venue/online/zoom-landing")
        ? "online"
        : "onsite";
    return (
      <ScheduleVenueStyle>
        <form>
          <div className="venue-container">
            <div className="float-container venue-tabs">
              <div
                id="online"
                className={`float-child online ${
                  activeButton === "online" ? "selected" : ""
                }`}
                onClick={this.handleVenueChange}
              >
                <Link
                  to={this.props.prefixPath + "/venue/online/custom"}
                  className="venueType-link"
                >
                  Online
                </Link>
              </div>

              <div
                id="onsite"
                className={`float-child onsite ${
                  activeButton === "onsite" ? "selected" : ""
                }`}
                onClick={this.handleVenueChange}
              >
                <Link
                  to={this.props.prefixPath + "/venue/onsite"}
                  className="venueType-link"
                >
                  Onsite
                </Link>
              </div>
            </div>
            <div className="venue-cont">
              <Switch>
                <Route
                  path={this.props.prefixPath + "/venue/onsite"}
                  exact
                  render={(props) => <OnsiteVenue
                                              fieldValues={this.props.fieldValues}
                                              manualyHandleFieldValue={this.props.manualyHandleFieldValue}/>}
                  publicRoute
                />
                <Route
                  path={this.props.prefixPath + "/venue/online"}
                  render={(props) => (
                    <OnlineVenue
                      selectedOnline={selectedOnline}
                      fieldValues={this.props.fieldValues}
                      handleFieldValues={this.props.handleFieldValues}
                      manualyHandleFieldValue={this.props.manualyHandleFieldValue}
                      handleChange={this.handleOnlineVenueChange}
                      everydaySch={everydaySch}
                      currentUser={currentUser}
                      handleCustomMeetingDetails={this.props.handleCustomMeetingDetails}
                      prefixPath={this.props.prefixPath}
                      zoomPostLog={this.state.zoomPostLog}
                      handleZoomPostLog={this.handleZoomPostLog}
                    />
                  )}
                  publicRoute
                />
              </Switch>
            </div>
          </div>
          <div className="form-footer venue-footer"></div>
        </form>
      </ScheduleVenueStyle>
    );
  }
}

export default ScheduleVenue;
