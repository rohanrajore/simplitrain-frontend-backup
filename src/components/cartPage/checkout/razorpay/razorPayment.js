const razorPayment= async function(paymentId,orderId,signature){
    let url = process.env.REACT_APP_API_URL + `/transaction`
    const response = await fetch(url,{
      method:"POST",
      body: JSON.stringify({
        "paymentId":paymentId,
        "orderId":orderId,
        "signature":signature
      }),
      headers: { 'Content-Type': 'application/json'},
    })
    const data = await response.json()
    console.log(data)
    return data
}
export default razorPayment;
