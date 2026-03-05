import {
    takeLatest,
    call,
    all
} from "redux-saga/effects";
import CreateCourseTypes from "./create-course.types";
import {
    submitCreateCourse
} from "./create-course.sagas"


export function* onSubmitCreateCourseStart() {
    yield takeLatest(
        CreateCourseTypes.CREATE_COURSE_STARTED, submitCreateCourse
    );
}

export function* createCourseSagas() {
    yield all([call(onSubmitCreateCourseStart)]);
}