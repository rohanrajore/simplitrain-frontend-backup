import React,{useState} from 'react';
// import './questionsAnswers.css';
import QuestAnswer from './questAnswer/QuestAnswer.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import submitQuestion from "./submitQuestion.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { InstructorContainer } from './questionAns.style';

const QuestionsAnswers = props => {

      const answeredQuestions = props.questionsAnswers.filter(quest => quest.answer!==null)
      const [quesAnsArray, setQuesAnsArray] = useState(answeredQuestions.slice(0,3))
      const [showMore,setShowMore] = useState(false)
      const [questionText,setQuestionText] = useState("")
      const [validationErr, setValidationErr] = useState(false)

      const handleMoreQuesAns = () =>{
         setQuesAnsArray(answeredQuestions)
         setShowMore(!showMore)
      }

      const askQuestion = async () =>{

            if(questionText.length>19){
              let response = await submitQuestion(props.courseID,props.currentUser.id,questionText)
              setQuestionText("")
              let msg= response.message==="Success"? `Your question has been submited. It will be displayed when instructor replies on it.`
                                                  : `Something went wrong, please try again later.`

              let title= response.message==="Success"? "SUCCESS" : "ERROR"
              let type = title.toLowerCase()

              store.addNotification({
                title: title,
                message: msg,
                type: type,
                container: "top-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                  duration: 4000
                },
              })
            }
            else{
              setValidationErr(true)
              setTimeout(()=>{
                setValidationErr(false)
              },4000)
            }

      }

  return(
  <InstructorContainer>{/*Submit questions will be shown only for loged in users*/}

        {props.currentUser!==null &&
          <>
            <h4 className="instructor-title">Got a Question?</h4>
            <div className="qa-ask-container">
                <div className="qa-ask-search">
                    <input type="text"
                          placeholder="Type in your question / queries about the course"
                          value={questionText}
                          onChange={e =>setQuestionText(e.target.value)}/>
                        {/**                    <input type="text"
                           placeholder="E mail"
                           value={""}/>**/}
                </div>
                <div className="qa-ask-submitContainer">
                  <div>
                    <p>Your question will be published in Simplitrain.in once it has been approved and answered. </p>
                    <a href="#">Click here to read about Post Guidelines</a>
                  </div>
                  <div>
                    {validationErr===true && <div className="qa-validation-err">* Question length must be at least 20 character</div>}
                    <button className="qa-ask-submit" onClick={askQuestion}>Submit</button>
                  </div>
                  
                </div>

            </div>
          </>
        }

        <h4 className="qa-title">Questions & Answers </h4>
        {quesAnsArray.length<1? <div className="trending-noCourses" style={{marginLeft:0}}>There are no asked questions</div>
          :quesAnsArray.map(quesAns=>(
            <QuestAnswer helpful={quesAns.helpful} myThumbsUp={quesAns.myThumbsUp}
                         question={quesAns.question} answer={quesAns.answer}
                         key={quesAns.id} modified={quesAns.modified} id={quesAns.id}/>
        ))}

      {!showMore && answeredQuestions.length>3 &&  <div className="qa-seeMore" onClick={handleMoreQuesAns}>
          See more answered questions ({answeredQuestions.length-3})
                     </div>
      }
  </InstructorContainer>
);}

export default QuestionsAnswers;
