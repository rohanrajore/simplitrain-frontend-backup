import InstructorOnBoardingTypes from './instructoronboarding.types'

export const nextStep  = () => ({
    type: InstructorOnBoardingTypes.NEXT_STEP
});

export const previousStep  = () => ({
    type: InstructorOnBoardingTypes.PREVIOUS_STEP
});

export const submitRegistration = (registrationValues, uuid, action, currentStep) => ({
    type: InstructorOnBoardingTypes.REGISTRATION_STARTED,
    payload: {
        registrationValues,
        uuid,
        action,
        currentStep
    }
});

export const showLoader = () => ({
    type: InstructorOnBoardingTypes.SHOW_LOADING,
});

export const hideLoader = () => ({
    type: InstructorOnBoardingTypes.HIDE_LOADING,
});

export const setInitialStep = (initStep) => ({
    type: InstructorOnBoardingTypes.SET_INITIAL_STEP,
    payload: initStep
});

export const setPendingApproval = () => ({
    type: InstructorOnBoardingTypes.SET_PENDING_APPROVAL,
});