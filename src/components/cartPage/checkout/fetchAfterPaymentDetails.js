const fetchAfterPaymentDetails= async function(receiptID,loggedInUserID,anonymousUserID){
  let url ="";
  if(loggedInUserID) 
    url = process.env.REACT_APP_API_URL +`/transaction/${receiptID}?loggedInUserID=${loggedInUserID}`
  else if(anonymousUserID)
    url = process.env.REACT_APP_API_URL +`/transaction/${receiptID}?anonymousUserID=${anonymousUserID}`
  else 
    console.log("Error no userID set");
    const response = await fetch(url,{
      method:"GET",
      headers: { 'Content-Type': 'application/json'},
    })
      const data = await response.json()
      console.log(data)
      return data
}
export default fetchAfterPaymentDetails;
