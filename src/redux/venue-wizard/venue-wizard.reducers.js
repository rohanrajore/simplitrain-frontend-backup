import VenueWizardTypes from './venue-wizard.types';
import initState from '../../redux/venue-wizard/initState';

const venueWizardReducer = (state = initState, action) => {
	switch(action.type) {
		case VenueWizardTypes.UPDATE_FORM_DATA: {
			const {section, field, value} = action;
			const copy = {...state};
			if (field) {
				copy[section][field] = value;
			}
			else {
				copy[section] = value;
			}
			return copy;
		}
		case VenueWizardTypes.UPDATE_FORM_DATA_MULTI: {
			const copy = {...state};
			action.data.forEach(item => {
				const [section, field, value] = item;
				copy[section][field] = value;
			})
			return copy;
		}
		case VenueWizardTypes.HANDLE_SAVE_DATA: {
			const copy = JSON.stringify(state);
			window.localStorage.setItem('formData', copy);
			return state;
		}
		default:
			return state;
	}
}

export default venueWizardReducer;