import EmailVerificationActionTypes from "./email-verification.types";

const INITIAL_STATE = {
    user: null,
    emailLinkSendError: null,
    emailVerificationError: null,
};

const emailVerificationReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EmailVerificationActionTypes.EMAIL_VERIFY_SUCCESS:
            return {
                ...state,
                user: {...action.payload, signupType: 'EMAIL'},
                emailLinkSendError: null,
                emailVerificationError: null,
            }

        case EmailVerificationActionTypes.EMAIL_VERIFY_FAILURE:
            return {
                ...state,
                user: null,
                emailLinkSendError: null,
                emailVerificationError: action.payload,
            };

        case EmailVerificationActionTypes.EMAIL_LINK_SEND_FAILURE:
            return {
                ...state,
                emailLinkSent: false,
                emailLinkSentTime: null,
                emailLinkSendError: action.payload,
                emailVerificationError: null,
            }

        case EmailVerificationActionTypes.EMAIL_LINK_SEND_SUCCESS:
            return {
                ...state,
                emailLinkSent: true,
                emailLinkSentTime: new Date(),
                emailLinkSendError: null,
                emailVerificationError: null,
            }
        case EmailVerificationActionTypes.EMAIL_LINK_DISABLE_ERR:
                return {
                    ...state,
                    emailLinkSent: false,
                    emailLinkSentTime: null,
                }

        default:
            return state;
    }
}

export default emailVerificationReducers;
