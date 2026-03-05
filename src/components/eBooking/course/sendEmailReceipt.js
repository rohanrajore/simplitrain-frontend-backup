const sendEmailReceipt= async function(receiptID, courseBatchID){
    let url = process.env.REACT_APP_API_URL +
              `/course-batch-invoice/email?receiptID=${receiptID}&courseBatchID=${courseBatchID}`

      const response = await fetch(url,{
        method:"POST",
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/JSON'},
      })
        const data = await response.json()
        console.log(data)
        return data

}
export default sendEmailReceipt;
