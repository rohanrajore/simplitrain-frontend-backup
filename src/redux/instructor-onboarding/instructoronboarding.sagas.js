import { takeLatest, put, call, all } from "redux-saga/effects";
import ContentTypes from "../../common/contenttypes/content-types";
import InstructorOnBoardingTypes from "./instructoronboarding.types";
import { push } from "connected-react-router";
import Axios from "axios";

export function* submitNationalId(
  nationalIdObj,
  registrationValues
) {
  let uploadImgURL = process.env.REACT_APP_API_URL + "/file/s3";
  let data = new FormData();
  data.append("file", registrationValues["nationalId"]);
  return yield Axios.post(uploadImgURL, data);
}

export function* submitToApiForInstructorRegistration(
  registrationValues,
  uuid,
  action,
  currentStep
) {
  let url = process.env.REACT_APP_API_URL + "/instructor/";
  url += uuid + "/onboarding?action=" + action + "&currentStep=" + currentStep;

  if (registrationValues["nationalId"]) {
    const response = yield call(submitNationalId, registrationValues["nationalId"]);
    registrationValues["nationalId"] = response.data.s3File.id;
  }

  let bodyFormData = new FormData();
  for (let key in registrationValues) {
    var isKeyValue = !!registrationValues[key];

    if (isKeyValue) {
      bodyFormData.append(key, registrationValues[key]);
    }
  }

  // return yield Axios.post(url, bodyFormData, ContentTypes.MULTIPART);
  return yield Axios.post(url, bodyFormData);
}

export function* submitRegistrationForInstructor({
  payload: { registrationValues, uuid, action, currentStep },
}) {
  try {
    console.log(
      `Inside submitRegistrationForInstructor ` +
        JSON.stringify(registrationValues)
    );
    yield put({ type: "SHOW_LOADING" });
    const response = yield call(
      submitToApiForInstructorRegistration,
      registrationValues,
      uuid,
      action,
      currentStep
    );

    yield put({ type: "HIDE_LOADING" });
    yield put(push("/instructor-dashboard/courses"));
  } catch (error) {
    yield put(push("/instructor-dashboard/courses"));
  }
}

export function* initiatePendingApproval() {
  yield put(push("/instructor/onboarding/info"));
}

export function* onSubmitRegistrationStart() {
  yield takeLatest(
    InstructorOnBoardingTypes.REGISTRATION_STARTED,
    submitRegistrationForInstructor
  );
}

export function* onSetPendingApproval() {
  yield takeLatest(
    InstructorOnBoardingTypes.SET_PENDING_APPROVAL,
    initiatePendingApproval
  );
}

export function* onboardingSagas() {
  yield all([call(onSubmitRegistrationStart), call(onSetPendingApproval)]);
}
