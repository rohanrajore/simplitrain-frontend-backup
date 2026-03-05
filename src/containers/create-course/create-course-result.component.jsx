import React, { Component } from "react";

class CreateCourseResult extends Component {
  showNotification = (success) => {
    switch (success) {
      case "success":
        return (
          <div className="notification-container">
            <i className="fa fa-check-circle notify success"></i>
            <h1>Congratulations!</h1>
            <p>You have successfully created a course</p>
          </div>
        );
      case "failed":
        return (
          <div className="notification-container">
            <i className="fa fa-exclamation-triangle notify failure"></i>
            <p>
              We regret that the course creation did not go through. You can
              either retry filling in your enrollment or contact administrator
              for further processing.
            </p>
          </div>
        );
      case "info":
        return (
          <div className="notification-container">
            <i className="fa fa-info-circle notify"></i>
            <p>
              Your create course request is currently under review. Please wait
              for further instructions.
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

export default CreateCourseResult;
