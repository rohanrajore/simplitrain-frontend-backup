import {sendMobileOTPApi, verifyMobileOTPApi} from "./mobile-verification.api";
import {call, put} from "redux-saga/effects";
import {
    mobileOtpSendFailure,
    mobileOtpSendSuccess,
    verifyMobileOTPFailure,
    verifyMobileOTPSuccess
} from "./mobile-verification.actions";
import {push} from 'connected-react-router';

export function* mobileOTPVerifyStart({
                                          payload: {
                                              mobileOTP, userId, loginType
                                          }
                                      }) {
    try {
        console.log(`Inside mobileOTPVerifyStart ${mobileOTP}, ${userId}, ${loginType}`);
        const response = yield call(verifyMobileOTPApi, mobileOTP, userId, loginType);
        if (response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield  put(verifyMobileOTPFailure(response.data));
        } else if (response.data.actionResult === "SUCCESS") {
            yield put(verifyMobileOTPSuccess(response.data));
            const userDetails = response.data;
            if (userDetails.userRoles.includes("INSTRUCTOR")) {
                yield put(push('/instructor-dashboard/courses'));
            } else if (userDetails.userRoles.includes("LEARNER")) {
                yield put(push('/'));
            }
        }
    } catch (error) {
        console.log("The error is " + JSON.stringify(error));
        yield  put(verifyMobileOTPFailure(error.response));
    }
}

export function* mobileOTPSendStart({
                                        payload: {
                                            userID, mobile, countryCode
                                        }
                                    }) {
    try {
        console.log(`Inside mobileOTPSendStart ${userID}, ${countryCode} ${mobile}`);
        const response = yield call(sendMobileOTPApi, userID, mobile, countryCode);
        console.log("response is " + JSON.stringify(response));
        if (response.data.error || response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield put(mobileOtpSendFailure(response.data));
        } else if (response.data.actionResult === "SUCCESS") {
            let userDetails = response.data;
            userDetails.mobile = mobile;
            console.log(`mobile: ${mobile}`);
            console.log("PRINTING IN sagas " + JSON.stringify(userDetails, null, 2));
            yield put(mobileOtpSendSuccess(userDetails));
            yield put(push("/signup/verify-mobile-otp"))
        }
    } catch (error) {
        console.log("The error is " + JSON.stringify(error));
        yield  put(mobileOtpSendFailure(error.response));
    }
}
