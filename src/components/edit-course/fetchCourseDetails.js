const fetchCourseDetails = async (courseID) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + `/courses/${courseID}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};
export default fetchCourseDetails;
