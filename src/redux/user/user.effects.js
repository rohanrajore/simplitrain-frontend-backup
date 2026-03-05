import {
    becomeInstructorStart,
    emailSignInStart,
    googleSignInStart,
    linkedinSignInStart,
    facebookSignInStart
} from "./user.sagas";
import {all, call, takeLatest} from "redux-saga/effects";
import UserActionTypes from "./user.types";

export function* onFacebookSignInStart() {
    yield takeLatest(UserActionTypes.FACEBOOK_SIGN_IN_START, facebookSignInStart)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInStart)
}

export function* onLinkedinSignInStart() {
    yield takeLatest(UserActionTypes.LINKEDIN_SIGN_IN_START, linkedinSignInStart)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInStart);
}

export function* onBecomeInstructorStart() {
    yield takeLatest(UserActionTypes.BECOME_INSTRUCTOR_START, becomeInstructorStart);
}

export function* userSagas() {
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onBecomeInstructorStart),
            call(onFacebookSignInStart),
            call(onLinkedinSignInStart)
        ]);
}
