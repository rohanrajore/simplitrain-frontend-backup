import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import axios from "axios";
import ComboBox from "../../common/combobox/combo-box";
import { enableFormButton } from "../../common/form-validation/formValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { LocDetailsContainer, WizardControls } from "../../containers/instructor-onboarding/InstructorOnBoarding.style";
// import './instructorStyle.css';

class InstructorLocDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      designation: props.fieldValues.designation || "",
      address1: props.fieldValues.address1 || "",
      address2: props.fieldValues.address2 || "",
      zipcode: props.fieldValues.zipcode || "",
      panNumber: props.fieldValues.panNumber || "",
      stateData: [],
      cityData: [],
      formErrors: {
        designation: "",
        address1: "",
        city: "",
        state: "",
        zipcode: "",
      },
      isNextEnabled: false,
    };

    this.state.state = props.fieldValues.state
      ? { id: "_1", name: props.fieldValues.state }
      : { id: "", name: "" };
    this.state.city = props.fieldValues.city
      ? { id: "_1", name: props.fieldValues.city }
      : { id: "", name: "" };

    this.state.isNextEnabled = this.formValid();
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + "/address/states?countryName=India")
      .then((response) => {
        this.setState({
          stateData: response.data,
        });
      });
  }

  changeState = (e, values) => {
    this.setState({ state: values });
    let cityURI = encodeURI(
      process.env.REACT_APP_API_URL +
        "/address/states/" +
        values.name +
        "/cities/"
    );
    axios.get(cityURI).then((response) => {
      this.setState({
        cityData: response.data,
      });
    });
  };

  changeCity = (e, values) => {
    this.setState({ city: values });
  };

  fetchValuesAndSave = (isSave) => {
    var data = {
      designation: this.state.designation,
      address1: this.state.address1,
      address2: this.refs.address2.value,
      city: this.state.city.name,
      state: this.state.state.name,
      zipcode: this.state.zipcode,
      panNumber: this.state.panNumber,
    };

    if (isSave) {
      this.props.saveValues(data);
    }

    return data;
  };

  nextStep = (e) => {
    e.preventDefault();
    this.continueProcessing("next");
  };

  previousStep = (e) => {
    e.preventDefault();
    this.continueProcessing("previous");
  };

  skipRegistration = (e) => {
    e.preventDefault();
    this.continueProcessing("skip");
  };

  continueProcessing = (hasStep) => {
    var isValid = true;

    if (hasStep === "next") {
      isValid = this.formValid();
    }

    if (isValid) {
      this.fetchValuesAndSave(true);

      switch (hasStep) {
        case "next":
          this.props.nextStep();
          break;
        case "previous":
          this.props.previousStep();
          break;
        case "skip":
          this.props.submitRegistration("SAVE");
          break;
        default:
          return;
      }
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "designation":
        formErrors.designation =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "address1":
        formErrors.address1 =
          value.length < 3 ? "minimum 3 characters required" : "";
        break;
      case "city":
        formErrors.city = value.length < 1 ? "Select a city" : "";
        break;
      case "state":
        formErrors.state = value.length < 1 ? "Select a state" : "";
        break;
      case "zipcode":
        formErrors.zipcode =
          value.length < 2
            ? "Enter a valid zipcode"
            : isNaN(value)
            ? "Zip code must be number"
            : "";
        break;
      case "panNumber":
        formErrors.panNumber =
          value.length < 10 ? "Enter a valid PAN number" : "";
        break;
      default:
        break;
    }

    let isEnabled = this.formValid({
      name: name,
      value: value,
      cond: Object.values(formErrors).every((val) => val === ""),
    });

    this.setState({ formErrors, [name]: value, isNextEnabled: isEnabled });
  };

  formValid = (addlChk) => {
    let reqObjList = {
      designation: this.state.designation,
      address1: this.state.address1,
      city: this.state.city.name,
      state: this.state.state.name,
      zipcode: this.state.zipcode,
      panNumber: this.state.panNumber,
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

  render() {
    const { fieldValues } = this.props;
    const { formErrors } = this.state;
    const currentUser = this.props.currentUser;
    return (
      <form className="needs-validation" noValidate>
        <div className="tab-header">
          <h4 className="step-title">Personal Details <span style={{color:"#2D9CDB"}}>( ? )</span></h4>
          <button
            className="saveBtn"
            onClick={this.skipRegistration}
          >
            Save and exit
          </button>
        </div>
          {/* <div style={{fontSize:'12px'}}> Facing trouble? Please refer <Link>FAQ</Link>s </div> */}
      <LocDetailsContainer>
        <div className="locDetails-img" style={{background:`url(${'https://i.pinimg.com/474x/8c/70/8b/8c708b478e0e71f7599b75b9cc108ddf.jpg'}) no-repeat center`}}>
          <button className="edit-button">Edit</button>
        </div>
        <div className="locDetails-content">
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputFullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFullName"
                  value={currentUser.firstName + " " + currentUser.lastName}
                  disabled
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputDesignation" className="required">Designation</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputDesignation"
                  placeholder="Designation/Title"
                  name="designation"
                  value={this.state.designation}
                  onChange={this.handleChange}
                  noValidate
                />
                {formErrors.designation.length > 0 && (
                  <div className="text-danger">
                    <small>{formErrors.designation}</small>
                  </div>
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputEmail">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  value={currentUser.email}
                  disabled
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputPhoneNumber">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPhoneNumber"
                  value={currentUser.mobile}
                  disabled
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group" style={{ marginTop: 10 }}>
                <label htmlFor="inputPANNumber" className="required">PAN Number</label>
                <input
                  type="text"
                  ref="panNumber"
                  name="panNumber"
                  className="form-control"
                  id="inputPANNumber"
                  placeholder="PAN"
                  value={this.state.panNumber}
                  onChange={this.handleChange}
                />
                {formErrors.panNumber?.length > 0 && (
                  <div className="text-danger">
                    <small>{formErrors.panNumber}</small>
                  </div>
                )}
              </div>
            </Col>
            <Col md={6}>

            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <div className="form-group">
               <label htmlFor="inputAddress" className="required">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  name="address1"
                  value={this.state.address1}
                  onChange={this.handleChange}
                />
                {formErrors.address1.length > 0 && (
                <div className="text-danger">
                  <small>{formErrors.address1}</small>
                </div>
                )}
              </div>
            </Col>
            <Col md={6}>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Address 2</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                    ref="address2"
                    name="address2"
                    defaultValue={this.state.address2}
                  />
                </div>
            </Col>  
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputState" className="required">State</label>
                <ComboBox
                  id="state-id"
                  optionsList={this.state.stateData}
                  label="Select state"
                  onChange={this.changeState}
                  className="required"
                  defaultValue={this.state.state}
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group ">
                <label htmlFor="inputCity" className="required">City</label>
                <ComboBox
                  id="city-id"
                  optionsList={this.state.cityData}
                  label="Select city"
                  onChange={this.changeCity}
                  defaultValue={this.state.city}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label htmlFor="inputZip" className="required">Zip</label>
                <input
                  type="text"
                  ref="zipcode"
                  name="zipcode"
                  className="form-control"
                  id="inputZip"
                  placeholder="ZipCode"
                  value={this.state.zipcode}
                  onChange={this.handleChange}
                />
                {formErrors.zipcode.length > 0 && (
                  <div className="text-danger">
                    <small>{formErrors.zipcode}</small>
                  </div>
                )}
              </div>
            </Col>
            <Col md={6}> 
            
            </Col>

          </Row>
        

  
        </div>
      </LocDetailsContainer>
      <WizardControls>
          {/* <button
            className="btn-default btn-skip saveBtn"
            onClick={this.skipRegistration}
          >
            Save and exit
          </button> */}
          <button
            className="next-btn btn-primary"
            onClick={this.nextStep}
            disabled={!this.state.isNextEnabled}
          >
            Next
          </button>
      </WizardControls>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps, null)(InstructorLocDetails);
