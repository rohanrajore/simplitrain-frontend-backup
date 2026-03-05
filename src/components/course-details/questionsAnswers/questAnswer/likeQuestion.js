const likeQuestion= async function(qaID, userID){
    let url = process.env.REACT_APP_API_URL +
              `/question-answers/${qaID}/helpful?userID=${userID}`

      const response = await fetch(url,{
        method:"POST",
        body: JSON.stringify({}),
        headers: { 'Content-Type': 'application/JSON'},
      })
        const data = await response.json()
        return data

}
export default likeQuestion;
