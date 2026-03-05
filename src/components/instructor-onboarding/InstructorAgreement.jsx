import React, { Component } from "react";
import {Link} from "react-router-dom";
import { Page } from 'react-pdf';
import { Document } from 'react-pdf/dist/esm/entry.webpack';
import { enableFormButton } from "../../common/form-validation/formValidation";
import Axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './instructorBankDetails.css';
import { LocDetailsContainer, WizardControls } from "../../containers/instructor-onboarding/InstructorOnBoarding.style";

const termsAndConditions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis auctor sapien. Phasellus elementum elit sit amet gravida facilisis. Donec neque ante, blandit in aliquet at, malesuada ut mi. Suspendisse neque leo, tincidunt vel sagittis sit amet, dictum varius mauris. Maecenas eu nunc non sapien tincidunt vestibulum. Mauris a purus quis tortor congue egestas id sed lacus. Integer vehicula gravida tellus, tincidunt euismod lacus porttitor quis. Nulla quis sem fringilla, imperdiet urna commodo, porttitor erat. Suspendisse elementum purus quis ipsum porta, eget tincidunt magna molestie. Duis pellentesque libero eget gravida viverra. Donec tempus eget orci quis iaculis. In lobortis metus massa, non aliquam tellus lobortis vitae. Proin sagittis interdum urna eget tincidunt. Aliquam dignissim auctor arcu rhoncus semper. Cras quis dictum purus. Donec interdum elit vitae elementum egestas.

Donec eget eros mi. Ut venenatis risus tellus, sed placerat leo dictum et. Quisque mollis sem viverra ante lacinia, vel mattis leo interdum. Nunc turpis nibh, aliquam ullamcorper lorem sit amet, finibus mattis odio. Integer eget consequat nibh, at sollicitudin lacus. Etiam a posuere erat, at consequat ligula. Praesent aliquam pretium lacus, a feugiat quam aliquam at.

Integer gravida odio ac purus fringilla, ac malesuada dui fringilla. Morbi vel malesuada diam. Fusce egestas, libero id aliquam varius, dui ante mattis nunc, sit amet faucibus ante tortor quis massa. In suscipit volutpat hendrerit. Donec vitae pretium risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean et massa nec dui dignissim viverra vel at turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam congue efficitur sollicitudin. In non viverra dolor. Nunc dui ex, accumsan ut cursus nec, commodo sit amet ante. Quisque facilisis ante consequat, accumsan est non, molestie nisi.

Vestibulum consequat purus id ipsum pretium placerat. Phasellus risus odio, tempor vitae leo eget, elementum sollicitudin elit. Nullam sit amet sodales lacus, dignissim egestas mauris. Pellentesque eget sem dictum, aliquam ante rutrum, congue metus. Integer interdum sem eget orci porta, eget cursus magna egestas. Proin nec ante sed eros volutpat sollicitudin. Ut sodales, risus luctus euismod ullamcorper, lacus nunc luctus erat, id efficitur tellus ligula id tellus. Quisque non diam varius, porta lorem sed, auctor tellus.

Suspendisse vestibulum, odio et fermentum pretium, purus sapien tempor arcu, vel fringilla felis lectus sit amet urna. Aenean sed urna feugiat, mollis mi id, accumsan quam. Vestibulum sit amet odio tempor, egestas neque vel, pulvinar arcu. Nam ullamcorper convallis turpis, eu semper purus porttitor ut. Donec a leo velit. Aliquam pharetra, orci in rhoncus lobortis, est dolor laoreet justo, sit amet bibendum ipsum mi eu justo. Curabitur lobortis lacus quis rutrum dictum. Nam eu tempor nulla. Aliquam nec feugiat risus. Donec molestie, est vitae tempus consectetur, ex risus sollicitudin mauris, vitae hendrerit tellus leo ut ante. Curabitur sagittis at nunc in ultricies. Cras at felis lacinia, venenatis risus at, hendrerit ex. Nulla et gravida felis, at ornare nulla.`

export class InstructorAgreement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nationalId: props.fieldValues.nationalId,
      nationalIdFilename: props.fieldValues.nationalIdFilename,
      fileObj: '',
      imageUrl: "",
      pdfUrl: "",
      numPages: null,
      pageNumber: 1,
      agreementAccepted: props.fieldValues.agreementAccepted,
      formErrors: {
        fileExt: "",
      },
    };
  }

  componentDidMount() {
    const { nationalId, nationalIdFilename } = this.state;
    if (nationalId && nationalIdFilename) {
      Axios
        .get(
            process.env.REACT_APP_API_URL + "/file/" + nationalId + "/download"
        )
        .then((response) => {
          var data = response.data;
          this.updateNationalId(data, nationalIdFilename);
        });
    }

  }

  PDFonDocumentLoadSuccess = ({ numPages })=> {
      this.setState({numPages: numPages})
    }
  PDFhandlePrevPage = () =>{
    if(this.state.pageNumber>1){
        let currentPage = this.state.pageNumber
        this.setState({pageNumber: currentPage-1})
      }
  }
  PDFhandleNextPage = () =>{
    if(this.state.pageNumber<this.state.numPages){
        let currentPage = this.state.pageNumber
        this.setState({pageNumber: currentPage+1})
      }
  }
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
  };

  fetchValuesAndSave = (isSave) => {
    // Get values via this.refs
    var data = {
      nationalId: this.state.fileObj || this.state.nationalId,
      agreementAccepted: this.state.agreementAccepted,
    };

    if (isSave) {
      this.props.saveValues(data);
    }

    return data;
  };

  onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  };

  selectFileUpload = (e) => {
    e.preventDefault();

    var butEl = e.target;
    butEl.parentElement.querySelector(".st-file-input").click();
  };

  uploadFile = (e) => {
    e.preventDefault();

    var allowedExt = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "application/pdf",
    ];
    let formErrors = { ...this.state.formErrors };

    var fileObj = e.target.files[0];
    var parEl = e.target.parentElement;

    if (allowedExt.indexOf(fileObj.type) > -1) {
      var fileSize = fileObj.size / (1024 * 1024);
      if (fileSize > 2) {
        formErrors.fileExt = "File size cannot exceed 2MB";
      }
    } else {
      formErrors.fileExt = "Only pdf/jpeg/png are supported file formats";
    }

    if (!formErrors.fileExt) {
      this.updateNationalId(fileObj);
      this.setState({fileObj: fileObj });
    } else {
      this.setState({ formErrors: formErrors });
    }
  };

  updateNationalId = (fileObject, fileName) => {
    var fileNameEl = document.querySelector('.with-500-width');
    fileNameEl.value = fileObject.name || fileName;

    var downloadBt = document.querySelector(".download-file");
    var blob = new Blob([fileObject]);
    downloadBt.style.display = "block";
    downloadBt.href = window.URL.createObjectURL(blob);
    fileObject.type==="application/pdf"? this.setState({pdfUrl: window.URL.createObjectURL(blob),
                                                        imageUrl: ""})
                                       : this.setState({imageUrl: window.URL.createObjectURL(blob),
                                                        pdfUrl: ""})

    downloadBt.download = fileObject.name || fileName;
  }

  handleCheckbox = (e) => {
    //e.preventDefault();

    this.setState({ agreementAccepted: e.target.checked });
  };

  render() {
    const { agreementAccepted } = this.state;
    const { formErrors } = this.state;
    let disableSubmit = true;
    // console.log(this.state.imageUrl, this.state.pdfUrl)
    if (agreementAccepted) {
      disableSubmit = false;
    }
      // console.log(this.state)
    return (
      <form>
        <div className="tab-header">
          <h4 className="step-title">National ID <span style={{color:"#2D9CDB"}}>( ? )</span></h4>
          <button
            className="saveBtn"
            onClick={this.skipRegistration}
          >
            Save and exit
          </button>
        </div>
        <LocDetailsContainer className="flex-column">
          <div className="form-group" style={{width: '100%'}}>
            <label htmlFor="uplaodId" className="required">Upload a National ID for verification ( ? )</label>
            <div className="input-group uplaod-id">
              <input
                type="text"
                className="form-control with-500-width"
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon1"
                disabled
              />
              <div className="input-group-prepend">
                <button
                  className="upload-btn btn-outline-secondary"
                  onClick={this.selectFileUpload}
                >
                  Browse
                </button>
                <input
                  type="file"
                  style={{ display: "none" }}
                  className="st-file-input"
                  accept="image/*,.pdf"
                  onChange={this.uploadFile}
                />
              </div>
            </div>
            
            {formErrors.fileExt.length > 0 && (
                <div className="text-danger">
                  <small>{formErrors.fileExt}</small>
                </div>
              )}
          </div>

        <img className="nationalId-uploaded" src={this.state.imageUrl} style={{display:this.state.imageUrl===""? "none": ""}}/>

         {/* <div className="pdf-container" style={{display:this.state.pdfUrl===""? "none": ""}}>
             <Document
               file={this.state.pdfUrl}
               onLoadSuccess={this.PDFonDocumentLoadSuccess}
             >
               <Page height={250} scale={4} pageNumber={this.state.pageNumber} />
             </Document>
             <div className="pdf-page-container">
                   <FontAwesomeIcon icon="chevron-left" className="pdf-icon-hover"
                                    onClick={this.PDFhandlePrevPage}>Prev</FontAwesomeIcon>
                   <div className="pdf-page-text">Page {this.state.pageNumber} of {this.state.numPages}</div>
                   <FontAwesomeIcon icon="chevron-right" className="pdf-icon-hover"
                                    onClick={this.PDFhandleNextPage}>Next</FontAwesomeIcon>
             </div>
         </div>


        <a
          className="btn btn-primary download-file"
          style={{ display: "none" }}
          href="#"
          role="button"
          target="_blank"
        >
          Download
        </a> */}
        <div className="input-group mt-3">
          <label> Instructor Agreement </label>
          <fieldset className="form-group border p-2 with-full-width termsAndConditions">
            <p>{termsAndConditions}</p>
          </fieldset>
          <div className="custom-control custom-checkbox pl-4">
            <input
              onChange={this.handleCheckbox}
              id="agreementCheck"
              type="checkbox"
              checked={this.state.agreementAccepted}
              className="custom-control-input"
            />
            <label htmlFor="agreementCheck" className="custom-control-label">
              I agree to the terms and conditions mentioned in the above
              agreement
            </label>
          </div>
        </div>
        </LocDetailsContainer>
        <WizardControls className="space-between">
          <button
              className="btn btn-default pull-left"
              onClick={this.previousStep}
            >
              Previous
            </button>
            <div className="pull-right">
              <button
                className="btn btn-primary"
                onClick={this.nextStep}
                disabled={disableSubmit}
              >
                Next
              </button>
            </div>
        </WizardControls>
      </form>
    );
  }
}

export default InstructorAgreement;
