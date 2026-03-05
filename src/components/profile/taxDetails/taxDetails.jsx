import React from "react";
import ErrorComponent from "../errComponent/errorComponent.jsx";
import { TaxDetailsContainer } from "../../profile/taxDetails/taxDetails.style";

const TaxDetails = (props) => (
  <TaxDetailsContainer>
    <div className="userProfile-section-container" id="profileTax">
      <div className="userProfile-section-title">Tax Details</div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="pf-tax">GST Number</label>
          <input
            type="text"
            className="form-control"
            id="pf-tax"
            name="gst"
            value={props.profileFields.gst}
            onChange={props.handleField}
          />
          {props.profileFields.gst.length > 0 &&
            !props.profileFields.gst.match(/^[0-9a-zA-Z]+$/) && (
              <ErrorComponent
                title={
                  !props.profileFields.gst.match(/^[0-9a-zA-Z]+$/)
                    ? "This field must contain only alphanumeric"
                    : ""
                }
              />
            )}
        </div>
      </div>
    </div>
  </TaxDetailsContainer>
);

export default TaxDetails;
