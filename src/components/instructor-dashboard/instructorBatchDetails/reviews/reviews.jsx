import React,{useState} from 'react';
//import "./reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReviewItem from "./reviewItem.jsx";
import { ReviewStyleContainer } from '../reviews/reviews.style';

const InstructorReviews = props => {

  const [answer,setAnswer] = useState("")

  return(
  <ReviewStyleContainer>
  <div className="instructorBatch-details">
    <div className="tabTitle">
        <div className="instructorBatch-details-head">Reviews</div>
        <FontAwesomeIcon className="instructorBatch-details-close"
                         icon={faTimes}
                         onClick={()=>props.handleActiveTab(0)}/>
    </div>

    <div className="instructorBatch-reviewsContainer">
        <ReviewItem/>
        <ReviewItem/>
    </div>
  </div>
  </ReviewStyleContainer>
)};

export default InstructorReviews;
