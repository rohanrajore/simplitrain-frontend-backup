import React,{useState} from 'react';
// import './moreCourses.css';
import {Link} from 'react-router-dom';
import SpecificCourse from './specificCourse.jsx';
import Course from "../../homePage/course/course.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import { MoreContainer } from './moreCourse.style';

const MoreCourses = props => {

    const [firstCarouselPostion, setFirstCarouselPosition] = useState(0)

    const nextHandler= e =>{
      let parentWidth = document.getElementById("moreCourses-wrapper").offsetWidth
      let lastElementWidth = document.getElementById(props.info.moreCourses[props.info.moreCourses.length-1].id).offsetWidth
      let lastElementOffset = document.getElementById(props.info.moreCourses[props.info.moreCourses.length-1].id).offsetLeft
      let offsetRight = (lastElementWidth+lastElementOffset)-parentWidth
      let totalElementsWidth=0;
      let inc=0;
      let newPosition;

      do {
          totalElementsWidth = totalElementsWidth + lastElementWidth;
          inc=inc+1
        } while (totalElementsWidth < parentWidth && inc< props.info.moreCourses.length)

        if(lastElementOffset-parentWidth<0){
            if(totalElementsWidth< parentWidth){
              newPosition = firstCarouselPostion
            }
            else{
                                //Adding -10 for padding
              newPosition = firstCarouselPostion -(lastElementOffset-parentWidth+lastElementWidth)-10
            }
        }
        else{
          newPosition = firstCarouselPostion-300
        }

      setFirstCarouselPosition(newPosition)
    }

    const prevHandler= e =>{
      let newPosition = firstCarouselPostion+300
      if(newPosition>0){
        newPosition=0
      }
      setFirstCarouselPosition(newPosition)
    }

  return(

  <MoreContainer>
          <div className="more-courses-title">
            More courses by &nbsp; <Link className="info-link" to={`/instructor-profile/${props.info.courseInfo.createdBy.id}`}>{props.info.courseInfo.createdBy.name}</Link> </div>

          {/*This will be loaded for larger screens*/}
          <div className="courses-container courses-container-desktop" id="moreCourses-wrapper">

            {props.info.moreCourses.length>0 && <button className="prev-button" onClick={prevHandler}>
                                  <FontAwesomeIcon icon={faChevronLeft} />
                                 </button>}
                 {props.info.moreCourses.length<1? <div className="trending-noCourses" style={{marginLeft:0}}>This instructor doesn't have other courses.</div>
                                                 :props.info.moreCourses.map(course=>(
                                                  <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                                                  date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                                                  authorID={course.authorID} actualPrice={course.actualPrice} startDate={course.startDate} position={firstCarouselPostion}/>
                  ))}

            {props.info.moreCourses.length>0 && <button className="next-button" onClick={nextHandler}>
                                   <FontAwesomeIcon icon={faChevronRight} />
                                 </button>}
          </div>
              {/*This will be loaded for small screens*/}
          {/* <div className="courses-container courses-container-mobile">
                  {props.info.moreCourses.length<1? <div className="trending-noCourses" style={{marginLeft:0}}>This instructor doesn't have other courses.</div>
                                                  : props.info.moreCourses.map(course=>(
                                                <Course key={course.id} id={course.id} img={course.img} title={course.title} price={course.price}
                                                date={course.date} location={course.location} author={course.author} seatsLeft={course.seatsLeft}
                                                authorID={course.authorID} actualPrice={course.actualPrice} startDate={course.startDate} style={{margin:"20px 0 !important"}}/>
                  ))}
          </div> */}
  </MoreContainer>
);}

export default MoreCourses;
