import Axios from "axios";

export function* createCourseApi(createCourseValues, userID) {
  let url = process.env.REACT_APP_API_URL + "/courses";

  createCourseValues.userID = userID;
  console.log(`Submitting values to create course API ${createCourseValues}`);

  return yield Axios.post(url, createCourseValues);
}
