import { call, put, delay } from "redux-saga/effects";

import {
  becomeInstructorFailure,
  becomeInstructorSuccess,
  emailSignInFailure,
  emailSignInSuccess,
  facebookSignInFailure,
  facebookSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
  linkedinSignInFailure,
  linkedinSignInSuccess,
  removeError,
} from "./user.actions";
import { push } from "connected-react-router";
import {
  becomeInstructorApi,
  facebookLoginApi,
  googleLoginApi,
  linkedinLoginApi,
  loginUsingEmailCredentialsApi,
} from "./user.api";
import {
  emailSignUpSuccess,
  facebookSignUpSuccess,
  googleSignUpSuccess,
  linkedinSignUpSuccess,
} from "../signup/signup.actions";

export function* facebookSignInStart({
  payload: { accessToken, becomeInstructor },
}) {
  yield console.log(
    `Inside facebookSignInStart ${accessToken} ${becomeInstructor}`
  );
  let response = {};
  try {
    response = yield call(facebookLoginApi, accessToken, becomeInstructor);
  } catch (error) {
    yield put(
      facebookSignInFailure({
        code: "12345",
        message: "Network error",
        actionResult: "FAILURE",
      })
    );
    return;
  }
  console.log("printing response: " + JSON.stringify(response));
  const userDetails = response.data;
  if (userDetails.actionResult === "FAILURE") {
    console.log("The error is " + JSON.stringify(userDetails));
    yield put(facebookSignInFailure(userDetails));
  } else if (userDetails.actionResult === "SUCCESS") {
    if (userDetails.mobileVerified) {
      yield put(facebookSignInSuccess(userDetails));
      if (userDetails.userRoles.includes("INSTRUCTOR")) {
        if (userDetails.instructor) {
          const isOnboarded =
            userDetails.instructor.onboardingStatus === "APPROVED" ||
            userDetails.instructor.onboardingStatus === "PENDING_APPROVAL";
          const isOnboardingPending =
            userDetails.instructor.onboardingStatus ===
              "INSTRUCTOR_PROFILE_INITIATED" ||
            userDetails.instructor.onboardingStatus ===
              "ONBOARDING_FORM_IN_PROGRESS";
          if (isOnboarded) {
            yield put(push("/instructor-dashboard/courses"));
          } else if (isOnboardingPending) {
            yield put(push("/instructor/onboarding"));
          }
        }
      } else if (userDetails.userRoles.includes("LEARNER")) {
        yield put(push("/"));
      }
    } else {
      // yield put(facebookSignInFailure({message: "Mobile is not verified"}));
      yield put(facebookSignUpSuccess(userDetails));
      yield put(push("/signup/verify-mobile"));
    }
  }
}

export function* googleSignInStart({ payload: { idToken, becomeInstructor } }) {
  yield console.log(`Inside googleSignInStart ${idToken} ${becomeInstructor}`);
  let response = {};
  try {
    response = yield call(googleLoginApi, idToken, becomeInstructor);
  } catch (error) {
    yield put(
      googleSignInFailure({
        code: "12345",
        message: "Network error",
        actionResult: "FAILURE",
      })
    );
    return;
  }
  console.log("printing response: " + JSON.stringify(response));
  const userDetails = response.data;
  if (userDetails.actionResult === "FAILURE") {
    console.log("The error is " + JSON.stringify(userDetails));
    yield put(googleSignInFailure(userDetails));
  } else if (userDetails.actionResult === "SUCCESS") {
    if (userDetails.mobileVerified) {
      yield put(googleSignInSuccess(userDetails));
      if (userDetails.userRoles.includes("INSTRUCTOR")) {
        if (userDetails.instructorOnboardingStatus) {
          const isOnboarded =
            userDetails.instructorOnboardingStatus === "APPROVED" ||
            userDetails.instructorOnboardingStatus === "PENDING_APPROVAL";
          const isOnboardingPending =
            userDetails.instructorOnboardingStatus ===
              "INSTRUCTOR_PROFILE_INITIATED" ||
            userDetails.instructorOnboardingStatus ===
              "ONBOARDING_FORM_IN_PROGRESS";
          if (isOnboarded) {
            yield put(push("/instructor-dashboard/courses"));
          } else if (isOnboardingPending) {
            yield put(push("/instructor/onboarding"));
          }
        }
      } else if (userDetails.userRoles.includes("LEARNER")) {
        yield put(push("/"));
      }
    } else {
      // yield put(googleSignInFailure({message: "Mobile is not verified"}));
      yield put(googleSignUpSuccess(userDetails));
      yield put(push("/signup/verify-mobile"));
    }
  }
}

export function* linkedinSignInStart({ payload: { code, becomeInstructor } }) {
  yield console.log(`Inside linkedinSignInStart ${code} ${becomeInstructor}`);
  let response = {};
  try {
    response = yield call(linkedinLoginApi, code, becomeInstructor);
  } catch (error) {
    yield put(
      linkedinSignInFailure({
        code: "12345",
        message: "Network error",
        actionResult: "FAILURE",
      })
    );
    return;
  }
  console.log("printing response: " + JSON.stringify(response));
  const userDetails = response.data;
  if (userDetails.actionResult === "FAILURE") {
    console.log("The error is " + JSON.stringify(userDetails));
    yield put(linkedinSignInFailure(userDetails));
    yield put(push("/login"));
  } else if (userDetails.actionResult === "SUCCESS") {
    if (userDetails.mobileVerified) {
      yield put(linkedinSignInSuccess(userDetails));
      if (userDetails.userRoles.includes("INSTRUCTOR")) {
        if (userDetails.instructor) {
          const isOnboarded =
            userDetails.instructor.onboardingStatus === "APPROVED" ||
            userDetails.instructor.onboardingStatus === "PENDING_APPROVAL";
          const isOnboardingPending =
            userDetails.instructor.onboardingStatus ===
              "INSTRUCTOR_PROFILE_INITIATED" ||
            userDetails.instructor.onboardingStatus ===
              "ONBOARDING_FORM_IN_PROGRESS";
          if (isOnboarded) {
            yield put(push("/instructor-dashboard/courses"));
          } else if (isOnboardingPending) {
            yield put(push("/instructor/onboarding"));
          }
        }
      } else if (userDetails.userRoles.includes("LEARNER")) {
        yield put(push("/"));
      }
    } else {
      yield put(linkedinSignUpSuccess(userDetails));
      // yield put(push('/login'));
      yield put(push("/signup/verify-mobile"));
    }
  }
}

export function* becomeInstructorStart({ payload: { userID } }) {
  console.log("Inside becomeInstructor " + userID);
  const response = yield call(becomeInstructorApi, userID);
  if (response.data.actionResult === "SUCCESS") {
    yield put(becomeInstructorSuccess(response.data));
    yield put(push("/instructor/onboarding"));
  } else if (response.data.actionResult === "FAILURE") {
    yield put(becomeInstructorFailure(response.data));
  }
}

export function* emailSignInStart({ payload: { email, password } }) {
  try {
    console.log(`Inside signInWithEmail ${email} and ${password}`);
    const response = yield call(loginUsingEmailCredentialsApi, email, password);
    const userDetails = response.data;
    console.log("printing userDetails: " + JSON.stringify(userDetails));
    if (userDetails.actionResult === "FAILURE") {
      console.log("The error is " + JSON.stringify(userDetails));
      yield put(emailSignInFailure(userDetails));
      yield delay(4000);
      yield put(removeError());
    } else if (userDetails.actionResult === "SUCCESS") {
      if (userDetails.emailVerified && userDetails.mobileVerified) {
        yield put(emailSignInSuccess(userDetails));
        if (userDetails.userRoles.includes("INSTRUCTOR")) {
          if (userDetails.instructorOnboardingStatus) {
            const isOnboarded =
              userDetails.instructorOnboardingStatus === "APPROVED" ||
              userDetails.instructorOnboardingStatus === "PENDING_APPROVAL";
            const isOnboardingPending =
              userDetails.instructorOnboardingStatus ===
                "INSTRUCTOR_PROFILE_INITIATED" ||
              userDetails.instructorOnboardingStatus ===
                "ONBOARDING_FORM_IN_PROGRESS";
            if (isOnboarded) {
              yield put(push("/instructor-dashboard/courses"));
            } else if (isOnboardingPending) {
              yield put(push("/instructor/onboarding"));
            }
          }
        } else if (userDetails.userRoles.includes("LEARNER")) {
          yield put(push("/"));
        }
      } else if (!userDetails.emailVerified) {
        yield put(emailSignUpSuccess(userDetails));
        yield put(push("/signup/verify-email"));
      } else if (!userDetails.mobileVerified) {
        yield put(emailSignUpSuccess(userDetails));
        yield put(push("/signup/verify-mobile"));
      } else {
        console.error("ILLEGAL STATE");
      }
    }
  } catch (error) {
    console.log(error);
    yield put(emailSignInFailure(error));
    yield delay(4000);
    yield put(removeError());
  }
}
