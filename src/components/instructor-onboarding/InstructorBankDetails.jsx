import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap';
import { enableFormButton } from "../../common/form-validation/formValidation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { LocDetailsContainer, WizardControls } from "../../containers/instructor-onboarding/InstructorOnBoarding.style";
// import './instructorBankDetails.css';
export class InstructorBankDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bankName: props.fieldValues.bankName || "",
      bankAcctName: props.fieldValues.bankAcctName || "",
      bankAcctNo: props.fieldValues.bankAcctNo || "",
      bankBranchAddress: props.fieldValues.bankBranchAddress || "",
      bankIFSCCode: props.fieldValues.bankIFSCCode || "",
      bankTaxDetails: props.fieldValues.bankTaxDetails || "",
      showBankAcctNo: false,
      formErrors: {
        bankName: "",
        bankAcctName: "",
        bankAcctNo: "",
        bankBranchAddress: "",
        bankIFSCCode: "",
      },
      isNextEnabled: false,
    };

    this.state.isNextEnabled = this.formValid();
  }

  formValid = (addlChk) => {
    let reqObjList = {
      bankName: this.state.bankName,
      bankAcctName: this.state.bankAcctName,
      bankAcctNo: this.state.bankAcctNo,
      bankBranchAddress: this.state.bankBranchAddress,
      bankIFSCCode: this.state.bankBranchAddress,
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

  handleShowBankAcctNo = () =>{this.setState((state) => ({
    showBankAcctNo: !state.showBankAcctNo,
  }))}
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "bankName":
        formErrors.bankName = value.length < 1 ? "Enter a valid Bank Name" : "";
        break;
      case "bankAcctName":
        formErrors.bankAcctName =
          value.length < 1
           ? "Enter a valid Bank Account Name"
           : /^[a-zA-Z ]+$/.test(value)
           ? ""
           : "Account name must contain only letters";
        break;
      case "bankAcctNo":
        formErrors.bankAcctNo =
            value.length < 2
              ? "Enter a valid Account number"
              : isNaN(value)
              ? "Account number must be number"
              : "";
        break;
      case "bankBranchAddress":
        formErrors.bankBranchAddress =
          value.length < 1 ? "Enter a valid Bank Address" : "";
        break;
      case "bankIFSCCode":
        formErrors.bankIFSCCode =
          value.length < 1 ? "Enter a valid IFSC code" : "";
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

  previousStep = (e) => {
    e.preventDefault();
    this.continueProcessing("previous");
  };

  skipRegistration = (e) => {
    e.preventDefault();
    this.continueProcessing("skip");
  };

  submitRegistration = (e) => {
    e.preventDefault();
    this.fetchValuesAndSave();
    this.props.submitRegistration("SUBMIT");
  };

  continueProcessing = (hasStep) => {
    var isValid = true;

    if (hasStep === "next") {
      isValid = this.formValid();
    }

    if (isValid) {
      this.fetchValuesAndSave(true);

      switch (hasStep) {
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

  fetchValuesAndSave = (isSave) => {
    // Get values via this.refs
    var data = {
      bankName: this.state.bankName,
      bankAcctName: this.state.bankAcctName,
      bankAcctNo: this.state.bankAcctNo,
      bankBranchAddress: this.state.bankBranchAddress,
      bankIFSCCode: this.state.bankIFSCCode,
      bankTaxDetails: this.refs.bankTaxDetails.value,
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
          <div className="tab-header">
            <h4 className="step-title">Bank Details <span style={{color:"#2D9CDB"}}>( ? )</span></h4>
            <button
              className="saveBtn"
              onClick={this.skipRegistration}
            >
              Save and exit
            </button>
          </div>
         <LocDetailsContainer className="flex-column">
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="bankName" className="required">
                    Bank Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="bankName"
                    placeholder="Bank Name"
                    ref="bankName"
                    name="bankName"
                    onChange={this.handleChange}
                    value={this.state.bankName}
                  />
                  {formErrors.bankName.length > 0 && (
                    <div className="text-danger">
                      <small>{formErrors.bankName}</small>
                    </div>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="acctName" className="required">
                    Account Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="acctName"
                    placeholder="Account Name"
                    ref="bankAcctName"
                    name="bankAcctName"
                    onChange={this.handleChange}
                    value={this.state.bankAcctName}
                  />
                  {formErrors.bankAcctName.length > 0 && (
                    <div className="text-danger">
                      <small>{formErrors.bankAcctName}</small>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="acctNo" className="required">
                    Account No
                  </label>
                <div className="accountNo-container">
                  <input
                    type={this.state.showBankAcctNo===true?"text":"password"}
                    className="form-control"
                    id="acctNo"
                    placeholder="Account Number"
                    ref="bankAcctNo"
                    name="bankAcctNo"
                    onChange={this.handleChange}
                    value={this.state.bankAcctNo}
                  />
                  {/* <div className="accountNo-hideShow" onClick={this.handleShowBankAcctNo}>
                        {this.state.showBankAcctNo===true?"Hide":"Show"}
                  </div> */}
                </div>
                  {formErrors.bankAcctNo.length > 0 && (
                    <div className="text-danger">
                      <small>{formErrors.bankAcctNo}</small>
                    </div>
                  )}
                </div>
              </Col>
              <Col md={6}>
                <div className="form-group">
                  <label htmlFor="branchAddress" className="required">
                    Branch Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="branchAddress"
                    placeholder="Branch Address"
                    ref="bankBranchAddress"
                    name="bankBranchAddress"
                    onChange={this.handleChange}
                    value={this.state.bankBranchAddress}
                  />
                  {formErrors.bankBranchAddress.length > 0 && (
                    <div className="text-danger">
                      <small>{formErrors.bankBranchAddress}</small>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
            <h4 className="step-title" style={{border:0, margin:0}}>Tax Details <span style={{color:"#2D9CDB"}}>( ? )</span></h4>
            <Row>
              <Col md={12}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="taxDetails"
                    placeholder="GST Number"
                    ref="bankTaxDetails"
                    default={this.state.bankTaxDetails}
                  />
                </div>
              </Col>
            </Row>
        </LocDetailsContainer>
        <WizardControls className="space-between">
          <button
            className="btn btn-default pull-left"
            onClick={this.previousStep}
          >
            Previous
          </button>
          <div className="pull-right">
            {/* <button
              className="btn btn-primary btn-skip saveBtn-margin"
              onClick={this.skipRegistration}
            >
              Save and exit
            </button> */}
            <button
              className="btn btn-primary"
              onClick={this.submitRegistration}
              disabled={!this.state.isNextEnabled}
            >
              Submit
            </button>
          </div>
        </WizardControls>
      </form>
    );
  }
}

export default InstructorBankDetails;
