import MobileVerificationActionTypes from "./mobile-verification.types";

const INITIAL_STATE = {
    mobileVerificationError: null,
    mobileOtpVerificationError: null,
};

const mobileVerificationReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MobileVerificationActionTypes.MOBILE_OTP_SEND_FAILURE:
            return {
                ...state,
                mobileVerificationError: action.payload,
                mobileOtpVerificationError: null,
            }

        case MobileVerificationActionTypes.MOBILE_OTP_SEND_SUCCESS:
            return {
                ...state,
                mobileOtpSent: true,
                mobileOtpSentTime: new Date(),
                mobileVerificationError: null,
                mobileOtpVerificationError: null
            }

        case MobileVerificationActionTypes.MOBILE_NUMBER_RESET:
            return {
                ...state,
                mobile: null,
                mobileOtpSent: false,
                mobileOtpSentTime: null,
                mobileVerificationError: null,
                mobileOtpVerificationError: null
            }

        case MobileVerificationActionTypes.MOBILE_VERIFY_OTP_SUCCESS:
            return {
                ...state,
                mobileVerificationError: null,
                mobileOtpVerificationError: null
            };

        case MobileVerificationActionTypes.MOBILE_VERIFY_OTP_FAILURE:
            return {
                ...state,
                mobileVerificationError: null,
                mobileOtpVerificationError: action.payload
            };

        default:
            return state;
    }
}

export default mobileVerificationReducers;
