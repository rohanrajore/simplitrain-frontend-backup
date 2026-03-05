import {
    all,
    call
} from 'redux-saga/effects';
import {
    userSagas
} from './user/user.effects'
import {
    signupUserSagas
} from "./signup/signup.effects";
import {
    onboardingSagas
} from "./instructor-onboarding/instructoronboarding.sagas";
import {
    createCourseSagas
} from "./create-course/create-course.effects"
import {
    emailVerificationSagas
} from "./signup/email-verification/email-verification.effects";
import {
    mobileVerificationSagas
} from "./signup/mobile-verification/mobile-verification.effects";

export default function* rootSaga() {
    yield all([
        call(userSagas),
        call(signupUserSagas),
        call(emailVerificationSagas),
        call(mobileVerificationSagas),
        call(onboardingSagas),
        call(createCourseSagas)
    ])
}