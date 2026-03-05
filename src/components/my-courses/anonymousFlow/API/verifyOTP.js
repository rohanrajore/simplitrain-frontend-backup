const verifyOTP= async function(otp,otpID){ console.log(otpID)
    let url = process.env.REACT_APP_API_URL + `/my-bookings/verifyOTP`

    const bodyObject= {"otp":otp,
                       "otpID":otpID}
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
export default verifyOTP;
