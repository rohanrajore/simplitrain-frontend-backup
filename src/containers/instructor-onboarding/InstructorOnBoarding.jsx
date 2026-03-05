import { connect } from "react-redux";
import React, { Component } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import InstructorLocDetails from "../../components/instructor-onboarding/InstructorLocDetails";
import InstructorSocialMedia from "../../components/instructor-onboarding/InstructorSocialMedia";
import InstructorBankDetails from "../../components/instructor-onboarding/InstructorBankDetails";
import InstructorAgreement from "../../components/instructor-onboarding/InstructorAgreement";
import Stepper from "../../common/stepper/Stepper";

import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
// import "../../styles/instructorOnBoarding.scss";
import { PageTitleRow, OnboardingContainer, WizardSection } from "./InstructorOnBoarding.style";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";
// import "./instructorOnboarding.css"

import {
  nextStep,
  previousStep,
  setPendingApproval,
  hideLoader,
  showLoader,
  setInitialStep,
  submitRegistration,
} from "../../redux/instructor-onboarding/instructoronboarding.actions";
import Axios from "axios";

var assign = require("object-assign");

// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
  designation: null,
  address1: null,
  address2: null,
  city: null,
  state: null,
  zipcode: null,
  panNumber: null,
  socialBio: null,
  customURL: null,
  behanceURL: null,
  dribbleURL: null,
  vimeoURL: null,
  flikrURL: null,
  pinterestURL: null,
  yahooURL: null,
  redditURL: null,
  soundcloudURL: null,
  tumblrURL: null,
  twitterURL: null,
  facebookURL: null,
  linkedinURL: null,
  githubURL: null,
  instagramURL: null,
  youtubeURL: null,
  bankName: null,
  bankAcctName: null,
  bankAcctNo: null,
  bankBranchAddress: null,
  bankIFSCCode: null,
  bankTaxDetails: null,
  nationalId: null,
  nationalIdFilename: null,
  agreementAccepted: false,
};

const stepsArray = [
  "Personal Details",
  "Bio & Introduction",
  "Agreement",
  "Bank Details",
];

const onboardInitiate = [
  "INSTRUCTOR_PROFILE_INITIATED",
  "ONBOARDING_FORM_IN_PROGRESS",
  "SENT_BACK_FOR_CORRECTION",
];

export class InstructorOnBoarding extends Component {
  constructor(props) {
    super(props);
    props.showLoader();
    let uuid = props.currentUser.id;
    let url =
      process.env.REACT_APP_API_URL + "/instructor/" + uuid + "/onboarding";
    Axios.get(url, { validateStatus: false }).then((response) => {
      var data = response.data;
      props.hideLoader();
      let msg;
      if (data) {
        if (onboardInitiate.indexOf(data.currentStatus) > -1) {
          fieldValues = assign({}, fieldValues, data);
          console.log(`data: ${JSON.stringify(data)}`);
          if (data.currentStep) {
            props.setInitialStep(data.currentStep);
          } else {
            props.setInitialStep(1);
          }
        } else if (data.currentStatus === "PENDING_APPROVAL") {
          props.setPendingApproval();
        } else if (data.currentStatus === "REJECTED") {
          msg = "Your onboarding request has been rejected. Redo onboarding";
        } else if (data.currentStatus === "SENT_BACK_FOR_CORRECTION") {
          msg = "Your onboarding request needs further correction. Please update the fields accordingly";
        }

        if (msg) {
          store.addNotification({
            title: "Onboarding status",
            message: msg,
            type: "danger",
            container: "top-right", // where to position the notifications
            animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
            animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
            dismiss: {
              duration: 3000,
            },
          });
        }
      }
    });
  }

  saveValues = (field_value) => {
    return function () {
      fieldValues = assign({}, fieldValues, field_value);
    }.bind(this)();
  };

  submitRegistration = (action) => {
    this.props.submitRegistration(
      fieldValues,
      this.props.currentUser.id,
      action,
      this.props.currentStep
    );
  };

  showStep = () => {
    const { currentStep, nextStep, previousStep } = this.props;
    switch (currentStep) {
      case 1:
        return (
          <InstructorLocDetails
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitRegistration={this.submitRegistration}
          />
        );
      case 2:
        return (
          <InstructorSocialMedia
            fieldValues={fieldValues}
            nextStep={nextStep}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitRegistration={this.submitRegistration}
          />
        );
      case 3:
        return (
          <InstructorAgreement
            fieldValues={fieldValues}
            previousStep={previousStep}
            saveValues={this.saveValues}
            nextStep={nextStep}
            submitRegistration={this.submitRegistration}
          />
        );
      case 4:
        return (
          <InstructorBankDetails
            fieldValues={fieldValues}
            previousStep={previousStep}
            saveValues={this.saveValues}
            submitRegistration={this.submitRegistration}
          />
        );
      default:
        return;
    }
  };

  componentDidMount() {}

  render() {
    const { currentStep, loading } = this.props;
    console.log(fieldValues)
    return (
      <OnboardingContainer>
          <PageTitleRow>
            <div className="pageTitle page-section">
              <Container>
                  <h4>Become an Instructor</h4>
                  <h6>Share your knowledge with the world</h6>
                  {/* <Breadcrumb>
                  <Breadcrumb.Item href="#"><img src={HomeIcon}/> Home</Breadcrumb.Item>
                  <Breadcrumb.Item active>My Wishlist</Breadcrumb.Item>
                </Breadcrumb> */}
              </Container>
            </div>
          </PageTitleRow>
          <div class="page-section">
            <Container>
              <WizardSection>
                <div className="wizard-steps">
                  <h3 className="title">Schedule Course</h3>
                  <Stepper
                    direction="vertical"
                    currentStepNumber={currentStep - 1}
                    steps={stepsArray}
                    stepColor="#ee5253"
                  />
                </div>
                <div className="wizard-sections"> {this.showStep()} </div>
                <FullPageLoader loading={loading} />
              </WizardSection>
            </Container>
          </div>
      </OnboardingContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    currentStep: state.onboarding.currentStep,
    dataSaved: state.onboarding.dataSaved,
    currentUser: state.user.currentUser,
    loading: state.onboarding.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextStep: () => dispatch(nextStep()),
    previousStep: () => dispatch(previousStep()),
    submitRegistration: (fieldValues, currentUserId, action, currentStep) =>
      dispatch(
        submitRegistration(fieldValues, currentUserId, action, currentStep)
      ),
    showLoader: () => dispatch(showLoader()),
    hideLoader: () => dispatch(hideLoader()),
    setInitialStep: (initStep) => dispatch(setInitialStep(initStep)),
    setPendingApproval: () => dispatch(setPendingApproval()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InstructorOnBoarding);
