
const createScheduledBatch = async function(data){

  let url = process.env.REACT_APP_API_URL + "/courses/schedule?action=SUBMIT";

  const response = await fetch(url,{
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(data)
    })
   const result = await response.json()
   console.log(result)
   return result
}

export default createScheduledBatch;
