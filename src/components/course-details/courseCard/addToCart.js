const addItemToCart= async function(batchID,anonymousUserID,loggedInUserID,couponID,couponCode){
    let url = process.env.REACT_APP_API_URL + `/cart`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "courseBatchID":batchID,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID,
        "couponCards":couponID===""?[]: [{"id":couponID,
                                                "couponCode":couponCode}]
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(couponID,couponCode)
    console.log(data)
    return data
}
export default addItemToCart;
