import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WizardContainer } from "../create-course/assets/wizard.style";

function Wizard({
  incrementStepNumber,
  decrementStepNumber,
  handleRerender,
  title,
  children,
  startAt = 0,
  ...props
}) {
  const [stepValidated, setStepValidated] = useState(
    children.map((child) => true)
  );
  const [currentStep, setCurrentStep] = useState(startAt);
  const [validationError, setValidationError] = useState("");

  const prevStep = () => {
    if (currentStep > 0) {
      decrementStepNumber();
      setCurrentStep((step) => step - 1);
      setValidationError("");
    }
  };

  const nextStep = () => {
    const stepsLength = stepValidated.length;
    if (currentStep < stepsLength - 1) {
      // check if index is in range
      incrementStepNumber();
      setCurrentStep((step) => step + 1);
      setValidationError("");
    } else {
      console.log(`form end`);
    }
  };
  // Based on current URL we will see is it schedule or create course, and by that we will call corresponding submit fuction at the end.
  const currentURL = window.location.pathname;
  const history= useHistory()
  return (
    <WizardContainer>
    <section className="wizard page-section">
    <div>
      <div className="back-dashboard-btn" onClick={()=> history.push("/instructor-dashboard/courses")}>
              <FontAwesomeIcon icon="chevron-left" style={{marginRight:'7px'}}/> Back to instructor dashboard
      </div>
      <div className="wizard-steps">
        <h5>{title}</h5>
        <ul>
          {currentURL !== "/instructor/create-course" &&
          !currentURL.includes("/instructor/edit-course")
            ? children.map((child, i) => (
                <Link
                  key={child.type.name}
                  to={child.props.linkPath}
                  style={{ color: "grey" }}
                  onClick={
                    child.props.linkPath !== ""
                      ? () => handleRerender(child.props.arg)
                      : ""
                  }
                >
                  <li
                    className={`${i < currentStep ? "done" : ""} ${
                      i === currentStep ? "current" : ""
                    }`}
                    onClick={() => setCurrentStep(i)}
                  >
                    <span>{child.props.title || child.type.name}</span>
                  </li>
                </Link>
              ))
            : children.map((child, i) => (
                <li
                  key={child.type.name}
                  className={`${i < currentStep ? "done" : ""} ${
                    i === currentStep ? "current" : ""
                  }`}
                  onClick={() => setCurrentStep(i)}
                >
                  <span>{child.props.title || child.type.name}</span>
                </li>
              ))}
        </ul>
      </div>
      </div>
      <div className="wizard-sections">
        <React.Fragment>
          {React.Children.map(children || null, (child, i) => (
            <div
              key={i}
              className={`wizard-section ${i === currentStep ? "active" : ""}`}
            >
              {validationError !== "" && (
                <small className="error">{validationError}</small>
              )}
              <child.type
                {...child.props}
                showValidationError={setValidationError}
              />
            </div>
          ))}
        </React.Fragment>
        <div className="wizard-controls">
          {currentStep > 0 && (
            <button className="btn backBtn" onClick={() => prevStep()}>
              Back
            </button>
          )}

          <div
            className="btn blue"
            onClick={
              window.location.pathname !== "/instructor/create-course"
                ? props.saveAndExiTScheduleCourse
                : props.saveAndExitCreateCourse
            }
            style={{
              display: props.editCourseDetails !== undefined ? "none" : "",
            }}
          >
            Save & Exit
          </div>

          <div>
            {currentStep < stepValidated.length - 1 ? (
              <button className="btn blue" onClick={() => nextStep()}>
                Next
              </button>
            ) : (
              <button
                className="btn blue"
                onClick={
                  currentURL.includes("/pricing")
                    ? props.handleScheduleCourseSubmit
                    : props.handleCreateCourseSubmit
                }
              >
                Submit for review
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
    </WizardContainer>
  );
}

export default Wizard;
