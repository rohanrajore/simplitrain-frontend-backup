import CourseSchedulerTypes from './coursescheduler.types'

export const nextStep  = () => ({
    type: CourseSchedulerTypes.NEXT_STEP
});

export const previousStep  = () => ({
    type: CourseSchedulerTypes.PREVIOUS_STEP
});

export const showLoader = () => ({
    type: CourseSchedulerTypes.SHOW_LOADING,
});

export const hideLoader = () => ({
    type: CourseSchedulerTypes.HIDE_LOADING,
});

export const setInitialStep = (initStep) => ({
    type: CourseSchedulerTypes.SET_INITIAL_STEP,
    payload: initStep
});