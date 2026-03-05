const fetchPurchaseHistory= async function(userID){
    let url = process.env.REACT_APP_API_URL +
              `/my-purchase-history?userID=${userID}`

    const response = await fetch(url,{
      method:"GET",
      headers: { 'Content-Type': 'application/json'},
    })
      const data = await response.json()
      console.log(data)
      return data
}
export default fetchPurchaseHistory;
