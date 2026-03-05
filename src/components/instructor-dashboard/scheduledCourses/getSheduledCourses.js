
const getSheduledCourses = async function(search, sort, filter, pageSize, offset, courseName){

  const response = await fetch(`http://localhost:3002/`,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({search,sort,filter,pageSize,offset,courseName})
    })
   const result = await response.json()

   return result
}

export default getSheduledCourses;
