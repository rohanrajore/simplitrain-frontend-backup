import CreateCourseTypes from "./create-course.types";

export const nextStep = () => ({
  type: CreateCourseTypes.NEXT_STEP,
});

export const previousStep = () => ({
  type: CreateCourseTypes.PREVIOUS_STEP,
});

export const resetStep = () => ({
  type: CreateCourseTypes.RESET_STEP,
});

export const showLoader = () => ({
  type: CreateCourseTypes.SHOW_LOADING,
});

export const hideLoader = () => ({
  type: CreateCourseTypes.HIDE_LOADING,
});

export const setInitialStep = (initStep) => ({
  type: CreateCourseTypes.SET_INITIAL_STEP,
  payload: initStep,
});

export const submitCreateCourse = (createCourseValues, userID) => ({
  type: CreateCourseTypes.CREATE_COURSE_STARTED,
  payload: {
    createCourseValues,
    userID,
  },
});
