import React,{useState,useEffect} from 'react';
import EbookingItem from "../eBooking/eBookingItem.jsx";
// import "./myCourses.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useSelector, useDispatch } from "react-redux";
import {selectIsSignedIn} from "../../redux/user/user.selectors";
import fetchBatchesLoggedIn from "./loggedInFlow.js"
import { setRetrievedCourses} from "../../redux/myCourses/myCourses-actions.js"
import LoaderGif from '../../styles/images/loading_spinner.gif';
import { MyCoursesContainer, PageTitleRow } from './myCourses.styles.jsx';
import { Col, Container, Row } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const MyCourses = props => {

  const [timelineSelected, setTimelineSelected] = useState(2)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [tempSearch, setTempSearch] = useState("")


  const courses = useSelector(state => state.myCourses.courses)
  const isSignedIn= useSelector(selectIsSignedIn)
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const filteredCourses = ((timelineSelected===2 && search==="")?courses.filter(course=>course.courseProgress==="UPCOMING").sort((a, b) => moment(a.bookingDateTime).diff(moment(b.bookingDateTime))):
    (timelineSelected===2 && search!=="")?courses.filter(course=>(course.courseProgress==="UPCOMING" && course.title.includes(search))).sort((a, b) => moment(a.bookingDateTime).diff(moment(b.bookingDateTime))):
    (timelineSelected===1 && search==="")?courses.filter(course=>course.courseProgress!=="UPCOMING").sort((a, b) => moment(b.bookingDateTime).diff(moment(a.bookingDateTime))):
    courses.filter(course=>(course.courseProgress!=="UPCOMING" && course.title.includes(search))).sort((a, b) => moment(b.bookingDateTime).diff(moment(a.bookingDateTime))))

  const emptyMsg = (timelineSelected===2 && search==="")?"There are no Upcoming Courses":
                   (timelineSelected===2 && search!=="")?"There are no Upcoming Courses that matches search text":
                   (timelineSelected===1 && search==="")?"There are no Past Courses":
                   "There are no Past Courses that matches search text"

  useEffect(()=>{
      const fetch = async() =>{
        let response = await fetchBatchesLoggedIn(user.id)
        if(response.actionResult==="SUCCESS"){
          let obj = {"courses":response.courseCardWrapper.courseCardList,
                     "anonymous":""}
          dispatch(setRetrievedCourses(obj))
          setLoading(false)
        }
      }
      if(isSignedIn){
          fetch()
      }
      else{
        setLoading(false)
      }
  },[1])

  return(
    <MyCoursesContainer>
      <PageTitleRow>
        <div className="pageTitle page-section">
          <Container>
              <h4>My Courses</h4>
          </Container>
        </div>
      </PageTitleRow>

      <div className="page-section">
      <Container>
    {/* <div className="myCourses-title">My Courses</div> */}

    <div className="myCourses-filters">
        <div className="search-bookings">
          <input type="text"
                 placeholder="Search Bookings"
                 value={tempSearch}
                 onChange={(e)=>setTempSearch(e.target.value)}/>

          <button className="myCourses-searchIcon" onClick={()=>setSearch(tempSearch)} >
            <FontAwesomeIcon icon={faSearch}/>
          </button>
        </div>

        <div className="myCourses-timeline">
            <div onClick={()=>setTimelineSelected(1)} className={timelineSelected === 1 ? 'active' : null} >Past</div>

            <div onClick={()=>setTimelineSelected(2)}
              className={timelineSelected === 2 ? 'active' : null}>Upcoming</div>
        </div>
    </div>

    { filteredCourses.map((course,index)=>(
      <EbookingItem key={index}
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
                    myCourses={true}
                    feedbackProvided={course.feedbackProvided}
                    courseProgress={course.courseProgress}
                    bookingReferenceId={course.bookingReferenceId}
                    bookingDateTime={course.bookingDateTime}
                    onlineMeetingDetails={course.onlineMeetingDetails}
                    />
    ))}

    {courses.length<1 && loading===false && <div className="myCourses-emptyMsg">You haven't bought any courses!</div>}

    {courses.length>0 && filteredCourses.length<1 && loading===false && <div className="myCourses-emptyMsg">{emptyMsg}</div>}

    {loading===true && <div style={{textAlign:'center'}} ><img  src={LoaderGif} alt='' style={{width:'100px'}} /></div>}
    </Container>
    </div>
  </MyCoursesContainer>
)};

export default MyCourses;
