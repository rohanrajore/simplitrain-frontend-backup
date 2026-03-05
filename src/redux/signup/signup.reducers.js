import SignupActionTypes from "./signup.types";
import MobileVerificationActionTypes from "./mobile-verification/mobile-verification.types";

const INITIAL_STATE = {
    signupUser: null,
    error: null
};

const signupReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        /**
         * This is a special case here. The reason this is here is to update the mobile number in case it is changed in the verify mobile OTP screen
         */
        case MobileVerificationActionTypes.MOBILE_OTP_SEND_SUCCESS:
            return {
                ...state,
                signupUser: {...state.signupUser, mobile: action.payload.mobile}
            };

        case SignupActionTypes.EMAIL_SIGN_UP_SUCCESS:
            return {
                ...state,
                signupUser: {...action.payload, signupType: 'EMAIL'},
                error: null
            };

        case SignupActionTypes.EMAIL_SIGN_UP_FAILURE:
            return {
                ...state,
                signupUser: null,
                error: action.payload
            };

        case SignupActionTypes.FACEBOOK_SIGN_UP_SUCCESS:
            return {
                ...state,
                signupUser: {...action.payload, signupType: 'FACEBOOK'},
                error: null
            };

        case SignupActionTypes.GOOGLE_SIGN_UP_SUCCESS:
            return {
                ...state,
                signupUser: {...action.payload, signupType: 'GOOGLE'},
                error: null
            };

        case SignupActionTypes.LINKEDIN_SIGN_UP_SUCCESS:
            return {
                ...state,
                signupUser: {...action.payload, signupType: 'LINKEDIN'},
                error: null
            };

        case SignupActionTypes.FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                forgotPassword: true,
                forgotPasswordSentSuccess: true,
                error: null
            }

        case SignupActionTypes.FORGOT_PASSWORD_FAILURE:
            return {
                ...state,
                forgotPassword: true,
                forgotPasswordSentFailure: false,
                error: action.payload
            }

        case SignupActionTypes.FORGOT_PASSWORD_LOADING:
              return {
                  ...state,
                  forgotPasswordLoading: action.payload
            }

        /*        case SignupActionTypes.RESET_PASSWORD_REQUEST:
                    return {
                        ...state,
                        resetPassword: true,
                        code: action.payload
                    }*/

        case SignupActionTypes.RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                resetPasswordSuccess: true,
                resetPasswordError: null
            }

        case SignupActionTypes.RESET_PASSWORD_FAILURE:
            return {
                ...state,
                forgotPassword: true,
                resetPasswordSuccess: false,
                resetPasswordError: action.payload
            }


        default:
            return state;
    }
}

export default signupReducers;
