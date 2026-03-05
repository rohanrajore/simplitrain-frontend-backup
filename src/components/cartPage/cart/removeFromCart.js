const removeFromCart= async function(batchID,anonymousUserID,loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/cart`
    const response = await fetch(url,{
      method:"DELETE",
      body: JSON.stringify({
        "courseBatchID":batchID,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default removeFromCart;
