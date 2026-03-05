import React,{useState,useEffect} from 'react';
// import './eBooking.css';
import fetchAfterPaymentDetails from "../cartPage/checkout/fetchAfterPaymentDetails";
import EbookingItem from "./eBookingItem.jsx";
import {useSelector} from "react-redux";
import { Col, Container, Row } from 'react-bootstrap';
import { EBookingPage, PageTitleRow } from './ebooking.style';

const EBooking = (props) => {

  const user = useSelector(state => state.user.currentUser)
  const [courseArray,setCourseArray] = useState([])
  const [err,setErr] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({"bookingReferenceId":"",
                                                       "bookingDateTime":""})

  useEffect(()=>{
    async function fetch(){
      let afterPaymentDetails= await fetchAfterPaymentDetails(props.match.params.receiptID,
                                                              user===null?"":user.id,
                                                              localStorage.getItem("anonymousUserID"))
      console.log(afterPaymentDetails)
      if(afterPaymentDetails.actionResult==="SUCCESS"){
        setCourseArray(afterPaymentDetails.courseCardList)
        setBookingDetails({"bookingReferenceId":afterPaymentDetails.bookingReferenceId,
                           "bookingDateTime":afterPaymentDetails.bookingDateTime})
      }
      else{
        setErr(true)
      }
    }
    fetch()
  },[1])

  return (
    <EBookingPage>
      <PageTitleRow>
        <div className="pageTitle page-section">
          <Container>
              <h4>My Courses</h4>
          </Container>
        </div>
      </PageTitleRow>
      <div className="page-section">
        <Container>
        {
          err?
            <div className="trending-noCourses">
              No transaction found with the given receiptID in the system
            </div>
          :<div className="eBooking-message">
            <span>Congratulations!</span>
            Your {courseArray.length>1?"seats have":"seat has"} been booked for the training!
          </div>
        }
        </Container>
      </div>
      <div className="page-section">
        {
          err? null
          :
            (<React.Fragment>
                {courseArray.map(course=>(
                    <EbookingItem key={course.id}
                                  id={course.id}
                                  calendar={course.calendar}
                                  img={course.img}
                                  title={course.title}
                                  author={course.author}
                                  date={course.date}
                                  price={course.price}
                                  fullName={course.fullName}
                                  email={course.email}
                                  phone={course.phone}
                                  company={course.company}
                                  address={course.address}
                                  requirements={course.requirements}
                                  termsAndConditions={course.termsAndConditions}
                                  cancellationPolicy={course.cancellationPolicy}
                                  venueID={course.venueID}
                                  venueImg={course.venueImg}
                                  venueLatitude={course.venueLatitude}
                                  venueLongitude={course.venueLongitude}
                                  venueAddress={course.address}
                                  venueLandmark={course.landmark}
                                  bookingReferenceId={bookingDetails.bookingReferenceId}
                                  bookingDateTime={bookingDetails.bookingDateTime}
                                  onlineMeetingDetails={course.onlineMeetingDetails}
                                  />
                ))}
              </React.Fragment>)
            }
          </div>
        </EBookingPage>
    );
 }

export default EBooking;
