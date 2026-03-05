const sendOTP= async function(email,countryCode,mobile,selectedMethod){
    let url = process.env.REACT_APP_API_URL + `/my-bookings/sendOTP`

    const bodyObject= selectedMethod==="email"? {"emailID":email}
                                              : {"countryCode":countryCode,
                                                 "mobile":mobile}
    console.log(bodyObject)
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify(
        bodyObject
      ),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default sendOTP;
