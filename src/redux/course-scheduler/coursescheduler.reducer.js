import CourseSchedulerTypes from "./coursescheduler.types";

const INITIAL_STATE = {
  currentStep: 1,
  dataSaved: null,
  loading: false,
};

const courseSchedulerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CourseSchedulerTypes.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case CourseSchedulerTypes.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case CourseSchedulerTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CourseSchedulerTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    case CourseSchedulerTypes.SET_INITIAL_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};

export default courseSchedulerReducer;
