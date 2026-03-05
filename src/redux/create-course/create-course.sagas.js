import { call, put } from "redux-saga/effects";
import { createCourseApi } from "./create-course.api";
import { push } from "connected-react-router";

export function* submitCreateCourse({
  payload: { createCourseValues, userID },
}) {
  try {
    console.log(
      `Inside submitCreateCourse ` + JSON.stringify(createCourseValues)
    );
    yield put({
      type: "SHOW_LOADING",
    });
    const response = yield call(createCourseApi, createCourseValues, userID);

    var isSuccess = response.data.actionResult === "SUCCESS";

    yield put({
      type: "HIDE_LOADING",
    });
    if (isSuccess) {
      yield put(push("/instructor-dashboard/courses"));
    } else {
      yield put(push("/instructor/create-course/failed"));
    }
  } catch (error) {
    yield put(push("/instructor/create-course/failed"));
  }
}
