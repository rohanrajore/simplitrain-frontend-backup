const removeCoupon= async function(cartItemID,couponCode,anonymousUserID,loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/coupons`
    const response = await fetch(url,{
      method:"DELETE",
      body: JSON.stringify({
        "cartItemID":cartItemID,
        "couponCode":couponCode,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default removeCoupon;
