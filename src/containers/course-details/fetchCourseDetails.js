
const fetchCourseDetails= async (batchID,userID) =>{
  let url = process.env.REACT_APP_API_URL + `/course-batches/${batchID}?userID=${userID}`
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    console.log(result)
    console.log(url)
    return result
}
export default fetchCourseDetails;
