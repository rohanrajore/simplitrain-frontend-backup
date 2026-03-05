import React, { useRef, useState, useLayoutEffect } from "react";
import { connect } from "react-redux";
import { Redirect, Prompt } from "react-router-dom";
import Wizard from "../create-course/Wizard";
import ScheduleCourse from "./schedule-course.component";
import ScheduleVenue from "./schedule-venue.component";
import CoursePricing from "./course-pricing.component";
import "./course-scheduler-wizard.scss";
import FullPageLoader from "../../common/fullpage-loader/FullPageLoader";
import Axios from "axios";
import createScheduledBatch from "./API/createScheduledBatch";
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { store } from "react-notifications-component";
import {HeaderContainer} from "../course-scheduler/header.style";
import { Col, Container, Row } from 'react-bootstrap';
import 'react-notifications-component/dist/theme.css';
var assign = require("object-assign");


function ScheduleCourseContainer({ currentUser, ...props }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  var [fieldValues, setFieldValues] =useState({
    startDate: localStorage.getItem("startDate")!==null? new Date(localStorage.getItem("startDate")): null,
    endDate: localStorage.getItem("endDate")!==null? new Date(localStorage.getItem("endDate")): null,
    startTime: null,
    durHours: null,
    durMins: null,
    includeWeekend: localStorage.getItem("includeWeekend")!==null? JSON.parse(localStorage.getItem("includeWeekend")): null,
    everydaySch: [],
    venueType: "ONLINE",
    selectedOnline: "ZOOM",
    customOnlineMeetingDetails: null,
    onsiteDetails: null,
    currency: null,
    actualPrice: null,
    discountedPrice: null,
    couponList: [],
    timeObj: null,
  })

  useLayoutEffect(()=>{ // This useLayoutEffect will prepopulate fields if we are using edit scheduled batch

    if(props.editScheduledCourseDetails!=undefined){
        localStorage.setItem("currentCourseBatchID",props.editScheduledCourseDetails.courseBatchID)
        localStorage.setItem("currentCourseId",props.editScheduledCourseDetails.courseID)

                  const modifiedEverydaySch = props.editScheduledCourseDetails.everydaySch.map( sch => {
                    console.log(sch.startTime)
                    const startT =  parseInt(convertTimeBack(sch.startTime));
                    const endT =  parseInt(convertTimeBack(sch.endTime));
                   return { ...sch, schedule:moment(sch.schedule).format(`dddd, DD MMMM YYYY`), startTime: startT, endTime: endT };
                  })
                  localStorage.setItem("everydaySch",JSON.stringify(modifiedEverydaySch))

                  setFieldValues({...fieldValues,
                                    startDate:props.editScheduledCourseDetails.startDate,
                                    endDate:props.editScheduledCourseDetails.endDate,
                                    includeWeekend: props.editScheduledCourseDetails.includeWeekend,
                                    everydaySch: modifiedEverydaySch,
                                    venueType: props.editScheduledCourseDetails.venueType,
                                    selectedOnline: props.editScheduledCourseDetails.venueType==="ONLINE"?
                                                          props.editScheduledCourseDetails.selectedOnline: null,
                                    customOnlineMeetingDetails: props.editScheduledCourseDetails.selectedOnline==="CUSTOM"?
                                    props.editScheduledCourseDetails.customOnlineText: null,
                                    actualPrice: props.editScheduledCourseDetails.actualPrice,
                                    discountedPrice: props.editScheduledCourseDetails.discountedPrice
                                                                              })
                if(props.editScheduledCourseDetails.selectedOnline==="ZOOM"){
                        localStorage.setItem("zoomAuth","SUCCESS")
                }
        }
    },[props.editScheduledCourseDetails])

  const handleCustomMeetingDetails = e => setFieldValues({...fieldValues,customOnlineMeetingDetails:e.target.value})
  const handleActualPrice = e => setFieldValues({...fieldValues,actualPrice:e.target.value})
  const handleDiscountedPrice = e => setFieldValues({...fieldValues,discountedPrice:e.target.value})

  const manualyHandleFieldValue =(name,value) =>{
    let copy = fieldValues
    copy[name]= value
    setFieldValues(copy)
  }

  const history = useHistory();
  const nextStep = 0;
  // handle Data Submit
  const handleSubmit = async () => {
    let url = process.env.REACT_APP_API_URL + "/courses/schedule?action=SUBMIT";

    // Here we will delete fields that are not needed for API just before API call.
    //  If user is selected ZOOM then we dont need ONSITE DETAILS AND CUSTOM MEETING DETAILS. And vice versa

     if(fieldValues.venueType==="ONSITE"){
         manualyHandleFieldValue("selectedOnline",null)
         manualyHandleFieldValue("customOnlineMeetingDetails",null)
     }
     else if(fieldValues.venueType==="ONLINE"){
       manualyHandleFieldValue("onsiteDetails",null)
             if(fieldValues.selectedOnline==="ZOOM"){
                   manualyHandleFieldValue("customOnlineMeetingDetails",null)
             }
     }

    const data = {
      ...fieldValues,
      userID: currentUser.id,
      courseID:
        localStorage.getItem("currentCourseId") === null
          ? ""
          : localStorage.getItem("currentCourseId"),
      zoomMeetingURL:
        localStorage.getItem("zoomMeetingURL") === null
          ? ""
          : localStorage.getItem("zoomMeetingURL"),
    };



    data.everydaySch = convertTimeto24(
      fieldValues.everydaySch,
      fieldValues.timeObj
    );

    data.startTime = "" + convertTime12to24(data.startTime.name);
    data.courseBatchID = localStorage.getItem("currentCourseBatchID");

    let scheduleDate = data.everydaySch
    let newEverydaySch=[]
    for(let i=0; i<scheduleDate.length; i++){
      let tmp= scheduleDate[i]; console.log(scheduleDate[i])
      let changedDateFormat=new Date(scheduleDate[i].schedule + ',' +scheduleDate[i].startTime).toISOString()
      tmp.schedule= changedDateFormat
      newEverydaySch.push(tmp)
    }
    data.everydaySch= newEverydaySch;

    delete data.durHours
    delete data.durMins
    delete data.timeObj

    setLoading(true); console.log(data);
    let responseAPI = await createScheduledBatch(data)
      setLoading(false);
      if (responseAPI.actionResult === "SUCCESS") {

        let coursePurpose;
        window.location.pathname.includes("edit") === true
          ? (coursePurpose = "edited")
          : (coursePurpose = "created");
      store.addNotification({
        title: `SUCCESS`,
        message: `Your batch has been ${coursePurpose} successfully.`,
        type: "success",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
          duration: 4000
        },
      })

        history.push("/instructor-dashboard/scheduled");
        localStorage.removeItem("zoomMeetingURL")
        localStorage.removeItem("everydaySch")
        localStorage.removeItem("currentCourseId")
        localStorage.removeItem("currentCourseBatchID")
        localStorage.removeItem("isEdit")
        localStorage.removeItem("zoomAuth")
        localStorage.removeItem("startDate")
        localStorage.removeItem("endDate")
        localStorage.removeItem("includeWeekend")
      }
  };

  const convertTimeBack = (value) => {
            let time24=[]
            Object.values(fieldValues.timeObj).map(val=>{
                  time24.push(convertTime12to24(val))
              })
            return time24.indexOf(value)
            }

  const saveAndExiTScheduleCourse = () => {
    // This will allows us to leave page and redirects us to the dashboard
    setLoading(true)
    window.onbeforeunload = null
    store.addNotification({
      title: `SUCCESS`,
      message: `Your batch details has been saved successfully`,
      type: "success",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000
      },
    })              // Here we added timeout to 100ms, so setValuesSaved can be set to true, and our navigation block dont load
                    // When we add API call to this function, we will remove timeout as it wont be needed anymore
    setTimeout(function(){history.push("/instructor-dashboard/scheduled")},100)
  };
  const saveValues = (field_value) => {
    return function () {
      fieldValues = assign({}, fieldValues, field_value);
    }.bind(this)();
  };

  const convertTimeto24 = (everydaySch, timeObj) => {
    const modifiedEverydaySch = everydaySch.map((sch) => {
      const startT = "" + convertTime12to24(timeObj[parseInt(sch.startTime)]);
      const endT = "" + convertTime12to24(timeObj[parseInt(sch.endTime)]);
      return { ...sch, startTime: startT, endTime: endT };
    });

    return modifiedEverydaySch;
  };

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
  };

  const scheduleCourseDecrementStepNumber = () => {
    setRerender(rerender - 1);
  };
  const scheduleCourseIncrementStepNumber = () => {
    setRerender(rerender + 1);
  };

  const [rerender, setRerender] = useState(0);
  const handleRerender = (arg) => setRerender(arg);
  const currentPath = window.location.pathname;
  const prefixPath = currentPath.includes("/edit")? "/edit-scheduled-course/"+ props.batchId
                                                  : "/schedule-course"

  return (
    <React.Fragment>
      {rerender === 0 ? (
        <Redirect to={prefixPath + "/schedule" } />
      ) : rerender === 1 ? (
        <Redirect to={fieldValues.selectedOnline==="CUSTOM"? prefixPath + "/venue/online/custom" :
                      localStorage.getItem("zoomAuth")==="SUCCESS"? prefixPath + "/venue/online/zoom-details"
                      : prefixPath + "/venue/online/zoom-login"} />
      ) : rerender === 2 ? (
        <Redirect to={ prefixPath + "/pricing"} />
      ) : (
        ""
      )}

      <div className="wizard-container course-scheduler-wizard" ref={formRef}>
        <HeaderContainer>
          <div className="header-container page-section">
              <Container>
                    <div className="header-content">
                          <div className="header-title">Schedule Course</div>
                           <p>And share your knowledge with the world</p>
                    </div>
              </Container>
          </div>
        </HeaderContainer>
        <Wizard
          title={props.editScheduledCourseDetails!=undefined?"Edit Scheduled Course":"Schedule Course"}
          startAt={0}
          handleScheduleCourseSubmit={handleSubmit}
          decrementStepNumber={scheduleCourseDecrementStepNumber}
          incrementStepNumber={scheduleCourseIncrementStepNumber}
          handleRerender={handleRerender}
          saveAndExiTScheduleCourse={saveAndExiTScheduleCourse}
        >
          <ScheduleCourse
            linkPath={prefixPath + "/schedule"}
            title="Schedule"
            fieldValues={fieldValues}
            nextStep={nextStep}
            saveValues={saveValues}
            arg={0}
            editScheduledCourseDetails={props.editScheduledCourseDetails}
          />
          <ScheduleVenue
            linkPath={fieldValues.selectedOnline==="CUSTOM"? prefixPath + "/venue/online/custom" :
                          localStorage.getItem("zoomAuth")==="SUCCESS"?prefixPath + "/venue/online/zoom-details"
                          :prefixPath + "/venue/online/zoom-login"}
            title="Choose venue"
            fieldValues={fieldValues}
            manualyHandleFieldValue={manualyHandleFieldValue}
            nextStep={nextStep}
            saveValues={saveValues}
            arg={1}
            currentUser={currentUser}
            handleCustomMeetingDetails={handleCustomMeetingDetails}
            prefixPath= {prefixPath}
            editScheduledCourseDetails={props.editScheduledCourseDetails}
          />
          <CoursePricing
            linkPath={prefixPath + "/pricing"}
            title="Pricing and Promotions"
            fieldValues={fieldValues}
            handleDiscountedPrice={handleDiscountedPrice}
            handleActualPrice={handleActualPrice}
            nextStep={nextStep}
            saveValues={saveValues}
            arg={2}
          />
        </Wizard>
      </div>
      <FullPageLoader loading={loading} />
    </React.Fragment>
  );
}
const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(ScheduleCourseContainer);
