import MobileVerificationActionTypes from "./mobile-verification.types";

export const mobileOtpSendStart = (userID, mobile, countryCode) => ({
    type: MobileVerificationActionTypes.MOBILE_OTP_SEND_START,
    payload: {userID, mobile, countryCode}
});

export const mobileOtpSendSuccess = (userDetails) => ({
    type: MobileVerificationActionTypes.MOBILE_OTP_SEND_SUCCESS,
    payload: userDetails
});

export const mobileOtpSendFailure = error => ({
    type: MobileVerificationActionTypes.MOBILE_OTP_SEND_FAILURE,
    payload: error
});

export const mobileVerifyOTP = (mobileOTP, userId, loginType) => ({
    type: MobileVerificationActionTypes.MOBILE_VERIFY_OTP_START,
    payload: {mobileOTP, userId, loginType}
});

export const verifyMobileOTPSuccess = (userDetails) => ({
    type: MobileVerificationActionTypes.MOBILE_VERIFY_OTP_SUCCESS,
    payload: userDetails
});

export const verifyMobileOTPFailure = (error) => ({
    type: MobileVerificationActionTypes.MOBILE_VERIFY_OTP_FAILURE,
    payload: error
});

export const resetMobileNumber = () => ({
    type: MobileVerificationActionTypes.MOBILE_NUMBER_RESET
})
