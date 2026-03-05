import EmailVerificationActionTypes from "./email-verification.types";

export const emailVerificationStart = (code) => ({
    type: EmailVerificationActionTypes.EMAIL_VERIFY_START,
    payload: {code}
});

export const emailVerificationSuccess = (userDetails) => ({
    type: EmailVerificationActionTypes.EMAIL_VERIFY_SUCCESS,
    payload: userDetails
});

export const emailVerificationFailure = error => ({
    type: EmailVerificationActionTypes.EMAIL_VERIFY_FAILURE,
    payload: error
});

export const emailLinkSendStart = (userID) => ({
    type: EmailVerificationActionTypes.EMAIL_LINK_SEND_START,
    payload: {userID}
});

export const emailLinkSendSuccess = (userDetails) => ({
    type: EmailVerificationActionTypes.EMAIL_LINK_SEND_SUCCESS,
    payload: userDetails
});

export const emailLinkSendFailure = error => ({
    type: EmailVerificationActionTypes.EMAIL_LINK_SEND_FAILURE,
    payload: error
});

export const emailLinkDisableErr = () => ({
    type: EmailVerificationActionTypes.EMAIL_LINK_DISABLE_ERR,
});
