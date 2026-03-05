import SignupActionTypes from "./signup.types";

export const emailSignUpStart = (firstName, lastName, email, password, mobile, becomeInstructor) => ({
    type: SignupActionTypes.EMAIL_SIGN_UP_START,
    payload: {firstName, lastName, email, password, mobile, becomeInstructor}
});

export const emailSignUpSuccess = (userDetails) => ({
    type: SignupActionTypes.EMAIL_SIGN_UP_SUCCESS,
    payload: userDetails
});

export const emailSignUpFailure = error => ({
    type: SignupActionTypes.EMAIL_SIGN_UP_FAILURE,
    payload: error
});

export const forgotPasswordStart = (email) => ({
    type: SignupActionTypes.FORGOT_PASSWORD_START,
    payload: {email}
});

export const forgotPasswordSuccess = (userDetails) => ({
    type: SignupActionTypes.FORGOT_PASSWORD_SUCCESS,
    payload: userDetails
});

export const forgotPasswordFailure = error => ({
    type: SignupActionTypes.FORGOT_PASSWORD_FAILURE,
    payload: error
});

export const resetPasswordStart = (code, password) => ({
    type: SignupActionTypes.RESET_PASSWORD_START,
    payload: {code, password}
});

export const resetPasswordSuccess = (userDetails) => ({
    type: SignupActionTypes.RESET_PASSWORD_SUCCESS,
    payload: userDetails
});

export const forgotPasswordLoading = (isLoading) => ({
    type: SignupActionTypes.FORGOT_PASSWORD_LOADING,
    payload: isLoading
});

export const resetPasswordFailure = error => ({
    type: SignupActionTypes.RESET_PASSWORD_FAILURE,
    payload: error
});

export const googleSignUpSuccess = (userDetails) => ({
    type: SignupActionTypes.GOOGLE_SIGN_UP_SUCCESS,
    payload: userDetails
});

export const facebookSignUpSuccess = (userDetails) => ({
    type: SignupActionTypes.FACEBOOK_SIGN_UP_SUCCESS,
    payload: userDetails
});

export const linkedinSignUpSuccess = (userDetails) => ({
    type: SignupActionTypes.LINKEDIN_SIGN_UP_SUCCESS,
    payload: userDetails
});
