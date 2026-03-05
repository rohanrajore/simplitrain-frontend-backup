const submitFeedback= async function(batchID,questions,loggedInUserID,anonymousUserID,bookingReferenceId){
    let url = process.env.REACT_APP_API_URL + `/feedback`

    const bodyObject= {
    "loggedInUserID": loggedInUserID,
    "anonymousUserID": anonymousUserID,
    "courseBatchID": batchID,
    "bookingReferenceId": bookingReferenceId,
    "courseBatchFeedbackList": [
        {
            "questionID": "02fb06a3-934e-4845-95ef-4faf6db4ce4a",
            "feedbackValue": questions[0].value
        },
        {
            "questionID": "461befa5-24ca-4d67-acac-da7b6a856bc6",
            "feedbackValue": questions[1].value
        },
        {
            "questionID": "d87b8d22-2161-4476-8d5b-688fa337c25a",
            "feedbackValue": questions[2].value
        },
        {
            "questionID": "6d06807f-73b1-4da7-88df-3c327f270730",
            "feedbackValue": questions[3].value
        },
        {
            "questionID": "cddeff20-75f4-4860-9c8e-7d73b813773a",
            "feedbackValue": questions[4].value
        },
        {
            "questionID": "a42967a0-1def-4769-969f-c6dd5b0ac05d",
            "feedbackValue": questions[5].value
        },
        {
            "questionID": "000601ad-6a54-4de3-8735-a7fb10bbe96f",
            "feedbackValue": questions[6].value
        },
        {
            "questionID": "e72e5305-d3ea-4c98-95ee-2e357daa68c1",
            "feedbackValue": questions[7].value
        },
        {
            "questionID": "6944baa7-e0f0-4415-8f13-6b1665b1c329",
            "feedbackValue": questions[8].value
        },
        {
            "questionID": "989a64f6-5269-4146-9776-027fd65e774d",
            "feedbackValue": questions[9].value
        },
        {
            "questionID": "5ad91541-54f4-4645-8c6e-27db5b68bf88",
            "feedbackValueText": questions[10].value
        },
        {
            "questionID": "0039fa72-dd7c-4dad-a0d1-ddcb8f74296e",
            "feedbackValueText": questions[11].value
        },
        {
            "questionID": "25732c29-9103-4f6a-bf08-ce48fd1427b7",
            "feedbackValueText": questions[12].value
        }
    ]
}

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
export default submitFeedback;
