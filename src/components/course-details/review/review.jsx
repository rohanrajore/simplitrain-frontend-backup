import React,{useState} from 'react';
// import './review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faThumbsDown} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as solidThumbUp,faThumbsDown as solidThumbDown}  from "@fortawesome/free-solid-svg-icons";
import ReportPopup from "../report-popup/reportPopup";
import moment from 'moment';
import {useSelector} from "react-redux";
import { ReviewContainer } from './review.style';
import reviewYes from "./reviewYes.js";
import reviewNo from "./reviewNo.js";
import { store } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css';
import userdemo from "../../../assets/userdemo.svg";

const Review = props => {

  const rating=props.info.rating
  const [showReport, setShowReport] = useState(false)
  const [reviewState, setReviewState] = useState(props.info)



  const handleShowReport = (value) => setShowReport(value)
  const reviewTotal = props.info.likes - props.info.dislikes

  const userID= useSelector(state => state.user.currentUser?.id)

  const handleYesReview = async () =>{
      const response = await reviewYes(reviewState.id,userID)

      if(response.actionResult==="SUCCESS"){
        let newState = {...reviewState}
        let newLikedByMe = reviewState.likedByMe
        let dislikedByMe = reviewState.dislikedByMe
        newState["likedByMe"]=!newLikedByMe
        newState["dislikedByMe"]=false
        setReviewState(newState)
      }
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
      }
  }
  const handleNoReview = async () =>{
      const response = await reviewNo(reviewState.id,userID)
      if(response.actionResult==="SUCCESS"){
        let newState = {...reviewState}
        let newLikedByMe = reviewState.likedByMe
        let dislikedByMe = reviewState.dislikedByMe
        newState["likedByMe"]=false
        newState["dislikedByMe"]=!dislikedByMe
        setReviewState(newState)
      }
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
      }
  }

  return(
  <ReviewContainer>
        <div className="review-img"> <img src={!reviewState.userImg?userdemo:reviewState.userImg} alt="user"/> </div>

        <div className="review-content">
              <div className="review-name-time">
                <h4>{reviewState.userName}</h4>
              </div>
              <div className="star-ratings">
                <FontAwesomeIcon icon={rating<0.5? ['far', 'star']: rating>=0.5&& rating<1?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
                <FontAwesomeIcon icon={rating<1.5? ['far', 'star']: rating>=1.5&& rating<2?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
                <FontAwesomeIcon icon={rating<2.5? ['far', 'star']: rating>=2.5&& rating<3?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
                <FontAwesomeIcon icon={rating<3.5? ['far', 'star']: rating>=3.5&& rating<4?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
                <FontAwesomeIcon icon={rating<4.5? ['far', 'star']: rating>=4.5&& rating<5?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
                {moment(reviewState.time).startOf('minute').fromNow()}
              </div>
              <div className="review-description">{reviewState.description}</div>
              {userID && <div className="review-report">
                            <div>Was the review helpful?</div>
                            <div className="review-thumbs">
                              <button className={`likethumb ${reviewState.likedByMe?'active':null}`}
                                      onClick={handleYesReview} >Yes</button>
                                    <button className={`dislikethumb ${reviewState.dislikedByMe?'active':null}`}
                                      onClick={handleNoReview}>No</button>
                              {/* <FontAwesomeIcon className="review-thumb-icon" icon={props.info.likedByMe?solidThumbUp:faThumbsUp} size="2x"/>
                              <div className="review-total"
                                   style={{color:reviewTotal>0?"green":reviewTotal<0?"red":"grey"}}>{reviewTotal}</div>
                                 <FontAwesomeIcon className="review-thumb-icon" icon={props.info.dislikedByMe?solidThumbDown:faThumbsDown} size="2x"/> */}
                              <div className="review-report-btn" onClick={()=>handleShowReport(!showReport)}>Report</div>
                            </div>

                          </div>
               }
        </div>
        {showReport && <ReportPopup handleShowReport={handleShowReport} reviewID={reviewState.id}/>}
  </ReviewContainer>
);}

export default Review;
