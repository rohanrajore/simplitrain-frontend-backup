import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./instructorDashboard.scss";
import Header from "../../components/instructor-dashboard/header/header.jsx";
import LeftPanel from "../../components/instructor-dashboard/leftPanel/leftPanel.jsx";
import CoursesContainer from "../../components/instructor-dashboard/courses/coursesContainer.jsx";
import InstructorCourseContainer from "../../components/instructor-dashboard/instructorCourseDetails/instructorCourseContainer.jsx";
import BatchesContainer from "../../components/instructor-dashboard/batchesContainer/batchesContainer.jsx";
import SideDrawer from "../../components/instructor-dashboard/sideDrawer/sideDrawer.jsx";
import Backdrop from "../../components/instructor-dashboard/backDrop/backDrop.jsx";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faChevronRight,
  faSearch,
  faStar,
  faStarHalfAlt,
  faCalendar,
  faMapMarkerAlt,
  faRupeeSign,
  faEllipsisV,
  faChevronDown,
  faCircle,
  faChevronLeft,
  faBars,
  faFilter,
  faEnvelope,
  faCheckCircle,
  faUserCircle,
  faGripHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
import { useHistory } from "react-router-dom";
import { setLoggedInCount } from "../../redux/user/user.actions";

// Not all icons are used in this file, some of them are used in another components
library.add(
  faHome,
  faChevronRight,
  faSearch,
  faStar,
  faStarHalfAlt,
  far,
  faCalendar,
  faMapMarkerAlt,
  faRupeeSign,
  faEllipsisV,
  faChevronDown,
  faCircle,
  faChevronLeft,
  faBars,
  faFilter,
  faEnvelope,
  faCheckCircle,
  faUserCircle,
  faGripHorizontal,
  fab
);
function InstructorDashboard(props) {
  const [path, setPath] = useState("");
  const coursePathHandler = (e) => setPath("Courses");
  const schedulePathHandler = (e) => setPath("Batches");
  const [sideDrawer, setSideDrawer] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  // This is the name of course that will be passed to scheduled courses when clicked on course name
  const [courseName, setCourseName] = useState("");
  const [courseID, setCourseID] = useState("")
  const [leftPanelActiveTab, setLeftPanelActiveTab] = useState(2)

  const updateLeftPanelActiveTab= value => setLeftPanelActiveTab(value)
  const updateCourseName = (arg) => setCourseName(arg);
  const updateCourseID = (arg) => setCourseID(arg);
  const handleSideDrawer = (e) => {
    setSideDrawer(!sideDrawer);
    setBackDrop(!backDrop);
  };
  const history = useHistory();

  useEffect(() => {
    //props.coursePathHandler();
    let userId = props.currentUser.id;
    const isOnboarded =
      props.currentUser.instructor.onboardingStatus === "APPROVED";
    const isOnboardingPending =
      props.currentUser.instructor.onboardingStatus === "PENDING_APPROVAL";
    const isOnboardingRejected =
      props.currentUser.instructor.onboardingStatus === "REJECTED";
    const isOnboardingNeedsCorrection =
      props.currentUser.instructor.onboardingStatus ===
      "SENT_BACK_FOR_CORRECTION";

    if (isOnboardingRejected || isOnboardingNeedsCorrection) {
      history.push("/instructor/onboarding");
    }

    const msg = isOnboarded
      ? "You have been successfully onboarded"
      : isOnboardingPending
      ? "Your onboarding request is under review"
      : null;

    let typeO = '';
    if (isOnboardingRejected || isOnboardingNeedsCorrection) {
      typeO = 'warning';
    }
    else {
      typeO = 'info';
    }

    if (msg) {
      if (!(props.loggedInCount > 1)) {
        store.addNotification({
          title: "Onboarding status",
          message: msg,
          type: typeO,
          container: "top-right", // where to position the notifications
          animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
          animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
          dismiss: {
            duration: 3000,
          },
        });
        props.setLoggedInCount();
      }

    }
  }, []);

  useEffect(()=>{
    let path = window.location.pathname
    path.includes('/instructor-dashboard/courses/')? setLeftPanelActiveTab(2.5):
    path.includes('/instructor-dashboard/courses')? setLeftPanelActiveTab(2):
    setLeftPanelActiveTab(1)
  },[1])

  return (
    <div className="instructorDashboard">
      <Header path={path} handleSideDrawer={handleSideDrawer} />

      <div className="instructorDashboard-container page-section">
        <LeftPanel coursePathHandler={coursePathHandler}
                   activeTab={leftPanelActiveTab}
                   setActiveTab={setLeftPanelActiveTab} />
        {sideDrawer === true ? (
          <SideDrawer handleSideDrawer={handleSideDrawer} />
        ) : (
          ""
        )}
        {backDrop === true ? (
          <Backdrop handleSideDrawer={handleSideDrawer} />
        ) : (
          ""
        )}
        <Switch>
          <Route
            path="/instructor-dashboard/courses"
            exact
            render={(props) => (
              <CoursesContainer
                updateCourseName={updateCourseName}
                updateCourseID={updateCourseID}
                coursePathHandler={coursePathHandler}
                activeTab={leftPanelActiveTab}
                setActiveTab={setLeftPanelActiveTab}
                {...props}
              />
            )}
            instructor
          />
          <Route
            path="/instructor-dashboard/courses/:id"
            exact
            render={(props) => (
              <InstructorCourseContainer {...props} />
            )}
            instructor
          />
          <Route
            path="/instructor-dashboard/batches"
            exact
            render={(props) => (
              <BatchesContainer
                courseID={courseID}
                updateCourseID={updateCourseID}
                courseName={courseName}
                updateCourseName={updateCourseName}
                schedulePathHandler={schedulePathHandler}
                {...props}
              />
            )}
            instructor
          />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser,
    loggedInCount: state.user.loggedInCount
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInCount: () => dispatch(setLoggedInCount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InstructorDashboard);
