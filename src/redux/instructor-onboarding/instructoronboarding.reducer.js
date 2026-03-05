import InstructorOnBoardingTypes from "./instructoronboarding.types";

const INITIAL_STATE = {
  currentStep: 1,
  dataSaved: null,
  loading: false,
};

const onboardingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InstructorOnBoardingTypes.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case InstructorOnBoardingTypes.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case InstructorOnBoardingTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case InstructorOnBoardingTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case InstructorOnBoardingTypes.SET_INITIAL_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};

export default onboardingReducer;
