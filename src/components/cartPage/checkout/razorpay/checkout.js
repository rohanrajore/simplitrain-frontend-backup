const callCheckout= async function(cartID,loggedInUserID,anonymousUserID){
    let url = process.env.REACT_APP_API_URL + `/cart/checkout`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "cartID":cartID,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default callCheckout;
