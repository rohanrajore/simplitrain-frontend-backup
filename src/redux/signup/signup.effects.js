import {all, call, takeLatest} from "redux-saga/effects";
import SignupActionTypes from "./signup.types";
import {emailSignupStart, forgotPasswordStart, resetPasswordStart} from "./signup.sagas";

export function* onEmailSignUpStart() {
    yield takeLatest(SignupActionTypes.EMAIL_SIGN_UP_START, emailSignupStart)
}

//TODO remove this code
// export function* onEmailMobileOTPsVerifyStart() {
//     yield takeLatest(SignupActionTypes.EMAIL_MOBILE_VERIFY_OTPS_START, emailMobileOTPsVerifyStart)
// }

export function* onForgotPasswordStart() {
    yield takeLatest(SignupActionTypes.FORGOT_PASSWORD_START, forgotPasswordStart);
}

export function* onResetPasswordStart() {
    yield takeLatest(SignupActionTypes.RESET_PASSWORD_START, resetPasswordStart);
}



export function* signupUserSagas() {
    yield all([call(onEmailSignUpStart),
        call(onForgotPasswordStart),
        call(onResetPasswordStart),
    ]);
}
