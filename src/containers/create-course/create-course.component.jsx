import React, { Component } from "react";
import { connect } from "react-redux";
import Stepper from "../../common/stepper/Stepper";

import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
import "./create-course.styles.scss";
import CourseOverviewComponent from "../../components/create-course/course-overview.component";
import CourseMessagesComponent from "../../components/create-course/course-messages.component";

import {
  nextStep,
  previousStep,
  submitCreateCourse,
  hideLoader,
  showLoader,
  setInitialStep,
  resetStep,
} from "../../redux/create-course/create-course.actions";
import Axios from "axios";
import TargetYourStudentsComponent from "../../components/create-course/target-your-students.components";

let assign = require("object-assign");

//The final object is stored here
let defaultFieldValues = {
  courseID: "",
  title: "",
  subTitle: "",
  description: "",
  welcomeMessage: "",
};

const stepsArray = [
  "Course Overview",
  "Target Your Learners",
  "Course Messages",
];

class CreateCourseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldValues: defaultFieldValues,
    };

    props.resetStep();
    //condition to check if edit is pressed
    if (this.props.location.state?.courseID) {
      const courseID = this.props.location.state.courseID;
      console.log(`courseID: ${courseID}`);
      props.showLoader();
      let url = process.env.REACT_APP_API_URL + "/courses/" + courseID;
      Axios.get(url, { validateStatus: false }).then((response) => {
        var data = response.data;
        props.hideLoader();
        console.log(`data: ${JSON.stringify(data)}`);
        if (data) {
          console.log("setting state now");
          this.setState(
            {
              fieldValues: {
                courseID: courseID,
                title: data.title,
                subTitle: data.subTitle,
                description: data.description,
                welcomeMessage: data.welcomeMessage,
              },
            },
            () => {
              console.log(
                `state modified within the constructor for edit course: ${JSON.stringify(
                  this.state.fieldValues
                )}`
              );
            }
          );
          // this.setState();
        }
      });
    } else {
      this.state.fieldValues = defaultFieldValues;
      console.log(
        `state modified within the constructor for create course: ${JSON.stringify(
          this.state.fieldValues
        )}`
      );
    }
    // props.setInitialStep(0);
  }

  //This function is called when save values is clicked
  saveValues = (field_value, isSubmit) => {
    return function () {
      console.log(
        `Inside saveValues field_value: ${JSON.stringify(
          field_value
        )}, isSubmit: ${isSubmit}`
      );
      //TODO use Object.assign() instead
      this.setState(
        {
          fieldValues: assign({}, this.state.fieldValues, field_value),
        },
        () => {
          this.submitCreateCourseWrapper(isSubmit);
        }
      );
    }.bind(this)();
  };

  submitCreateCourseWrapper = (isSubmit) => {
    console.log(`Inside submitCreateCourseWrapper(): ${isSubmit}`);
    if (isSubmit) {
      this.submitCreateCourse();
    }
  };

  //This function is called when create course button is clicked
  submitCreateCourse = () => {
    console.log(`Inside submitCreateCourse()`);

    this.props.submitCreateCourse(
      this.state.fieldValues,
      this.props.currentUser.id
    );

    this.setState({
      fieldValues: defaultFieldValues,
    });
  };

  showStep = () => {
    const { currentStep, nextStep, previousStep } = this.props;
    switch (currentStep) {
      case 1:
        return (
          <CourseOverviewComponent
            fieldValues={this.state.fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitCreateCourse={this.submitCreateCourse}
            key={this.state.courseID}
          />
        );
      case 2:
        return (
          <TargetYourStudentsComponent
            fieldValues={this.state.fieldValues}
            anyMessage="Hare Krishna"
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitCreateCourse={this.submitCreateCourse}
            key={this.state.courseID}
          />
        );

      case 3:
        return (
          <CourseMessagesComponent
            fieldValues={this.state.fieldValues}
            anyMessage="Hare Krishna"
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitCreateCourse={this.submitCreateCourse}
            key={this.state.courseID}
          />
        );

      default:
        return;
    }
  };

  render() {
    const { currentStep, loading } = this.props;

    return (
      <div>
        <div className="instructor-header">
          <span className="inst-header-main center-content">Create Course</span>
          <span className="inst-header-child center-content">
            Share your knowledge with the world
          </span>
        </div>
        <div className="flex-container">
          <div className="stepper-container-vertical">
            <Stepper
              direction="vertical"
              currentStepNumber={currentStep - 1}
              steps={stepsArray}
              stepColor="#ee5253"
            />
          </div>
          {this.showStep()}
          <FullPageLoader loading={loading} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentStep: state.createCourse.currentStep,
    currentUser: state.user.currentUser,
    loading: state.createCourse.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
    resetStep: () => dispatch(resetStep()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
    setInitialStep: (initStep) => dispatch(setInitialStep(initStep)),
    submitCreateCourse: (fieldValues, currentUserId) =>
      dispatch(submitCreateCourse(fieldValues, currentUserId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCourseComponent);
