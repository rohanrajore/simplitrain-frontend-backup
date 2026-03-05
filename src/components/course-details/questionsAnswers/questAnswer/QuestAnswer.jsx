import React,{useState} from 'react';
// import './questAnswer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as solidThumb}  from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import likeQuestion from "./likeQuestion.js";
import {useSelector} from "react-redux";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import {QuestAnswerStyle} from '../questionAns.style';

const QuestAnswer = props => {

  const [likeState, setLikeState] = useState(props.myThumbsUp)
  const [helpfulState, setHelpfulState] = useState(props.helpful)
  const [blockAPI, setBlockAPI] = useState(false)
  const userID= useSelector(state => state.user.currentUser?.id)

  const handleLikeQuestion = async () =>{
      setBlockAPI(true)
      let response = await likeQuestion(props.id, userID)
       if(response.actionResult!=="SUCCESS"){
         store.addNotification({
           title: response.actionResult==="SUCCESS"?`SUCCESS`: `ERROR`,
           message: response.message,
           type: response.actionResult==="SUCCESS"?"success":"danger",
           container: "top-right",
           animationIn: ["animated", "fadeIn"],
           animationOut: ["animated", "fadeOut"],
           dismiss: {
             duration: 4000
           },
         })
         setBlockAPI(false)
       }
       else{
         let temp= likeState?helpfulState-1:helpfulState+1
         setHelpfulState(temp)
         setLikeState(!likeState)

         setBlockAPI(false)
       }
     }

  return(
  <QuestAnswerStyle>
  <div className="questAnswer-container">
    <div className={!userID?"questAnswer-rating questAnswer-rating-disabled"
                               :"questAnswer-rating"}>
              <FontAwesomeIcon    style={{color:likeState?"#2D9CDB":"#041016"}}
                                  icon={likeState?solidThumb:faThumbsUp} size="2x"
                                  onClick={!userID?()=>{}
                                                  :blockAPI?()=>{}:handleLikeQuestion}/>
                                <div>({helpfulState})</div>
              <div>Helpful</div>
    </div>
      <div className="questAnswer-content">
            <div className="questAnswer-question">
                  <div className="questAnswer-title">Question:</div>
                  <div className="questAnswer-question-title">{props.question}</div>
            </div>
            <div className="questAnswer-question">
                  <div className="questAnswer-title">Answer:</div>
                  <div className="questAnswer-answer-cont">
                      <div className="questAnswer-answer">{props.answer}</div>
                      <div className="questAnswer-date">last modified on {moment(props.modified).format(`dddd, DD MMMM YYYY, h:mm a`)}</div>
                  </div>
            </div>
      </div>

    </div>
  </QuestAnswerStyle>
)};

export default QuestAnswer;
