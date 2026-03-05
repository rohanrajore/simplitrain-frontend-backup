import {createSelector} from 'reselect';

const selectSignup = state => state.signup;

export const selectSignupUser = createSelector(
    [selectSignup],
    user => user.signupUser
)

export const selectSignupUserID = createSelector(
    [selectSignupUser],
    signupUser => (signupUser ? signupUser.id : null)
);

export const selectSignupUserEmail = createSelector(
    [selectSignupUser],
    signupUser => (signupUser ? signupUser.email : null)
)

export const selectSignupType = createSelector(
    [selectSignupUser],
    signupUser => (signupUser ? signupUser.signupType : null)
);

export const selectSignupError = createSelector(
    [selectSignup],
    signupUser => signupUser.error
)

export const selectEmailVerified = createSelector(
    [selectSignupUser],
    signupUser => (signupUser ? signupUser.emailVerified : false)
);

export const selectMobileNumber = createSelector(
    [selectSignupUser],
    signupUser => (signupUser ? signupUser.mobile : false)
);

export const selectIsSocialMediaSignup = createSelector(
    [selectSignupType],
    signupType => {
        if (signupType === "GOOGLE" || signupType === "FACEBOOK" || signupType === "LINKEDIN") {
            return true;
        } else if (signupType === "EMAIL") {
            return false
        } else {
            return null;
        }
    }
);

/*
export const selectForgotPassword = createSelector(
    [selectSignup],
    user => !!user.forgotPassword
);
*/

export const selectResetPassword = createSelector(
    [selectSignup],
    user => !!user.resetPasswordSuccess
)

export const selectForgotPasswordSentSuccess = createSelector(
    [selectSignup],
    user => !!user.forgotPasswordSentSuccess
)

export const selectForgotPasswordLoading = createSelector(
    [selectSignup],
    user => !!user.forgotPasswordLoading
)

export const selectResetPasswordError = createSelector(
    [selectSignup],
    user => user.resetPasswordError
)
