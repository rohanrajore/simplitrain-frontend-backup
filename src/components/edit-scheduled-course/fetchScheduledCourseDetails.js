const fetchScheduledCourseDetails = async (batchID) => {
  const response = await fetch(
    process.env.REACT_APP_API_URL + `/course-batches/${batchID}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  const result = await response.json();
  console.log(result);
  return result;
};
export default fetchScheduledCourseDetails;
