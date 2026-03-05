import React, { Component } from "react";
import { connect } from "react-redux";
import ZoomIcon from "../../styles/images/onlineVenue/zoomIcon.jpeg";
import ZohoIcon from "../../styles/images/onlineVenue/zoho.png";
import ZoomPostLogin from "./zoomPostLogin/zoomPostLogin.jsx";
import ZoomLanding from "./zoomLanding/zoomLanding.jsx";
import ReactQuill from "react-quill";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Base64 } from "js-base64";
import "./online-venue.component.css";

import "react-quill/dist/quill.snow.css";

class OnlineVenue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zoomLoginUrl:
        "https://zoom.us/oauth/authorize?response_type=code&client_id=" +
        process.env.REACT_APP_ZOOM_CLIENTID +
        "&redirect_uri=" +
        process.env.REACT_APP_ZOOM_REDIRECT_URI,
    };
  }

  handleOnlineVenueChange = (e) => {
    var id = e.target.id || e.target.parentElement.id;
    var selectedOnline = "";

    if (id === "zoomIcon") {
      this.props.manualyHandleFieldValue("selectedOnline", "ZOOM");
    } else if (id === "customIcon") {
      this.props.manualyHandleFieldValue("selectedOnline", "CUSTOM");
    }
  };

  render() {
    const {
      selectedOnline,
      fieldValues,
      handleCustomMeetingDetails,
      everydaySch,
      currentUser,
      prefixPath
    } = this.props;
    // Here we will check URL that zoom returns to us, and will search for code parameter if it exists, and if exists what value is it.
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const zoomCode = urlParams.get("code");
    const currentPath = window.location.pathname;

    const getAccessTokenAPI = async function () {
      await localStorage.removeItem("zoomAuth");
      let url = process.env.REACT_APP_API_URL + "/zoom/generate-access-token";
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          zoomCode: zoomCode,
          userID: currentUser.id,
        }),
      });
      const data = await response.json();
      console.log(data);
      if (data.actionResult==="SUCCESS") {
        localStorage.setItem("zoomAuth", data.actionResult);
      }

    };

    return (
      <div className="float-container">
        <div className="online-venue-icons">
          <Link
            to={prefixPath + "/venue/online/zoom-login"}
            id="zoomIcon"
            className={`float-child-img onlineCustomMeeting ${
              currentPath === prefixPath + "/venue/online/zoom-login" ||
              currentPath === prefixPath + "/venue/online/zoom-details"
                ? "selectedBox"
                : ""
            }`}
            onClick={this.handleOnlineVenueChange}
            style={{ border: "none", marginRight: "50px" }}
          >
            <img src={ZoomIcon} className="icon-img" alt="" />
          </Link>
          <Link
            to={prefixPath + "/venue/online/custom"}
            id="customIcon"
            className={`float-child-img onlineCustomMeeting ${
              currentPath === prefixPath + "/venue/online/custom"
                ? "selectedBox"
                : ""
            }`}
            onClick={this.handleOnlineVenueChange}
            style={{ border: "none" }}
          >
            <div>Custom meeting</div>
          </Link>
        </div>

        <div className="input-group pt-2">
          <Switch>
            <Route
              path={prefixPath + "/venue/online/custom"}
              exact
              render={(props) => (
                <div className="onlineCustomMeeting-container">
                  <label>Enter custom meeting details:</label>
                  <textarea
                    value={fieldValues.customOnlineMeetingDetails}
                    onChange={handleCustomMeetingDetails}
                    rows="12"
                    cols="50"
                  />
                </div>
              )}
              publicRoute
            />

            <Route
              path={prefixPath + "/venue/online/zoom-login"}
              exact
              render={(props) =>
                localStorage.getItem("zoomAuth") === "SUCCESS" ? (
                  <Redirect to={prefixPath + "/venue/online/zoom-details"} />
                ) : (
                  <div className="zoom-creds-container">
                    <a
                      className="zoom-login-btn"
                      href={this.state.zoomLoginUrl}
                      onClick={()=>{localStorage.setItem("isEdit",prefixPath.includes("edit-scheduled-course")?true:false)}}
                    >
                      {" "}
                      Login to Zoom Account
                    </a>
                    <a
                      className="zoom-create-btn"
                      href="https://zoom.us/signup"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Create a New Zoom Account{" "}
                    </a>
                  </div>
                )
              }
              publicRoute
            />

            <Route
              path={prefixPath + "/venue/online/zoom-landing"}
              render={(props) => (
                <ZoomLanding prefixPath={prefixPath}
                             getAccessTokenAPI={getAccessTokenAPI}
                />
              )}
              publicRoute
            />

            <Route
              path={prefixPath + "/venue/online/zoom-details"}
              exact
              render={(props) =>
                localStorage.getItem("zoomAuth") === "SUCCESS" ? (
                  <ZoomPostLogin
                    everydaySch={everydaySch}
                    currentUser={currentUser}
                    manualyHandleFieldValue={this.props.manualyHandleFieldValue}
                    zoomPostLog={this.props.zoomPostLog}
                    handleZoomPostLog={this.props.handleZoomPostLog}
                  />
                ) : (
                  <Redirect to={prefixPath + "/venue/online/zoom-login"} />
                )
              }
              publicRoute
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default OnlineVenue;
