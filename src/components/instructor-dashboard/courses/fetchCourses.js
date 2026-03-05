
const fetchCourses= async (userId) =>{
  let url = process.env.REACT_APP_API_URL + "/courses?userID=" + userId;
    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    return result.courseBriefDetailsForDashboardList.content;
}
export default fetchCourses;
