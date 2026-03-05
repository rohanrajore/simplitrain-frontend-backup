
const submitQuestion= async (batchID,askedByUserID,question) =>{
  let url = process.env.REACT_APP_API_URL + "/question-answers/question"
    const response = await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({"courseBatchID":`${batchID}`,
                            "askedByUserID":`${askedByUserID}`,
                            "question":`${question}`})
      });
    const result= await response.json();
    return result
}
export default submitQuestion;
