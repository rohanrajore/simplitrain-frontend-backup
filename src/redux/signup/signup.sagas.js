import {
    emailSignUpFailure,
    emailSignUpSuccess,
    forgotPasswordFailure,
    forgotPasswordSuccess,
    forgotPasswordLoading,
    resetPasswordFailure,
    resetPasswordSuccess
} from "./signup.actions";
import {call, put} from "redux-saga/effects";
import {forgotPasswordApi, resetPasswordApi, signUpToApiUsingEmailAndPassword} from "./signup.api";
import {push} from 'connected-react-router';

export function* emailSignupStart({
                                      payload: {firstName, lastName, email, password, mobile, becomeInstructor}
                                  }) {
    console.log(`Inside signUpWithEmail ${firstName}, ${lastName}, ${email}, ${password}, ${mobile} ${becomeInstructor}`);
    const response = yield call(signUpToApiUsingEmailAndPassword, firstName, lastName, email, password, mobile, becomeInstructor);
    console.log("printing userDetails: " + JSON.stringify(response));
    if (response.data.actionResult === "FAILURE") {
        console.log("The error is " + JSON.stringify(response.data));
        yield put(emailSignUpFailure(response.data));
    } else if (response.data.actionResult === "SUCCESS") {
        yield put(emailSignUpSuccess(response.data));
        yield put(push('/signup/verify-email'));
    }
}

export function* forgotPasswordStart({
                                         payload: {
                                             email
                                         }
                                     }) {
    try {
        console.log(`Inside forgotPasswordStart ${email}`);
        yield put(forgotPasswordLoading(true));
        const response = yield call(forgotPasswordApi, email);
        console.log("response is " + JSON.stringify(response));
        if (response.data.error || response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield put(forgotPasswordFailure(response.data));
            yield put(forgotPasswordLoading(false));
            //TODO SHOW AN ERROR IN THE SAME PAGE
        } else if (response.data.actionResult === "SUCCESS") {
            let userDetails = response.data;
            console.log("PRINTING IN sagas " + JSON.stringify(userDetails, null, 2));
            yield put(forgotPasswordSuccess(userDetails));
            yield put(forgotPasswordLoading(false));
        }
    } catch (error) {
        console.log("The error is " + JSON.stringify(error));
        yield  put(forgotPasswordFailure(error.response));
        yield put(forgotPasswordLoading(false));
    }
}

export function* resetPasswordStart({
                                        payload: {
                                            code, password
                                        }
                                    }) {
    try {
        console.log(`Inside resetPasswordStart ${code}, ${password}`);
        const response = yield call(resetPasswordApi, code, password);
        console.log("response is " + JSON.stringify(response));
        if (response.data.error || response.data.actionResult === "FAILURE") {
            console.log("The error is " + JSON.stringify(response.data));
            yield put(resetPasswordFailure(response.data));
        } else if (response.data.actionResult === "SUCCESS") {
            let userDetails = response.data;
            console.log("PRINTING IN sagas " + JSON.stringify(userDetails, null, 2));
            yield put(resetPasswordSuccess(userDetails));
        }
    } catch (error) {
        console.log("The error is " + JSON.stringify(error));
        yield  put(resetPasswordFailure(error.response));
    }
}
