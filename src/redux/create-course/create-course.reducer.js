import CreateCourseTypes from "./create-course.types";

const INITIAL_STATE = {
  currentStep: 1,
  dataSaved: null,
  loading: false,
};

const createCourseReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CreateCourseTypes.RESET_STEP:
      return {
        ...state,
        currentStep: 1,
      };
    case CreateCourseTypes.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case CreateCourseTypes.PREVIOUS_STEP:
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case CreateCourseTypes.SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CreateCourseTypes.HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default createCourseReducer;
