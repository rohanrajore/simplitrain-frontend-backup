import React from 'react';
import MapContainer from './MapContainer';
import {TextInput, checkEmptyFields} from '../../FormInputs';

function Map({ fillForm }) {
  return (
    <React.Fragment>
      <p>Pin your location</p>
      <MapContainer fillForm={fillForm} />
      <p>Don't have the place registered on Google Map?</p>
      <p>
        <a href="https://google.com" target="_blank">Register Now</a>
      </p>
    </React.Fragment>
  )
}

function Location({
	formData,
	updateFormData,
	updateFormDataMulti
}) {
  const ctx = formData.venueLocation;
  const errors = [];

  const handleFillForm = (data) => {
    updateFormDataMulti([
      ['venueLocation', 'country', data.country],
      ['venueLocation', 'state', data.state],
      ['venueLocation', 'city', data.city],
      ['venueLocation', 'latitude', data.latitude],
      ['venueLocation', 'longitude', data.longitude]
    ])
  }
  const handleUpdateData = (evt) => {
    const name = evt.currentTarget.name;
    const val = evt.currentTarget.value;
    updateFormData('venueLocation', name, val);
    //checkEmptyFields(ctx, () => validateStep(true, 0));
  }

  return (
    <div className="section-location">
      <div>
        <h4>Where is your place located?</h4>
        <Map fillForm={handleFillForm} />
      </div>
      <div>
        <TextInput
          name="addressLine"
          label="Floor/Apt/Street"
          placeholder=""
          value={ctx.addressLine}
          onChange={handleUpdateData}
          errors={errors}
        />
        <TextInput
          name="country"
          label="Country/Region"
          placeholder=""
          value={ctx.country}
          onChange={handleUpdateData}
          errors={errors}
          isDisabled={true}
        />
        <div className="flex">
          <TextInput
            name="city"
            label="City"
            placeholder=""
            value={ctx.city}
            onChange={handleUpdateData}
            errors={errors}
            isDisabled={true}
          />
          <TextInput
            name="state"
            label="State"
            placeholder=""
            value={ctx.state}
            onChange={handleUpdateData}
            errors={errors}
            isDisabled={true}
          />
        </div>
        <TextInput
          name="zipcode"
          label="Pincode/Zipcode"
          placeholder=""
          value={ctx.zipcode}
          onChange={handleUpdateData}
          errors={errors}
          isDisabled={true}
        />
      </div>
    </div>
  );
}

export default Location;
