const saveBillingDetails= async function(cartID,loggedInUserID,anonymousUserID,firstName,
                                        lastName,companyName,email,phoneCountryCode,phoneNumber){
    let url = process.env.REACT_APP_API_URL + `/cart/billing-details`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "cartID":cartID,
        "anonymousUserID":anonymousUserID,
        "loggedInUserID":loggedInUserID,
        "title":"",
        "firstName":firstName,
        "lastName":lastName,
        "companyName":companyName,
        "email":email,
        "phoneCountryCode":phoneCountryCode,
        "phoneNumber":phoneNumber
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default saveBillingDetails;
