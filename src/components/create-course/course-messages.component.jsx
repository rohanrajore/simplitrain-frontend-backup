import React, { Component } from "react";
import Axios from "axios";
import { enableFormButton } from "../../common/form-validation/formValidation";

class CourseMessagesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      welcomeMessage: props.fieldValues?.welcomeMessage || "",
      formErrors: {
        welcomeMessage: "",
      },
      isNextEnabled: true,
    };

    console.log(
      `CourseMessagesComponent:: Inside constructor state is ${JSON.stringify(
        this.state
      )}`
    );

    console.log(`anyMessage is ${props.anyMessage}`);
    this.state.isNextEnabled = this.formValid();
  }

  nextStep = (e) => {
    this.props.nextStep();
  };

  previousStep = (e) => {
    this.fetchValuesAndSave();
    this.props.previousStep();
  };

  submitCreateCourse = (e) => {
    e.preventDefault();
    this.fetchValuesAndSave(true);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "welcomeMessage":
        formErrors.welcomeMessage =
          value.welcomeMessage < 1 ? "Enter a welcome message" : "";
        break;

      default:
        break;
    }

    let isEnabled = this.formValid({
      name: name,
      value: value,
      cond: formErrors[name] === "",
    });

    this.setState({ formErrors, [name]: value, isNextEnabled: isEnabled });
  };

  formValid = (addlChk) => {
    let reqObjList = {
      title: this.state.title,
    };

    if (addlChk) {
      return (
        enableFormButton({ [addlChk.name]: addlChk.value, ...reqObjList }) &&
        addlChk.cond
      );
    } else {
      return enableFormButton(reqObjList);
    }
  };

  fetchValuesAndSave = (isSubmit) => {
    // Get values via this.refs
    var data = {
      welcomeMessage: this.state.welcomeMessage,
    };
    console.log(
      `Inside fetchValuesAndSave data: ${JSON.stringify(
        data
      )} isSubmit: ${isSubmit}`
    );

    this.props.saveValues(data, isSubmit);

    return data;
  };

  render() {
    const { formErrors } = this.state;
    return (
      <form className="container">
        <div className="form-group">
          <div className="form-group col-md-12">
            <label htmlFor="welcomeMessage">Welcome Message</label>
            <input
              type="text"
              className="form-control"
              id="welcomeMessage"
              name="welcomeMessage"
              ref="welcomeMessage"
              placeholder="Welcome Message"
              value={this.state.welcomeMessage}
              onChange={this.handleChange}
            />
            {formErrors.welcomeMessage.length > 0 && (
              <div className="text-danger">
                <small>{formErrors.welcomeMessage}</small>
              </div>
            )}
          </div>
        </div>

        <div className="form-footer">
          <button
            className="pull-left btn -primary"
            onClick={this.previousStep}
          >
            Previous
          </button>
          <div className="pull-right">
            <button
              className="btn -primary"
              onClick={this.submitCreateCourse}
              disabled={!this.state.isNextEnabled}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CourseMessagesComponent;
