import React, {useState} from 'react';
//import "./profileForm.css";
import ImageUpload from "./imageUpload.jsx";
import ErrorComponent from "../errComponent/errorComponent.jsx";
import { Col, Container, Row } from 'react-bootstrap';
import {ProfileFormContainer} from "../../profile/profileForm/profileForm.style";

const ProfileForm = props => {

   const fields=props.profileFields
   const addUploadedPhoto= (photoID) =>{
          props.setProfileFields({...props.profileFields,"profileImgId":photoID})
   }

  return(
    <ProfileFormContainer>
  <div className="userProfile-section-container" id="profileForm">
    <div className="userProfile-section-title">Profile</div>
      <div className="locDetails-img-container">

        <Row>
        <Col md="3">
          <div className="form-group">
              {/* <label className="required">Picture</label> */}
              <ImageUpload
                          fileID={fields.profileImgId}
                          addUploadedPhoto={addUploadedPhoto}
                          imageURL={fields.profileImg}
                          pdfURL={null}
                          title="Upload Profile Picture"/>
                        {fields.profileImgId.length<1 && <ErrorComponent title="Profile picture must be added."/>}
          </div>
        </Col>

        <Col md="9">
          <div className="locDetails-content">
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="pf-firstName" className="required">First Name</label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="pf-firstName"
                      name="firstName"
                      value={fields.firstName}
                      onChange={props.handleField}
                    />
                  </div>
                  {fields.firstName.length<1 && <ErrorComponent title="This field must be filled"/>}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="pf-lastName" className="required">Last Name</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    type="text"
                    className="form-control"
                    id="pf-lastName"
                    name="lastName"
                    value={fields.lastName}
                    onChange={props.handleField}
                  />
                </div>
                {fields.lastName.length<1 && <ErrorComponent title="This field must be filled"/>}
              </div>
              </div>

              <div className="form-row">

                <div className="form-group col-md-6 col-lg-6">
                    <label htmlFor="pf-email" className="required">Email</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        type="text"
                        className="form-control"
                        id="pf-email"
                        name="email"
                        disabled
                        value={fields.email}
                        onChange={props.handleField}
                      />
                    </div>
                    {fields.email.length<1 && <ErrorComponent title="This field must be filled"/>}
                </div>

                <div className="form-group col-md-6 col-lg-6">
                  <label htmlFor="pf-phone" className="required">Phone Number</label>
                  <div className="form-row" style={{flexWrap:"nowrap"}}>
                    <div style={{ display: "flex", alignItems: "center", width: '180px' }}>
                      <div>
                        <select defaultValue={"91"}
                            className="form-control"
                            name="countryCode"
                            id="pf-countryCode"
                            value={fields.countryCode}
                            onChange={props.handleField}
                            disabled>
                          <option value="91">+91 (India)</option>
                          <option value="1">+1 (US)</option>
                          <option value="86">+86 (China)</option>
                          <option value="81">+81 (Germany)</option>
                          <option value="49">+49 (UK)</option>
                          <option value="39">+39 (Italy)</option>
                          <option value="1">+1 (Canada)</option>
                          <option value="82">+82 (South Korea)</option>
                          <option value="43">+43 (Australia)</option>
                          <option value="62">+62 (Indonesia)</option>
                          <option value="966">+966 (Saudi Arabia)</option>
                          <option value="41">+41 (Switzerland)</option>
                        </select>
                      </div>
                  </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                      type="text"
                      className="form-control"
                      id="pf-phone"
                      name="phoneNumber"
                      value={fields.phoneNumber}
                      onChange={props.handleField}
                      disabled
                    />
                    </div>

                  </div>
                  {(fields.phoneNumber.length<6 || isNaN(fields.phoneNumber)) &&
                      <ErrorComponent title={isNaN(fields.phoneNumber)?"This field must contain only numbers":
                                  fields.phoneNumber.length<6?"Phone number must be at least 6 numbers long.": ""}/>
                    }

              </div>

              </div>

          </div>
        </Col>
      </Row>

      <div className="form-row mt-5">
        <div className="form-group col-md-12 col-lg-12">
          <label htmlFor="pf-address1">Address</label>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              className="form-control"
              id="pf-address1"
              name="address1"
              value={fields.address1}
              onChange={props.handleField}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
          <label htmlFor="pf-designation">
            Designation
          </label>
          <input
            type="text"
            className="form-control"
            id="pf-designation"
            name="designation"
            value={fields.designation}
            onChange={props.handleField}
          />
      </div>

      <div className="form-group">
        <label htmlFor="pf-bio">
          Bio
        </label>
        <textarea
          style={{height:199}}
          className="form-control"
          id="pf-bio"
          rows="8"
          name="bio"
          value={fields.bio}
          onChange={props.handleField}
        ></textarea>
      </div>
	  </div>
  </div>
  </ProfileFormContainer>
);}

export default ProfileForm;
