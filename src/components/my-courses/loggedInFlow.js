const fetchBatchesLoggedIn= async function(loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/my-bookings?loggedInUserID=${loggedInUserID}`

    const response = await fetch(url,{
      method:"GET",
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default fetchBatchesLoggedIn;
