import React, {useState, useEffect} from 'react';
import {TextInput, ComboCategories, checkEmptyFields} from '../../FormInputs';
import FullPageLoader from "../../../../common/fullpage-loader/FullPageLoader";
import Axios from "axios";
import './details.css';

function Details({
	formData,
	updateFormData
}) {
  const ctx = formData;

  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(false);

	const type= [{"id":"abd2-ekopt-8559","name":"Hotel"},{"id":"78j2-92olkje-pprr123","name":"Co Working Space"},{"id":"885u-3511kkf-2095","name":"Commercial Complex"},
								{"id":"fllt-39902-kfb1","name":"Apartment"},{"id":"b234-21o3t-kb59","name":"Outdoors"}]
	const subType = [{"id":"1","name":"3 Star","venueCategory":{"id":"abd2-ekopt-8559"}},{"id":"2","name":"4 Star","venueCategory":{"id":"abd2-ekopt-8559"}},
                   {"id":"3","name":"5 Star","venueCategory":{"id":"abd2-ekopt-8559"}},{"id":"4","name":"Conference / Training Room","venueCategory":{"id":"78j2-92olkje-pprr123"}},
								   {"id":"5","name":"Conference / Training Room","venueCategory":{"id":"885u-3511kkf-2095"}},{"id":"6","name":"Home","venueCategory":{"id":"fllt-39902-kfb1"}},
								   {"id":"7","name":"Club House","venueCategory":{"id":"fllt-39902-kfb1"}},{"id":"8","name":"Swimming Pool","venueCategory":{"id":"fllt-39902-kfb1"}},
								   {"id":"9","name":"Sports Area","venueCategory":{"id":"fllt-39902-kfb1"}},{"id":"10","name":"Other Common Area","venueCategory":{"id":"fllt-39902-kfb1"}},
								   {"id":"11","name":"Stadium","venueCategory":{"id":"b234-21o3t-kb59"}},{"id":"12","name":"Sports Club","venueCategory":{"id":"b234-21o3t-kb59"}},
								   {"id":"13","name":"Garden","venueCategory":{"id":"b234-21o3t-kb59"}}]


  useEffect(() => {

      let initCourseId = type[0] ? type[0].id : null;
      if (initCourseId) {
        updateFormData('venueCategory', 'id', initCourseId);
        updateFormData('venueCategory', 'name' , type[0].name);
        changeSubCategories(initCourseId);
      }
  }, []);

  const changeSubCategories = (id) => {

      setLoading(true);
			const options = subType.filter(item => item.venueCategory.id===id)
      const filteredOptions = options.map((subCat) => ({
        id: subCat.id,
        name: subCat.name,
        venueCategory: {
          id: subCat.categoryID
        }
      }));
      setLoading(false);
      setSubCategories(filteredOptions);
      updateFormData('venueSubCategory', 'id', filteredOptions[0].id);
      updateFormData('venueSubCategory', 'name', filteredOptions[0].name);
      updateFormData('venueSubCategory', 'venueCategory', {
        'id': filteredOptions[0].venueCategory.id
      });

  }

  const handleChangeCategory = (evt) => {
    evt.preventDefault();
    const val = JSON.parse(evt.currentTarget.value);
    const id = val.id;
    const name = val.name;
    updateFormData('venueCategory', 'id' , id);
    updateFormData('venueCategory', 'name' , name);
    changeSubCategories(id);
  }

  const handleUpdateData = (evt) => {
    evt.preventDefault();
    const name = evt.currentTarget.name;
    const val = evt.currentTarget.value;

    if (name === 'venueSubCategory') {
      const valParsed = JSON.parse(val);
      updateFormData('venueSubCategory', 'id', valParsed.id);
      updateFormData('venueSubCategory', 'name', valParsed.name);
      updateFormData('venueSubCategory', 'venueCategory', {
        'id': valParsed.venueCategory.id
      });
    }
    else {
      updateFormData(name, null, val);
    }

  }

  return (
    <div className="section-detail">
			<h4>What kind of place is it?</h4>
      <div className="section-detail-header noPaddingInput">
        <div>
          <ComboCategories
            name="venueCategory"
            value={JSON.stringify(ctx.venueCategory)}
            options={type}
            onChange={handleChangeCategory}
          />
          <ComboCategories
            name="venueSubCategory"
            value={JSON.stringify(ctx.venueSubCategory)}
            options={subCategories}
            onChange={handleUpdateData}
          />
          <TextInput
            name="maximumNumberOfParticipants"
            label="Maximum number of participants"
            placeholder=""
            value={ctx.maximumNumberOfParticipants}
            onChange={handleUpdateData}
          />
        </div>
        <div>
          <TextInput
            name="venueName"
            label="Name of the Venue/Room"
            placeholder=""
            value={ctx.venueName}
            onChange={handleUpdateData}
          />
          <TextInput
              name="venueAreaInSqFeet"
							label="Enter Area (Sq Ft)"
              value={ctx.venueAreaInSqFeet}
              onChange={handleUpdateData}
            />
        </div>
      </div>
      <div>
        <textarea
          type="text"
          rows="5"
					maxlength="1000"
          name="venueSummary"
          className="form-control"
          placeholder="Write a quick summary of your place. You can highligh what's special about your place and what guests should expect"
          value={ctx.venueSummary}
          onChange={handleUpdateData}
        />
      </div>
      <FullPageLoader loading={loading} />
    </div>
  );
}

export default Details;
