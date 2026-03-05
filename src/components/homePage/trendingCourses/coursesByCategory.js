
const fetchCoursesByCategory= async (categoryId,filter) =>{
  let url = process.env.REACT_APP_API_URL + `/courses/searchByCategory?categoryId=${categoryId}&pageNum=0&pageSize=10&homePageFilter=${filter}`

    const response = await fetch(url,{
      method: 'GET',
      headers: { 'Content-Type': 'application/json'}
      });
    const result= await response.json();
    console.log(result)
    return result
}
export default fetchCoursesByCategory;
