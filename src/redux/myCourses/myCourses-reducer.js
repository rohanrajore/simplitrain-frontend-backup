import myCoursesTypes from "./myCourses-types.js";

const INITIAL_STATE = {
  courses: [],
  loggedInUserID:"",
  anonymousUserID:""
};


const myCoursesReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case myCoursesTypes.SET_COURSES:
     return {
        ...state,
        courses: action.payload.courses,
        anonymousUserID: action.payload.anonymous
      };

    case myCoursesTypes.SET_COURSES_AFTER_FEEDBACK:
       return {
          ...state,
          courses: action.payload
        };

    default:
      return state;
  }
};
export default myCoursesReducers;
