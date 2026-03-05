import React from 'react';
import ReactQuill from 'react-quill';
import { CheckboxInput, validateSection} from '../../FormInputs';
import UploadPDF from './UploadPDF';

import 'react-quill/dist/quill.snow.css';

function GuestRules({
	formData,
  updateFormData,
  showValidationError,
  onSubmit
}) {
  const ctx = formData;

  const handleUpdateData = (evt) => {
    const name = evt.currentTarget.name;
    const val = evt.currentTarget.checked;
    updateFormData( name, null, val);
  }

  const handleUpdateEditor = (val) => {
    updateFormData('guestGuidelinesAndRules', null, val);
  }

  const handleUploadReady = (doc) => {
    const fileObj = {'id': doc};
    updateFormData('guestGuidelinesAndRulesPdfFile', null, fileObj);
  }

  const deleteUploadedFile = (doc) => {
    updateFormData('guestGuidelinesAndRulesPdfFile', null, {});
  }

  const handleSubmit = () => {
    validateSection(
      formData,
      7,
      () => {
        showValidationError("");
        onSubmit();
      },
      msg => showValidationError(msg)
    )
  }

  return (
    <React.Fragment>

      <h4 style={{marginTop:"0px"}}>Specify the Venue Guidelines & Rules</h4>
      <ReactQuill value={ctx.guestGuidelinesAndRules} onChange={handleUpdateEditor} />

      <div style={{marginTop:"35px"}}>
        <h2 style={{marginBottom:"5px"}}>Terms & Conditions</h2>
        <h4 style={{marginTop:"0px"}}>Terms and conditions with insurance</h4>

          <CheckboxInput
            name="isApprovalRequired"
            text="My venue doesn't require my approval"
            checked={ctx.isApprovalRequired}
            onChange={handleUpdateData}
          />

					<CheckboxInput
						name="termsAndConditionsAccepted"
						id="termsAndConditionsAccepted"
						text="I accept all terms and conditions"
						checked={ctx.termsAndConditionsAccepted}
						value="termsAndConditionsAccepted"
						onChange={handleUpdateData}
					/>

        <div className="submit-div">
          <button onClick={handleSubmit} className="btn blue">Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default GuestRules;
