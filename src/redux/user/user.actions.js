import UserActionTypes from './user.types';

export const facebookSignInStart = (accessToken, becomeInstructor) => ({
    type: UserActionTypes.FACEBOOK_SIGN_IN_START,
    payload: {accessToken, becomeInstructor}
});

export const facebookSignInSuccess = (user) => ({
    type: UserActionTypes.FACEBOOK_SIGN_IN_SUCCESS,
    payload: user
});

export const facebookSignInFailure = error => ({
    type: UserActionTypes.FACEBOOK_SIGN_IN_FAILURE,
    payload: error
});

export const googleSignInStart = (idToken, becomeInstructor) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START,
    payload: {idToken, becomeInstructor}
});

export const googleSignInSuccess = (user) => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload: user
});

export const googleSignInFailure = error => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: error
});

export const linkedinSignInStart = (code, becomeInstructor) => ({
    type: UserActionTypes.LINKEDIN_SIGN_IN_START,
    payload: {code, becomeInstructor}
});

export const linkedinSignInSuccess = (user) => ({
    type: UserActionTypes.LINKEDIN_SIGN_IN_SUCCESS,
    payload: user
});

export const linkedinSignInFailure = error => ({
    type: UserActionTypes.LINKEDIN_SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = (email, password) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: {email, password}
});

export const emailSignInSuccess = (userDetails) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload: userDetails
});

export const emailSignInFailure = error => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: error
});

export const removeError = () => ({
    type: UserActionTypes.REMOVE_ERROR
});

export const logout = () => ({
    type: UserActionTypes.LOGOUT
});

export const becomeInstructorStart = (userID) => ({
    type: UserActionTypes.BECOME_INSTRUCTOR_START,
    payload: {userID}
})

export const changeView = (view) => ({
    type: UserActionTypes.CHANGE_VIEW,
    payload: {view}
})

export const becomeInstructorSuccess = (userDetails) => ({
    type: UserActionTypes.BECOME_INSTRUCTOR_SUCCESS,
    payload: userDetails
})

export const becomeInstructorFailure = (error) => ({
    type: UserActionTypes.BECOME_INSTRUCTOR_FAILURE,
    payload: error
})

export const setLoggedInCount = () => ({
    type: UserActionTypes.LOGGEDIN_COUNT,
})

export const updateProfile = (user) => ({
    type: UserActionTypes.UPDATE_PROFILE,
    payload: user
})
