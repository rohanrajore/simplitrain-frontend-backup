import { connect } from 'react-redux'
import { updateFormData, updateFormDataMulti, handleSaveData } from '../venue-wizard.actions'
import VenueWizardContainer from '../../../components/venuewizard'

const mapStateToProps = (state) => ({
  formData: state.venueWizard,
  currentUser: state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
	updateFormData: (section, field, value) => dispatch(updateFormData(section, field, value)),
	updateFormDataMulti: (arr) => dispatch(updateFormDataMulti(arr)),
	handleSaveData: (data) => dispatch(handleSaveData(data))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VenueWizardContainer)