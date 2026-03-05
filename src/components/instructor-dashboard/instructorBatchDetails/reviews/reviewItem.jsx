import React,{useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-regular-svg-icons";
import {faThumbsUp as solidThumbUp}  from "@fortawesome/free-solid-svg-icons";

const ReviewItem = props => {

  const [isShown,setIsShown] = useState(false)
  const [text,setText] = useState("")
  const handleText = e => setText(e.target.value)


  return(
  <div className="instructorBatch-reviewItem">
      <div>Ayushee Rajore</div>
      <div className="instructorBatch-reviewContent">
          <div>Hotel is located at Banglore and close to main road.
            So that you can easily find out. Staff is very helpful. Service was very good.
          </div>
          <div>Tue, 17th Sep 2019  |  18:00</div>
          {isShown && <textarea placeholder="Write comment here"
                                value={text} onChange={handleText}/>}
          <div>
              <div>
                <FontAwesomeIcon icon={faThumbsUp}/>
                <hr/>
                Contest
              </div>
              <div active={isShown?"true":"false"}
                   onClick={()=>setIsShown(true)}>Reply</div>
          </div>
      </div>
  </div>
)};

export default ReviewItem;
