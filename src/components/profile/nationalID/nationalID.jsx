import React from 'react';
import ImageUpload from "../profileForm/imageUpload.jsx";
import {NationalIDContainer} from "../../profile/nationalID/nationalID.style";

const NationalID = props => {

   const fields = props.profileFields
   const addUploadedPhoto= (fileID) =>{
          props.setProfileFields({...props.profileFields,"nationalId":fileID})
   }

  return(
<NationalIDContainer>
  <div className="userProfile-section-container" id="profileNationalID">
      <div className="userProfile-section-title">National ID</div>

      <ImageUpload
                   fileID={fields.nationalId}
                   addUploadedPhoto={addUploadedPhoto}
                   imageURL={fields.nationalIdImg}
                   pdfURL={fields.nationalIdPdf}
                   title="Upload National ID"
                   />

  </div>
</NationalIDContainer>
);}

export default NationalID;
