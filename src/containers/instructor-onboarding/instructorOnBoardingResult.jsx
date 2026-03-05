import React, { Component } from "react";

export class InstructorOnBoardingResult extends Component {
  showNotification = (success) => {

    switch(success) {
      case 'success':
        return (
          <div className="notification-container">
            <i className="fa fa-check-circle notify success"></i>
            <h1>Congratulations!</h1>
            <p>
              You have successfully enrolled yourself as an instructor. There are
              hundred of learners out there waiting to learn the skills from you.
              Share your knowledge with the world.
            </p>
          </div>
        );
      case 'failed': 
        return (
          <div className="notification-container">
            <i className="fa fa-exclamation-triangle notify failure"></i>
            <p>
              We regret that your enrollment did not go through. You can either
              retry filling in your enrollment or contact administrator for
              further processing.
            </p>
          </div>
        );
      case 'info':
        return (
          <div className="notification-container">
            <i className="fa fa-info-circle notify"></i>
            <p>
              Your instructor onboarding request is currently under review.
              Please wait for further instructions.
            </p>
          </div>
        );
      default:
        return;
      }
  };
  
  render() {
    return <div>{this.showNotification(this.props.success)}</div>;
  }
}

export default InstructorOnBoardingResult;
