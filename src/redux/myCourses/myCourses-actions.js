import myCoursesTypes from "./myCourses-types.js";

export const setRetrievedCourses = (value) => ({
  type: myCoursesTypes.SET_COURSES,
  payload: value
});

export const setCoursesAfterFeedback = (value) => ({
  type: myCoursesTypes.SET_COURSES_AFTER_FEEDBACK,
  payload: value
});
