import UserActionTypes from "./user.types";
import SignupActionTypes from "../signup/signup.types";
import MobileVerificationActionTypes from "../signup/mobile-verification/mobile-verification.types";

const INITIAL_STATE = {
  error: null,
  currentUser: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    countryCode: null,
    mobile: null,
    accessToken: null,
    loginType: null,
    isLearner: false,
    isInstructor: false,
    loggedInSince: null,
    profileImg: null,
    activeView: null,
    instructor: {
      onboardingStatus: null,
    },
    loggedInCount: 0,
  },
};

const getCurrentUser = (state, action) => {
  return {
    ...state.currentUser,
    id: action.payload.id,
    email: action.payload.email,
    firstName: action.payload.firstName,
    lastName: action.payload.lastName,
    countryCode: action.payload.countryCode,
    profileImg: action.payload.profileImg,
    mobile: action.payload.mobile,
    accessToken: action.payload.token,
    loginType: action.payload.loginType,
    hasEmailSignin: action.payload.hasEmailSignin,
    isLearner:
      action.payload.userRoles && action.payload.userRoles.includes("LEARNER"),
    isInstructor:
      action.payload.userRoles &&
      action.payload.userRoles.includes("INSTRUCTOR"),
    loggedInSince: new Date(),
    activeView: action.payload.activeView,
    instructor: {
      onboardingStatus: action.payload.instructorOnboardingStatus,
    },
  };
};

const userReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.FACEBOOK_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: getCurrentUser(state, action),
        error: null,
        loggedInCount: 1,
      };

    case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: getCurrentUser(state, action),
        error: null,
        loggedInCount: 1,
      };

    case UserActionTypes.LINKEDIN_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: getCurrentUser(state, action),
        error: null,
        loggedInCount: 1,
      };

    case UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: getCurrentUser(state, action),
        error: null,
        loggedInCount: 1,
      };

    case UserActionTypes.FACEBOOK_SIGN_IN_FAILURE:
    case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
    case UserActionTypes.LINKEDIN_SIGN_IN_FAILURE:
    case UserActionTypes.EMAIL_SIGN_IN_FAILURE:
      return {
        ...state,
        currentUser: null,
        error: action.payload,
      };

    case UserActionTypes.LOGOUT:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.REMOVE_ERROR:
      return {
        ...state,
        error: null,
      };

    case MobileVerificationActionTypes.MOBILE_VERIFY_OTP_SUCCESS:
      return {
        ...state,
        currentUser: getCurrentUser(state, action),
        error: null,
      };

    case SignupActionTypes.GOOGLE_SIGN_UP_SUCCESS:
      return {
        ...state,
        error: null,
      };

    case UserActionTypes.BECOME_INSTRUCTOR_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          isInstructor: true,
          instructor: {
            ...state.currentUser.instructor,
            onboardingStatus: action.payload.instructorOnboardingStatus,
          },
        },
      };

    case UserActionTypes.BECOME_INSTRUCTOR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UserActionTypes.CHANGE_VIEW:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          activeView: action.payload,
        },
        error: null,
      };
    case UserActionTypes.LOGGEDIN_COUNT:
      return {
        ...state,
        loggedInCount: state.loggedInCount + 1,
      };

    case UserActionTypes.UPDATE_PROFILE:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
export default userReducers;
