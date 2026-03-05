
const getScheduledCourses = async function(search, sort, filter, pageSize, offset, courseID, currentUser){

  // Here we will divide with pageSize so page change can work succesfully
  const pageNumber= offset/pageSize
  let url = process.env.REACT_APP_API_URL + "/instructor/" + currentUser.id + "/course-batches/scheduled" +
  `?pageSize=${pageSize}&pageNum=${pageNumber}&courseID=${courseID}&sortBy=${sort}`;
  console.log(url)
  const response = await fetch(url,{
    method: 'GET',
    headers: { 'Content-Type': 'application/json'}
    })
   const result = await response.json()
   console.log(result)
   return result
}

export default getScheduledCourses;
