import React,{useState} from 'react';
import questions from "./questions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import submitFeedback from "./submitFeedback.js";
import {useSelector, useDispatch } from "react-redux";
import {selectIsSignedIn} from "../../../redux/user/user.selectors";
import {setCoursesAfterFeedback} from "../../../redux/myCourses/myCourses-actions.js"

const Feedback = props => {


  const isSignedIn= useSelector(selectIsSignedIn)
  const currentUser= useSelector(state =>state.user.currentUser)
  const anonymousUserID = useSelector(state =>state.myCourses.anonymousUserID)
  const dispatch = useDispatch()

  const [questionsDetails,setQuestionsDetails] = useState([  {  "id": "02fb06a3-934e-4845-95ef-4faf6db4ce4a",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "461befa5-24ca-4d67-acac-da7b6a856bc6",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "d87b8d22-2161-4476-8d5b-688fa337c25a",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "6d06807f-73b1-4da7-88df-3c327f270730",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "cddeff20-75f4-4860-9c8e-7d73b813773a",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "a42967a0-1def-4769-969f-c6dd5b0ac05d",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "000601ad-6a54-4de3-8735-a7fb10bbe96f",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "e72e5305-d3ea-4c98-95ee-2e357daa68c1",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "6944baa7-e0f0-4415-8f13-6b1665b1c329",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "989a64f6-5269-4146-9776-027fd65e774d",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "5ad91541-54f4-4645-8c6e-27db5b68bf88",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "0039fa72-dd7c-4dad-a0d1-ddcb8f74296e",
                                                                "value": ""
                                                              },
                                                              {
                                                                "id": "25732c29-9103-4f6a-bf08-ce48fd1427b7",
                                                                "value": ""
                                                              }
                                                            ])

    const err = questionsDetails.filter(ques => ques.value==="").length>0? true: false


    const handleQuestion= (id,e) =>{
      let newDetails = [...questionsDetails]
      let index = newDetails.findIndex(ques=> ques.id===id)
      newDetails[index].value= e.target.value
      setQuestionsDetails(newDetails)
    }


    const handleSubmit= async () =>{
      const response = await submitFeedback(props.batchID,questionsDetails,
                                            isSignedIn?currentUser.id:"",
                                            anonymousUserID===""?"":anonymousUserID,
                                            props.bookingReferenceId)
      if(response.actionResult==="SUCCESS"){
        dispatch(setCoursesAfterFeedback(response.courseCardWrapper.courseCardList))
      }
      console.log(questionsDetails)
    }

  return(
  <div className="eBooking-textContainer">
    <div className="eBooking-textContainer-title">
            <div className="eBooking-textClose"
                 onClick={()=>props.handleShowDetails(0)}><FontAwesomeIcon icon={faTimes} /></div>
    </div>
    {props.feedbackProvided===true && <div className="feedback-provided" style={{color:'green'}}>Feedback is successfully provided for this course. </div>}

    {!props.feedbackProvided && props.courseProgress!=="FINISHED" && props.courseProgress!=="ONGOING"
      && <div className="feedback-provided">Feedback can only be provided after course starts. </div>}
      {!props.feedbackProvided && (props.courseProgress==="FINISHED" || props.courseProgress==="ONGOING")
       && <div className="myCourses-feedback-container">
                <div>On the scale below, please rate your level of agreement
                     with each of the following statements.</div>

                <div className="myCourses-feedback-row feeback-title-row">
                    <div></div>
                    <div className="myCourses-radioBtn"><b>Poor </b></div>
                    <div className="myCourses-radioBtn"><b>Average </b></div>
                    <div className="myCourses-radioBtn"><b>Good </b></div>
                    <div className="myCourses-radioBtn"><b>Excellent </b></div>
                    <div className="myCourses-radioBtn"><b>Outstanding </b></div>
                </div>

                {questions.map(quest=>(
                  <div className="myCourses-feedback-row" key={quest.id}>
                      <div><span style={{color:"red"}}><b>*</b> </span> {quest.question}</div>
                      <div  className="myCourses-radioBtn"><input type="radio" name={quest.question} value="POOR" onChange={e=>handleQuestion(quest.id,e)}/></div>
                      <div  className="myCourses-radioBtn"><input type="radio" name={quest.question} value="AVERAGE" onChange={e=>handleQuestion(quest.id,e)}/></div>
                      <div  className="myCourses-radioBtn"><input type="radio" name={quest.question} value="GOOD" onChange={e=>handleQuestion(quest.id,e)}/></div>
                      <div  className="myCourses-radioBtn"><input type="radio" name={quest.question} value="EXCELLENT" onChange={e=>handleQuestion(quest.id,e)}/></div>
                      <div  className="myCourses-radioBtn"><input type="radio" name={quest.question} value="OUTSTANDING" onChange={e=>handleQuestion(quest.id,e)}/></div>
                  </div>
                ))}

                <div className="myCourses-feedback-textAreas">
                  <div>
                    <div className="feedback-textArea-title" ><span style={{color:"red"}}><b>*</b> </span> Comments for the Course</div>
                    <textarea placeholder="Start typing here"
                              value={questionsDetails[10].value}
                              onChange={e=>handleQuestion("5ad91541-54f4-4645-8c6e-27db5b68bf88",e)}
                              rows="10"/>
                  </div>

                  <div>
                    <div className="feedback-textArea-title" ><span style={{color:"red"}}><b>*</b> </span> Comments for the Instructor</div>
                    <textarea placeholder="Start typing here"
                              value={questionsDetails[11].value}
                              onChange={e=>handleQuestion("0039fa72-dd7c-4dad-a0d1-ddcb8f74296e",e)}
                              rows="10"/>
                  </div>

                  <div>
                    <div className="feedback-textArea-title" ><span style={{color:"red"}}><b>*</b> </span> Comments for the Simplitrain</div>
                    <textarea placeholder="Start typing here"
                              value={questionsDetails[12].value}
                              onChange={e=>handleQuestion("25732c29-9103-4f6a-bf08-ce48fd1427b7",e)}
                              rows="10"/>
                  </div>

                </div>

                {err && <div className="feedback-submitBtn-err">
                   <div className="feedback-errForm">* Please fill all fields</div>
                </div>}

                {!err && <div className="feedback-submitBtn">
                     <button Click={handleSubmit}>
                     Submit</button>
                </div>}

            </div>}
  </div>
)};

export default Feedback;
