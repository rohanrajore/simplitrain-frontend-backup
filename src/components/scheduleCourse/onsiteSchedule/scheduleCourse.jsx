import React,{useState} from 'react';
import "./scheduleCourse.css";
import StepperComponent from "../../stepperComponent/stepper.jsx";
import BlueHeader from "../header/header.jsx";
import FirstStep from "./firstStep/firstStep.jsx";
import SecondStep from "./secondStep/secondStep.jsx";
import ThirdStep from "./thirdStep/thirdStep.jsx";
import FourthStep from "./fourthStep/fourthStep.jsx";
import {format, setHours, setMinutes, getHours, getMinutes,
        isToday, eachDayOfInterval, isSameDay} from "date-fns";

const SchedulueCourse = props => {


  // This function formats array of all dates into new array that material table accepts
  const arrayDatesData = (arrayName)=>{
    let newArray = []
      arrayName.forEach((element,i) => {
      let day = "Day " + `${i+1}` + " (" + format(element, 'do LLLL, EEEE, yyyy')  + ")"
      let startTime = String(getHours(element)) +String(getMinutes(element))
      console.log(String(getHours(element)) +String(getMinutes(element)))
      let endTime = getHours(element)

      newArray.push({"day":day,
                     "startTime":startTime,
                     "endTime":endTime, //actualDate is just that day before modifying, it will help us to store actual date when delete/update table
                     "actualDate":element})
    });
    console.log(newArray)
    return newArray
  }


  // Default startDate and startTime for scheduleArray, and startTime component
  let roundMinutes = (getMinutes(new Date())>0 && getMinutes(new Date())< 30)?30:0
  let roundHours = getMinutes(new Date())>30?getHours(new Date())+1:getHours(new Date())
  let defaultStart = setHours(setMinutes(new Date(), roundMinutes), roundHours)

  // This schedule Array represents material table that we can customize
  // Also from it we fetch startDate, endDate, time and duration...
  const [scheduleArray, setScheduleArray] = useState(arrayDatesData([defaultStart]))

  const [fieldsObject,setFieldsObject] = useState({"startDate":scheduleArray[0].actualDate,
                                                   "endDate":scheduleArray[scheduleArray.length-1].actualDate,
                                                   "calendarValue":[],
                                                   "startTime":"",
                                                   "duration":"",
                                                   "includeSaturday":true,
                                                   "includeSunday":true,
                                                   })

  const [activeStep, setActiveStep] = useState(0)


  let startDate=  scheduleArray[0].actualDate
  let endDate =   scheduleArray[scheduleArray.length-1].actualDate
  // Here we check is dateStart this day, if it is startTime cant be before now...
  let thisDay = isToday(startDate)

//  let defaultStart = thisDay? setHours(setMinutes(new Date(), roundMinutes), getHours(new Date()))
    //                        : setHours(setMinutes(startDate, 0), 0)


  const handleNextStep = () =>{
    let nextStep = activeStep+1
    setActiveStep(nextStep)
  }

  const updateField = (fieldName,value) =>{
    let tempFields = {...fieldsObject}
    tempFields[fieldName]=value
    setFieldsObject(tempFields)
  }

  const updateStartDate = newStartDate =>{

    // Here we check if our new startDate is bigger then endDate, if it is true we also update endDate so it cant be lower then startDate
    let newEndDate;
    if(newStartDate>scheduleArray[scheduleArray.length-1].actualDate){
      newEndDate=newStartDate
    }
    else{
      newEndDate=scheduleArray[scheduleArray.length-1].actualDate
    }
    // Here we set new array between start and end date
                               let newScheduleArray = eachDayOfInterval({
                                                    start: newStartDate,
                                                    end: newEndDate
                                                    })
      // Here we use our arrayDatesData function that converts newScheduleArray into format our material table use
      // First we check if startDate is today so we can adjust startTime for all days
      let isThisDay = isToday(newScheduleArray[0])
      let modifiedNewScheduleArray = []
      if(isThisDay){
        newScheduleArray.forEach((item) => {
            item=setHours(setMinutes(item, getMinutes(roundMinutes)), roundHours)
            modifiedNewScheduleArray.push(item)
        });
      }
      else{
        modifiedNewScheduleArray=newScheduleArray
      }
    setScheduleArray(arrayDatesData(modifiedNewScheduleArray))
  }

  const updateEndDate = newEndDate =>{
    // Here we set new array between start and end date similar to updateStartDate function
                               let newScheduleArray = eachDayOfInterval({
                                                    start: scheduleArray[0].actualDate,
                                                    end: newEndDate
                                                    })
        // Here we use our arrayDatesData function that converts newScheduleArray into format our material table use
        // First we check if startDate is today so we can adjust startTime for all days
        let isThisDay = isToday(newScheduleArray[0])
        let modifiedNewScheduleArray = []
        if(isThisDay){
          newScheduleArray.forEach((item) => {
              item=setHours(setMinutes(item, getMinutes(roundMinutes)), roundHours)
              modifiedNewScheduleArray.push(item)
          });
        }
        else{
          modifiedNewScheduleArray=newScheduleArray
        }
      setScheduleArray(arrayDatesData(modifiedNewScheduleArray))
  }

  const updateStartTime = startTime =>{
    let newScheduleArray = [...scheduleArray]
    newScheduleArray.forEach((item) => {
        item["actualDate"]=setHours(setMinutes(item.actualDate, getMinutes(startTime)), getHours(startTime))
        item["startTime"]= String(getHours(startTime)) +String(getMinutes(startTime))
    });
    setScheduleArray(newScheduleArray)
    console.log(startTime)
  }

  return(
  <div className="scheduleNew-container" >
        <BlueHeader/>
        <div className="scheduleNew-content">
            <StepperComponent activeStep={activeStep}/>
            {activeStep===0 && <FirstStep fieldsObject={fieldsObject}
                                          arrayDatesData={arrayDatesData}
                                          scheduleArray={scheduleArray}
                                          setScheduleArray={setScheduleArray}
                                          updateField={updateField}
                                          handleNextStep={handleNextStep}
                                          updateStartDate={updateStartDate}
                                          updateEndDate={updateEndDate}
                                          updateStartTime={updateStartTime}/>}

            {activeStep===1 && <SecondStep handleNextStep={handleNextStep}/>}
            {activeStep===2 && <ThirdStep handleNextStep={handleNextStep}/>}
            {activeStep===3 && <FourthStep scheduleArray={scheduleArray}/>}
        </div>

  </div>


)}

export default SchedulueCourse;
