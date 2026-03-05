const submitReport= async function(reviewID, userID, issueType, issueDetails){
    let url = process.env.REACT_APP_API_URL +
              `/course-reviews/${reviewID}/report?userID=${userID}`

      const response = await fetch(url,{
        method:"POST",
        body: JSON.stringify({
                              "issueType": issueType,
                              "issueDetails": issueDetails
                            }),
        headers: { 'Content-Type': 'application/JSON'},
      })
        const data = await response.json()
        console.log(data)
        return data

}
export default submitReport;
