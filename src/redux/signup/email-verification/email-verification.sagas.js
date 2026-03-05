import {call, put} from "redux-saga/effects";
import {push} from 'connected-react-router';
import {sendEmailLinkApi, verifyEmailApi} from "./email-verification.api";
import {
    emailLinkSendFailure,
    emailLinkSendSuccess,
    emailVerificationFailure,
    emailVerificationSuccess,
    emailLinkDisableErr
} from "./email-verification.actions";
import {emailSignUpSuccess} from "../signup.actions";

export function* emailVerifyStart({
                                      payload: {
                                          code
                                      }
                                  }) {
    try {
        console.log(`Inside emailVerifyStart ${code}`);
        yield put(emailLinkDisableErr())
        const response = yield call(verifyEmailApi, code);
        console.log("response is " + JSON.stringify(response));
        if (response.data.error || response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield put(emailVerificationFailure(response.data));
        } else if (response.data.actionResult === "SUCCESS") {
            let userDetails = response.data;
            console.log("PRINTING IN sagas " + JSON.stringify(userDetails, null, 2));
            yield put(emailSignUpSuccess(userDetails));
            yield put(emailVerificationSuccess(userDetails));
            yield put(push('/signup/verify-mobile-otp'));
        }
    } catch (error) {
        console.log("##The error is " + JSON.stringify(error));
        yield  put(emailVerificationFailure(error));
    }
}

export function* emailLinkSendStart({
                                        payload: {
                                            userID
                                        }
                                    }) {
    try {
        console.log(`Inside emailLinkSendStart ${userID}`);
        yield put(emailLinkDisableErr())
        const response = yield call(sendEmailLinkApi, userID);
        console.log("response is " + JSON.stringify(response));
        if (response.data.error || response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield put(emailLinkSendFailure(response.data));
        } else if (response.data.actionResult === "SUCCESS") {
            let userDetails = response.data;
            console.log("PRINTING IN sagas " + JSON.stringify(userDetails, null, 2));
            yield put(emailLinkSendSuccess(userDetails));
        }
    } catch (error) {
        console.log("The error is " + JSON.stringify(error));
        yield  put(emailLinkSendFailure(error));
    }
}
