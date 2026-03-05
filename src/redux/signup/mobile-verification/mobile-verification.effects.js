import {all, call, takeLatest} from "redux-saga/effects";
import MobileVerificationActionTypes from "./mobile-verification.types";
import {mobileOTPSendStart, mobileOTPVerifyStart} from "./mobile-verification.sagas";

export function* onMobileOTPVerifyStart() {
    yield takeLatest(MobileVerificationActionTypes.MOBILE_VERIFY_OTP_START, mobileOTPVerifyStart);
}

export function* onMobileOtpSend() {
    yield takeLatest(MobileVerificationActionTypes.MOBILE_OTP_SEND_START, mobileOTPSendStart);
}

export function* mobileVerificationSagas() {
    yield all([call(onMobileOTPVerifyStart),
        call(onMobileOtpSend)]);
}
