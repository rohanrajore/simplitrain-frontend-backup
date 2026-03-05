import { connect } from "react-redux";
import React, { Component } from "react";
import Stepper from "../../common/stepper/Stepper";
import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
import ScheduleCourse from "../../components/course-scheduler/schedule-course.component";
import {
  hideLoader,
  nextStep,
  previousStep,
  setInitialStep,
  showLoader,
} from "../../redux/course-scheduler/coursescheduler.actions";
import "./course-scheduler.scss";
import ScheduleVenue from "../../components/course-scheduler/schedule-venue.component";
import CoursePricing from "../../components/course-scheduler/course-pricing.component";

var assign = require("object-assign");
const stepsArray = ["Schedule", "Choose venue", "Pricing and Promotions"];

var fieldValues = {
  startDate: null,
  endDate: null,
  startTime: null,
  durHours: null,
  durMins: null,
  includeWeekend: null,
  everydaySch: [],
  isOnsite: false,
  isCustomOnline: false,
  selectedOnline: '',
  customOnlineText: '',
  currency: null,
  actualPrice: null,
  discountedPrice: null,
  couponList: []
};

class CourseScheduler extends Component {
  constructor(props) {
    super(props);
    props.showLoader();
    props.setInitialStep(1);
    props.hideLoader();
  }

  saveValues = (field_value) => {
    return function () {
      fieldValues = assign({}, fieldValues, field_value);
    }.bind(this)();
  };

  showStep = () => {
    const { currentStep, nextStep, previousStep } = this.props;
    switch (currentStep) {
      case 1:
        // Has the Scheduler component
        return (
          <ScheduleCourse
            fieldValues={fieldValues}
            nextStep={nextStep}
            saveValues={this.saveValues}
          />
        );
      case 2:
        // Has the Venue component
        return (
          <ScheduleVenue
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
          />
        );
      case 3:
        // Has the Pricing component
        return (
          <CoursePricing
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
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
  return {
    currentStep: state.courseScheduler.currentStep,
    currentUser: state.user.currentUser,
    loading: state.courseScheduler.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
    setInitialStep: (initStep) => dispatch(setInitialStep(initStep)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseScheduler);
