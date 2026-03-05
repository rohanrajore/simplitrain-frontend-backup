import React from 'react';
import ImageUpload from './ImageUpload';

function Photos({
	formData,
	updateFormData,
	handlePreviewPage
}) {
  const ctx = formData.photoGallery;
  const fileList = [];

  const addUploadedPhoto = (photo, uploadFiles) => {
    const photoObj = {'id': photo};
    fileList.push(photoObj);
    if (fileList.length === uploadFiles) {
      const copy = [...ctx, ...fileList];
      updateFormData('photoGallery', null, copy);
    }
  }

  const deleteUploadedPhoto = (photoID) => {
    const copy = formData.photoGallery.filter(el => el.id !== photoID);
    updateFormData('photoGallery', null, copy);
  }

  return (
    <div className="section-photos">
			<h4>Photos helps Instructors imagining your place. You can start with one and add more after you publish.</h4>
      <ImageUpload addUploadedPhoto={addUploadedPhoto} deleteUploadedPhoto={deleteUploadedPhoto} />

    </div>
  );
}

export default Photos;
