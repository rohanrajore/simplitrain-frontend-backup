import React,{useState} from 'react';
// import './eBooking.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import EbookingCourse from "./course/course.jsx";
import EbookingNavbar from "./navbar/navbar.jsx";
import EbookingSchedule from "./schedule/schedule.jsx";
import Feedback from "./feedback/feedback.jsx";
import { EBookingContainer } from './ebooking.style';

const EbookingItem = props => {

  const [showDetails, setShowDetails] = useState(0)
  const handleShowDetails = (num) =>{
    if(num === showDetails){
      setShowDetails(0);
    }else{
      setShowDetails(num);
    }

  }

  return(
  <EBookingContainer id={props.id}>
        <EbookingCourse
          img={props.img}
          id={props.id}
          title={props.title}
          author={props.author}
          date={props.date}
          price={props.price}
          bookingReferenceId={props.bookingReferenceId}
          bookingDateTime={props.bookingDateTime}
          myCourses={props.myCourses}
          courseProgress={props.courseProgress}/>

        <EbookingNavbar handleShowDetails={handleShowDetails}
                        showDetails={showDetails}
                        myCourses={props.myCourses}/>

        {showDetails ===1 && <EbookingSchedule calendar={props.calendar}
                                               venueImg={props.venueImg}
                                               venueAddress={props.address}
                                               className={'custom-tab active'}
                                               venueLandmark={props.landmark}
                                               venueLatitude={props.venueLatitude}
                                               venueLongitude={props.venueLongitude}
                                               handleShowDetails={handleShowDetails}
                                               onlineMeetingDetails={props.onlineMeetingDetails}/>}




        {showDetails ===2 && <div className="eBooking-textContainer custom-tab active">
              <div className="eBooking-textContainer-title">
                Learner Details
                <div className="eBooking-textClose"
                     onClick={()=>handleShowDetails(0)}><FontAwesomeIcon icon={faTimes} /></div>
              </div>

              <div className="eBooking-textContainer-details">
                    <div className="eBooking-textContainer-element">
                      <div>Full Name:</div>
                      <span><b>{props.fullName}</b></span>
                    </div>

                    <div className="eBooking-textContainer-element">
                      <div>Email:</div>
                      <span><b>{props.email}</b></span>
                    </div>
                    <div className="eBooking-textContainer-element">
                      <div>Phone:</div>
                      <span><b>{props.phone}</b></span>
                    </div>
                    <div className="eBooking-textContainer-element">
                      <div>Company:</div>
                      <span><b>{props.company}</b></span>
                    </div>
                    {/* Client asked me to remove this */}
                    {/* <div className="eBooking-textContainer-element">
                      <div>Address:</div>
                      <span><b>{props.learnerAddress}</b></span>
                    </div> */}
              </div>
        </div>}

        {showDetails ===3 && <div className="eBooking-textContainer custom-tab active">
              <div className="eBooking-textContainer-title">
                  <div className="eBooking-textClose"
                       onClick={()=>handleShowDetails(0)}><FontAwesomeIcon icon={faTimes} /></div>
              </div>

              { props.requirements ?
              <div className="eBooking-textContainer-element marginRight0">
                {props.requirements.map(item=>(<li>{item}</li>))}</div>:
                <div className="eBooking-textContainer-element marginRight0">No pre-requisites</div>
              }

        </div>}

        {showDetails ===4 && <div className="eBooking-textContainer custom-tab active">
              <div className="eBooking-textContainer-title">
                    Terms & Conditions
                    <div className="eBooking-textClose"
                         onClick={()=>handleShowDetails(0)}><FontAwesomeIcon icon={faTimes} /></div>
              </div>
              <div className="eBooking-textContainer-element marginRight0">{props.termsAndConditions}</div>
        </div>}

        {showDetails ===5 && <div className="eBooking-textContainer custom-tab active">
              <div className="eBooking-textContainer-title">
                      Cancellation Policy
                      <div className="eBooking-textClose"
                           onClick={()=>handleShowDetails(0)}><FontAwesomeIcon icon={faTimes} /></div>
              </div>
              <div className="eBooking-textContainer-element marginRight0">{props.cancellationPolicy}</div>
        </div>}

        {props.myCourses && showDetails===6 && <Feedback handleShowDetails={handleShowDetails}
                                                         batchID={props.id}
                                                         className={'custom-tab active'}
                                                         feedbackProvided={props.feedbackProvided}
                                                         bookingReferenceId={props.bookingReferenceId}
                                                         courseProgress={props.courseProgress}/>}
  </EBookingContainer>
);}

export default EbookingItem;
