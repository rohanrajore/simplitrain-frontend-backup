import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Prompt, useHistory } from "react-router-dom";
import Wizard from "./Wizard";
import Overview from "./Overview";
import Curriculum from "./Curriculum";
import Target from "./Target";
import Messages from "./Messages";
import NavigationBlocker from "../../common/navigationBlocker/navigationBlocker.js";
import createCourseAPI from "./API/createCourseAPI";
import { courseCategories } from "./common/FormInputs";
import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
import Axios from "axios";
import $ from "jquery";
import useS3Fetch from "../../common/s3ImageFetch/useS3Fetch.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import {Link} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { HeaderContainer } from "../create-course/header.style";


//import "./assets/wizard.css";
import "./assets/form.css";
import "./assets/courses.css";


function CreateCourse(props) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [courseImage, setCourseImage] = useState("")
  const updateCourseImage = value =>setCourseImage(value)
  const [valuesSaved,setValuesSaved]= useState(false)
  const history = useHistory();

  useEffect(()=>{
      updateCourseImage(props.editCourseDetails!=undefined? props.editCourseDetails.courseImage: "")
    },[props.editCourseDetails])

  // handle Data Submit
  const handleSubmit = async () => {
    setLoading(true);
    const data = {};
    const fields = formRef.current.querySelectorAll("input, select, textarea");
    fields.forEach((field) => {
      const { name, value } = field;
      data[name] = value;
    });

    const curriculum = [];
    const arr = Object.keys(data).filter((key) => key.startsWith("curriculum"));
    arr.forEach((key) => {
      const [, group, type] = key.split("_");
      if (!curriculum[group]) curriculum[group] = {};
      let tmp;
      if (type === "title") {
        curriculum[group]["title"] = data[key];
      } else if (type === "desc") {
        curriculum[group]["description"] = data[key];
      } else {
        if (curriculum[group]["courseTopics"] != undefined)
          curriculum[group]["courseTopics"].push(data[key]);
        else {
          curriculum[group]["courseTopics"] = [];
          curriculum[group]["courseTopics"].push(data[key]);
        }
      }
    });

    let curriculumValues = Object.values(curriculum)

    const tags = Object.keys(data)
      .filter((key) => key.startsWith("tag"))
      .map((k) => data[k]);
    const targetAudience = Object.keys(data)
      .filter((key) => key.startsWith("audience"))
      .map((k) => data[k]);
    const highlights = Object.keys(data)
      .filter((key) => key.startsWith("highlights"))
      .map((k) => data[k]);
    const requirements = Object.keys(data)
      .filter((key) => key.startsWith("requirements"))
      .map((k) => data[k]);

    await createCourseAPI(
      props.currentUser.id,
      props.courseID != undefined ? props.courseID : "",
      data.title,
      data.subtitle,
      data.description,
      data.language.toUpperCase(),
      data.level.toUpperCase(),
      data.category,
      data.subcategory,
      tags,
      courseImage,
      "videoURL",
      highlights,
      requirements,
      targetAudience,
      curriculumValues,
      data.welcome,
      data.congrats
    );
    // This will allows us to leave page and redirects us to the dashboard
    setValuesSaved(true)
    window.onbeforeunload = null
    let coursePurpose;
    window.location.pathname.includes("edit-course") === true
      ? (coursePurpose = "edited")
      : (coursePurpose = "created");
  store.addNotification({
    title: `SUCCESS`,
    message: `Your course has been ${coursePurpose} successfully.`,
    type: "success",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],

    dismiss: {
      duration: 4000
    },
  })
  history.push("/instructor-dashboard/courses")
};

  // These are dummy functions that schedule course wizard uses, so we must add them here also because they use same code.
  const incrementStepNumber = () => {};
  const decrementStepNumber = () => {};
  const handleRerender = () => {};

  const saveAndExitCreateCourse = () => {
    // This will allows us to leave page and redirects us to the dashboard
    setLoading(true)
    setValuesSaved(true)
    window.onbeforeunload = null
    store.addNotification({
      title: `SUCCESS`,
      message: `Your course details has been saved successfully`,
      type: "success",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000
      },
    })              // Here we added timeout to 100ms, so setValuesSaved can be set to true, and our navigation block dont load
                    // When we add API call to this function, we will remove timeout as it wont be needed anymore
    setTimeout(function(){history.push("/instructor-dashboard/courses")},100)
  };
console.log(valuesSaved)
  return (
    <React.Fragment>

      {valuesSaved===false &&  <NavigationBlocker navigationBlocked={valuesSaved===false} />}



      <div className="wizard-container" ref={formRef}>
      <HeaderContainer>
          <div className="header-container page-section">
            <Container>
                  <div className="header-content">
                        <div className="header-title">Create & Schedule Course</div>
                        <div className="header-path">
                          <Link className="header-link-color"> And share your knowledge with the world</Link>
                        </div>
                  </div>
            </Container>
        </div>
        </HeaderContainer>

      <div className="page-section">
          <Wizard
            title={window.location.pathname.includes("edit-course") === true?"Edit Course": "Create Course"}
            startAt={0}
            handleCreateCourseSubmit={handleSubmit}
            handleRerender={handleRerender}
            incrementStepNumber={incrementStepNumber}
            decrementStepNumber={decrementStepNumber}
            handleRerender={handleRerender}
            saveAndExitCreateCourse={saveAndExitCreateCourse}
            editCourseDetails={props.editCourseDetails}
          >
            <Overview
              title="Course Overview"
              arg={1}
              editCourseDetails={props.editCourseDetails}
              courseImage={courseImage}
              updateCourseImage={updateCourseImage}
            />
            <Target
              title="Target Your Students"
              arg={1}
              editCourseDetails={props.editCourseDetails}
            />
            <Curriculum
              title="Course Curriculum"
              arg={1}
              editCourseDetails={props.editCourseDetails}
            />
            <Messages
              title="Course Messages"
              onSubmit={handleSubmit}
              arg={1}
              editCourseDetails={props.editCourseDetails}
            />
          </Wizard>
        </div>
        <FullPageLoader loading={loading} />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(CreateCourse);
