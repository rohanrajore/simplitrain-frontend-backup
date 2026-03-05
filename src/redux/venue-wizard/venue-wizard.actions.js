import VenueWizardTypes from './venue-wizard.types';
/*
 * action creators
 */
export function updateFormData(section, field, value) {
    return { 
      type: VenueWizardTypes.UPDATE_FORM_DATA, 
          section,
          field,
          value
    }
  }
  
  export function updateFormDataMulti(arr) {
    return { 
      type: VenueWizardTypes.UPDATE_FORM_DATA_MULTI, 
      data: arr
    }
  }
  
  export function handleSaveData(data) {
    return { 
      type: VenueWizardTypes.HANDLE_SAVE_DATA, 
      data
    }
  }