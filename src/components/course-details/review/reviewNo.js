const reviewNo= async function(reviewID, userID){
    let url = process.env.REACT_APP_API_URL +
              `/course-reviews/${reviewID}/dislike?userID=${userID}`

      const response = await fetch(url,{
        method:"POST",
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/JSON'},
      })
        const data = await response.json()
        console.log(data)
        return data

}
export default reviewNo;
