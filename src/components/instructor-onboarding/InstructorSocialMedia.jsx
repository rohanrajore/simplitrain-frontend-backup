import React, { Component } from "react";
import ReactYoutubeComponent from "../thirdparty/ReactYoutubeComponent";
import { Col, Container, Row } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ComboBox from "../../common/combobox/combo-box";
import { enableFormButton } from "../../common/form-validation/formValidation";
import { WizardControls, SocialMediaContainer } from "../../containers/instructor-onboarding/InstructorOnBoarding.style";

const urlList = [
  { id: "customUrl", name: "Custom" },
  { id: "behanceURL", name: "Behance" },
  { id: "dribbleURL", name: "Dribble" },
  { id: "vimeoURL", name: "Vimeo" },
  { id: "flikrURL", name: "Flikr" },
  { id: "pinterestURL", name: "Pinterest" },
  { id: "yahooURL", name: "Yahoo" },
  { id: "redditURL", name: "Reddit" },
  { id: "soundcloudURL", name: "Soundcloud" },
  { id: "tumblrURL", name: "Tumblr" },
  { id: "twitterURL", name: "Twitter" },
  { id: "facebookURL", name: "Facebook" },
  { id: "linkedinURL", name: "LinkedIn" },
  { id: "githubURL", name: "Github" },
  { id: "instagramURL", name: "Instagram" },
];
const urlValidationRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

export class InstructorSocialMedia extends Component {
  constructor(props) {
    super(props);

    var urlRows = [];
    var rel = "0";
    var websiteURL = [];

    for (let i = 0; i < urlList.length; i++) {
      if (props.fieldValues[urlList[i].id]) {
        websiteURL.push({
          name: urlList[i].name,
          url: props.fieldValues[urlList[i].id],
        });
      }
    }

    if (websiteURL.length > 0) {
      for (var i = 0; i < websiteURL.length; i++) {
        let currUrl = websiteURL[i];
        urlRows = urlRows.concat(
          <div key={"" + i} className="input-group mt-3 mb-3 url-group">
              <div className="url-group-input">
                <ComboBox
                  id="website-id1"
                  optionsList={urlList}
                  isFreeSolo={true}
                  label="Website/Social URL"
                  defaultValue={{ name: currUrl.name }}
                />
                <input
                  type="text"
                  className="form-control url-input"
                  placeholder="Enter the URL here.."
                  defaultValue={currUrl.url}
                />
              </div>
              <div
                className="url-input-validate text-danger"
                style={{
                  color: "red",
                  marginLeft: "10px",
                }}
              >
                {" "}
              </div>
          </div>
        );
      }
      rel += i - 1;
    } else {
      urlRows = urlRows.concat(
        <div key="0" className="input-group mt-3 mb-3 url-group">
          <div className="url-group-input">
            <ComboBox
              id="website-id1"
              optionsList={urlList}
              label="Website/Social URL"
              isFreeSolo={true}
            />
            <input
              type="text"
              className="form-control url-input"
              placeholder="Enter the URL here.."
            />
          </div>
          <div
            className="url-input-validate"
            style={{ color: "red", marginLeft: "10px", marginBottom:'20px' }}
          >
            {" "}
          </div>
        </div>
      );
    }

    let videoId = this.getVideoId(props.fieldValues.youtubeURL);

    this.state = {
      urlRows: urlRows,
      socialBio: props.fieldValues.socialBio || "",
      customURL: props.fieldValues.customUrl,
      behanceURL: props.fieldValues.behanceURL,
      dribbleURL: props.fieldValues.dribbleURL,
      youtubeURL: props.fieldValues.youtubeURL,
      vimeoURL: props.fieldValues.vimeoURL,
      flikrURL: props.fieldValues.flikrURL,
      pinterestURL: props.fieldValues.pinterestURL,
      yahooURL: props.fieldValues.yahooURL,
      redditURL: props.fieldValues.redditURL,
      soundcloudURL: props.fieldValues.soundcloudURL,
      tumblrURL: props.fieldValues.tumblrURL,
      twitterURL: props.fieldValues.twitterURL,
      facebookURL: props.fieldValues.facebookURL,
      linkedinURL: props.fieldValues.linkedinURL,
      githubURL: props.fieldValues.githubURL,
      instagramURL: props.fieldValues.instagramURL,
      rel: rel,
      videoId: videoId,
      formErrors: {
        socialBio: "",
      },
      isNextEnabled: false,
    };

    this.state.isNextEnabled = this.formValid();
  }

  formValid = (addlChk) => {
    let reqObjList = {
      socialBio: this.state.socialBio,
    };

    if (addlChk) {
      return (
        enableFormButton({ [addlChk.name]: addlChk.value }) && addlChk.cond
      );
    } else {
      return enableFormButton(reqObjList);
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "socialBio":
        formErrors.socialBio = "";
        // value.length < 150 ? "minimum 150 characters are required" : "";
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

  getVideoId = (youtubeURL) => {
    let videoId;

    if (youtubeURL && youtubeURL.indexOf("?") > -1) {
      var paramStr = youtubeURL.substring(youtubeURL.indexOf("?") + 1);
      var urlParams = paramStr ? new URLSearchParams(paramStr) : undefined;
      if (urlParams) {
        videoId = urlParams.get("v");
      }
    }

    return videoId;
  };

  changeYoutubeLink = (e) => {
    var youtubeURL = e.target.value;
    let videoId = this.getVideoId(youtubeURL);

    this.setState({ videoId: videoId });
  };

  fetchValuesAndSave = (isSave) => {
    // Get values via this.refs
    var data = {
      socialBio: this.state.socialBio,
      youtubeURL: (this.refs.youtubeURL || {}).value,
    };

    var urlValidated = this.setURLList(this.refs["url-list"], data);

    if (!urlValidated) {
      return null;
    }

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
      var dataFetched = this.fetchValuesAndSave(true);
      if (dataFetched) {
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
    }
  };

  setURLList = (urlListDOM, data) => {
    var inputGroupList = urlListDOM.querySelectorAll(".input-group");
    var urlValidation = true;
    console.log(inputGroupList);
    for (var i = 0; i < inputGroupList.length; i++) {
      let objUrlSelectedOf = (
        inputGroupList[i].querySelector(".combo-box-input") || {}
      ).getAttribute("objSelected");
      console.log(objUrlSelectedOf);
      if (objUrlSelectedOf) {
        var webUrlId = JSON.parse(objUrlSelectedOf).id;
        var urlLink = (inputGroupList[i].querySelector(".url-input") || {})
          .value;
        var urlValidateEl = inputGroupList[i].querySelector(".url-input-validate");
        if (!urlValidationRegex.test(urlLink) && urlValidateEl) {
           urlValidation = false;
           urlValidateEl.textContent = "Please enter a valid URL";
        }
        else{
          urlValidateEl.textContent = "";
        }
        data[webUrlId] = urlLink;
      }
    }

    return urlValidation;
  };

  constructNewURLList = (urlListDOM) => {
    var inputGroupList = urlListDOM.querySelectorAll(".input-group");
    var tmpURLList = [].concat(urlList);
    for (var i = 0; i < inputGroupList.length; i++) {
      let objUrlSelectedOf = (
        inputGroupList[i].querySelector(".combo-box-input") || {}
      ).getAttribute("objSelected");
      if (objUrlSelectedOf) {
        var webUrlId = JSON.parse(objUrlSelectedOf).id;
        if (webUrlId) {
          var pos = tmpURLList.findIndex((val) => val.id === webUrlId);
          if (pos > -1) {
            tmpURLList.splice(pos, 1);
          }
        }
      }
    }

    return tmpURLList;
  };

  handleAddClick = (e) => {
    var rel = e.target.parentElement.parentElement.parentElement.getAttribute(
      "rel"
    );
    rel = parseInt(rel) + 1;
    let webId = "website-id" + rel;
    e.target.parentElement.parentElement.parentElement.setAttribute("rel", rel);

    var tmpURLList = this.constructNewURLList(this.refs["url-list"]);

    if (tmpURLList.length > 0) {
      var joined = this.state.urlRows.concat(
        <div key={rel} className="input-group mt-3 mb-3 url-group">
           <div className="url-group-input">
            <ComboBox
              id={webId}
              optionsList={tmpURLList}
              label="Website/Social URL"
              isFreeSolo={true}
            />
            <input
              type="text"
              className="form-control url-input"
              placeholder="Enter the URL here.."
            />
          </div>
          <div className="url-input-validate"
                style={{ color: "red", marginLeft: "10px", marginBottom:'20px' }}>
            {" "}
            Please enter valid URL.
          </div>
        </div>
      );
      this.setState({ urlRows: joined });
    } else {
      e.target.disabled = true;
    }
  };

  render() {
    const { fieldValues } = this.props;
    const { formErrors } = this.state;

    let youtubeVideo;
    console.log(this.state.customURL);
    if (this.state.videoId) {
      youtubeVideo = <ReactYoutubeComponent videoId={this.state.videoId} />;
    }

    return (
      <form>
        <div className="tab-header">
          <h4 className="step-title">Bio & Introduction <span style={{color:"#2D9CDB"}}>( ? )</span></h4>
          <button
            className="saveBtn"
            onClick={this.skipRegistration}
          >
            Save and exit
          </button>
        </div>
        <SocialMediaContainer>
          <div className="form-group">
            <label htmlFor="formControlTextarea">
              (Bio) Describe your expertise and and an introduction about yourself .
            </label>
            <textarea
              className="form-control"
              id="formControlTextarea"
              rows="5"
              ref="socialBio"
              name="socialBio"
              onChange={this.handleChange}
              value={this.state.socialBio}
            ></textarea>
            {formErrors.socialBio.length > 0 && (
              <div className="text-danger">
                <small>{formErrors.socialBio}</small>
              </div>
            )}
          </div>
          <div className="form-group" ref="url-list">
            <label htmlFor="userSocialProfile" className="WebsiteSocial-label">Website/Social Media</label>
            <IconButton
              color="primary"
              aria-label="add a row"
              className="float-right add-field"
              onClick={this.handleAddClick}
              rel={this.state.rel}
            >
              <AddCircleIcon />
            </IconButton>
            {this.state.urlRows}
          </div>
          <div className="form-group">
            <label className="WebsiteSocial-label">Introductory Video</label>
            <input
              type="search"
              className="form-control"
              ref="youtubeURL"
              placeholder="Your youtube url goes here"
              defaultValue={fieldValues.youtubeURL}
              onChange={this.changeYoutubeLink}
            />
          </div>
          <div>
            <div className="youtube-url-div">{youtubeVideo}</div>
            <p id="introductoryVideo">
              Instructors with Introductory video have 3x times more hit
              rate and have more chances of registrations.
            </p>
          </div>
        </SocialMediaContainer>
        <WizardControls className="space-between">
          <button
            className="btn btn-default pull-left"
            onClick={this.previousStep}
          >
            Previous
          </button>
          <div className="pull-right">
            {/* <button
              className="btn btn-primary btn-skip"
              onClick={this.skipRegistration}
            >
              Save and exit
            </button> */}
            <button
              className="btn btn-primary"
              onClick={this.nextStep}
              disabled={!this.state.isNextEnabled}
            >
              Next
            </button>
          </div>
        </WizardControls>
      </form>
    );
  }
}

export default InstructorSocialMedia;
