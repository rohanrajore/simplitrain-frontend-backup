const removeFromSavedLater= async function(courseBatchID,anonymousUserID,loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/savelater`
    const response = await fetch(url,{
      method:"DELETE",
      body: JSON.stringify({
        "courseBatchID":courseBatchID,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default removeFromSavedLater;
