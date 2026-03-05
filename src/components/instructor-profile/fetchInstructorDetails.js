
const fetchInstructorDetails = async instructorID =>{
  let url = process.env.REACT_APP_API_URL + `/instructor/${instructorID}`
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      })

    const result = await response.json()
    return result.instructor
}
export default fetchInstructorDetails;
