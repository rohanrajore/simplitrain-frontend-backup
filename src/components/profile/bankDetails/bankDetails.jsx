import React from 'react';
import ErrorComponent from "../errComponent/errorComponent.jsx";
import {BankDetailsContainer} from "../../profile/bankDetails/bankDetails.style";

const BankDetails = props => (
  <BankDetailsContainer>
  <div className="userProfile-section-container" id="profileBank">
      <div className="userProfile-section-title">Bank Details</div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="pf-bankName">Bank Name</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                className="form-control"
                id="pf-bankName"
                name="bankName"
                value={props.profileFields.bankName}
                onChange={props.handleField}
              />
            </div>
         </div>

         <div className="form-group col-md-6">
           <label htmlFor="pf-IFSC">IFSC Code</label>
           <div style={{ display: "flex", alignItems: "center" }}>
             <input
               type="text"
               className="form-control"
               id="pf-IFSC"
               name="IFSC"
               value={props.profileFields.IFSC}
               onChange={props.handleField}
             />
           </div>
        </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="pf-accName">Account Name</label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                className="form-control"
                id="pf-accName"
                name="accName"
                value={props.profileFields.accName}
                onChange={props.handleField}
              />
            </div>
         </div>

         <div className="form-group col-md-6">
           <label htmlFor="pf-accNumber">Account Number</label>
           <div style={{ display: "flex", alignItems: "center" }}>
             <input
               type="text"
               className="form-control"
               id="pf-accNumber"
               name="accNumber"
               value={props.profileFields.accNumber}
               onChange={props.handleField}
             />
           </div>
           {(props.profileFields.accNumber.length>0 && isNaN(props.profileFields.accNumber)) &&
               <ErrorComponent title={isNaN(props.profileFields.accNumber)?"This field must contain only numbers": ""}/>}
        </div>
        </div>
  </div>
  </BankDetailsContainer>
);

export default BankDetails;
