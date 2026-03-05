
const fetchInstructorCourses = async (instructorID,pageNum,pageSize) =>{
  let url = process.env.REACT_APP_API_URL +
            `/courses/searchByInstructor?instructorID=${instructorID}&pageNum=${pageNum}&pageSize=${pageSize}`
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      })

    const result = await response.json()

    return result.courses
}
export default fetchInstructorCourses;
