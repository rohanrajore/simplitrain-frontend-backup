import React, { Component } from "react";
import { enableFormButton } from "../../common/form-validation/formValidation";
import ReactQuill from "react-quill";
import { Col, Container, Row } from 'react-bootstrap';

class CourseOverviewComponent extends Component {
  constructor(props) {
    super(props);

    console.log(`${JSON.stringify(props.fieldValues)}`);
    this.state = {
      title: props.fieldValues?.title || "",
      subTitle: props.fieldValues?.subTitle || "",
      description: props.fieldValues?.description || "",
      formErrors: {
        title: "",
        subTitle: "",
        description: "",
      },
      isNextEnabled: true,
    };

    this.state.isNextEnabled = this.formValid();
  }

  componentDidUpdate(previousProps, previousState) {
    // console.log(`Inside CourseOverviewComponent:componentDidUpdate()`);
    if (previousProps.fieldValues !== this.props.fieldValues) {
      console.log(
        `#Inside CourseOverviewComponent:componentDidUpdate() ${JSON.stringify(
          previousProps
        )}`
      );
      this.setState({
        title: this.props.fieldValues?.title || "",
        subTitle: this.props.fieldValues?.subTitle || "",
        description: this.props.fieldValues?.description || "",
        formErrors: {
          title: "",
          subTitle: "",
          description: "",
        },
        isNextEnabled: true,
      });
    }
  }

  formValid = (addlChk) => {
    let reqObjList = {
      title: this.state.title,
      subTitle: this.state.subTitle,
      description: this.state.description,
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

  handleChangeEditor = (value) => {
    // console.log(`Inside handleChangeEditor ${value}`);
    this.setState({ description: value, isNextEnabled: true });

    // this.setState(
    //   {
    //     description: value,
    //     formErrors: {
    //       description: value.length < 1 ? "Enter a valid description" : "",
    //     },
    //   },
    //   () => {
    //     console.log(
    //       `State inside handleChangeEditor: ${JSON.stringify(this.state)}`
    //     );
    //   }
    // );
  };

  handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "title":
        formErrors.title = value.length < 1 ? "Enter a valid title" : "";
        break;

      case "subTitle":
        formErrors.subTitle = value.length < 1 ? "Enter a valid sub title" : "";
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

  nextStep = (e) => {
    this.fetchValuesAndSave(true);
    this.props.nextStep();
  };

  previousStep = (e) => {
    this.fetchValuesAndSave(true);
    this.props.previousStep();
  };

  skipCreateCourse = (e) => {
    this.fetchValuesAndSave(true);
    this.props.submitCreateCourse("SAVE");
  };

  fetchValuesAndSave = (isSave) => {
    // Get values via this.refs
    var data = {
      title: this.state.title,
      subTitle: this.state.subTitle,
      description: this.state.description,
    };

    if (isSave) {
      this.props.saveValues(data);
    }

    return data;
  };

  render() {
    const { formErrors } = this.state;

    return (
      <form>
        <div className="form-row">
          <h4>Course Overview & Details</h4>
          <div className="form-group col-md-6">
            <input
              type="text"
              id="title"
              name="title"
              ref="title"
              className="form-control"
              placeholder="Course Title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            {formErrors.title.length > 0 && (
              <div className="text-danger">
                <small>{formErrors.title}</small>
              </div>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="text"
              id="subTitle"
              name="subTitle"
              ref="subTitle"
              className="form-control"
              placeholder="Course Sub Title"
              value={this.state.subTitle}
              onChange={this.handleChange}
            />
            {formErrors.subTitle.length > 0 && (
              <div className="text-danger">
                <small>{formErrors.subTitle}</small>
              </div>
            )}
          </div>
        </div>

        <ReactQuill
          value={this.state.description}
          placeholder="description"
          onChange={this.handleChangeEditor}
        />
        {formErrors.description.length > 0 && (
          <div className="text-danger">
            <small>{formErrors.description}</small>
          </div>
        )}

        <div className="form-footer pull-right">
          <button
            className="btn -primary btn-skip"
            onClick={this.skipCreateCourse}
          >
            Skip Create Course
          </button>
          <button
            className="btn -primary"
            onClick={this.nextStep}
            disabled={!this.state.isNextEnabled}
          >
            Next
          </button>
        </div>
      </form>
    );
  }
}

export default CourseOverviewComponent;
