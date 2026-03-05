import {all, call, takeLatest} from "redux-saga/effects";
import EmailVerificationActionTypes from "./email-verification.types";
import {emailLinkSendStart, emailVerifyStart} from "./email-verification.sagas";

export function* onEmailVerifyStart() {
    yield takeLatest(EmailVerificationActionTypes.EMAIL_VERIFY_START, emailVerifyStart);
}

export function* onEmailLinkSendStart() {
    yield takeLatest(EmailVerificationActionTypes.EMAIL_LINK_SEND_START, emailLinkSendStart);
}

export function* emailVerificationSagas() {
    yield all([call(onEmailVerifyStart), call(onEmailLinkSendStart)]);
}
