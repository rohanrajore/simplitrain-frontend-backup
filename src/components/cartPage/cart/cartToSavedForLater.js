const cartToSavedForLater= async function(batchID,loggedInUserID,anonymousUserID){
    let url = process.env.REACT_APP_API_URL + `/cart/cart-to-save-for-later`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "courseBatchID":batchID,
        "loggedInUserID":loggedInUserID,
        "anonymousUserID":anonymousUserID
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default cartToSavedForLater;
