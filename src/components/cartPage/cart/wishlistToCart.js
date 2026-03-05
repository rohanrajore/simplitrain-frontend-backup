const wishlistToCart= async function(batchID,loggedInUserID){
    let url = process.env.REACT_APP_API_URL + `/cart/wishlist-to-cart`
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
export default wishlistToCart;
