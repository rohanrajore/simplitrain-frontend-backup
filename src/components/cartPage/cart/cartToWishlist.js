const cartToWishlist= async function(batchID,loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/cart/cart-to-wishlist`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "courseBatchID":batchID,
        "loggedInUserID":loggedInUserID,
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default cartToWishlist;
