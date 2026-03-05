import React,{useState,useEffect} from 'react';
import "./firstStep.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MaterialTable from "material-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import {format, setHours, setMinutes, getHours, getMinutes,
        isToday, eachDayOfInterval, isSameDay, isSaturday,
        isSunday} from "date-fns"


const FirstStep = props => {

  const [enableCustomize,setEnableCustomize] = useState(false)
  const [dataArray, setDataArray] = useState([])

  const timeObj = [];
    for(let hour = 0; hour < 24; hour++) {
        timeObj[`${hour}`+'0']=moment({ hour }).format('h:mm A')
        timeObj[`${hour}`+'30']=moment({hour, minute: 30}).format('h:mm A')
    }

  // This sets up column names for material table where dataArray will be displayed
  const cols = [
    { title: "Day", field: "day", editable: "never", cellStyle:{width:"50%"} },
    {
      title: "Start Time",
      field: "startTime",
      lookup: timeObj,
    },
    {
      title: "End Time",
      field: "endTime",
      lookup: timeObj,
    },
  ]


  const tableOnDelete = (arrayName,index) =>{
    // First if will prevent delete of row if only one row is left...
   if(arrayName.length>0){
       if(index===0){ //Here if we delete first row, we set new startDate
         props.updateStartDate(arrayName[0].actualDate)
       }
       else if(index===arrayName.length){ // If we delete last row we set new endDate
         props.updateEndDate(arrayName[index-1].actualDate)
       }
       else{ // We just delete specific day between start and end date
         console.log(arrayName, arrayName.length)
         let newArray = []
         arrayName.forEach((item) => {
           newArray.push(item.actualDate)
         })
         props.setScheduleArray(props.arrayDatesData(newArray))
       }
   }
  }

  const tableOnUpdate = (arrayName,index) =>{
      console.log(arrayName[index])
  }


  let startDate= props.scheduleArray[0].actualDate
  let endDate = props.scheduleArray[props.scheduleArray.length-1].actualDate

  // We use date-fns library isToday to check if startDate is today...
  // If it is then we wont allow user to schedule startTime before currentTime,
  // If it isnt then user can choose all options for startTime
  let thisDay = isToday(startDate)


  console.log(startDate)
  console.log(endDate)
  console.log(thisDay)

  return(
  <div className="stepper-stepContainer">
      <div className="stepper-stepTitle">Course Schedule</div>
      <div className="onsite-firstStep">
        <div className="flex">
          <div className="datePick-container">
            <div>
                <div className="datePick-item">
                    <label htmlFor="startDate">Start Date</label>
                    <DatePicker selected={startDate}
                                onChange={(date)=>props.updateStartDate(date)}
                                id="startDate"
                                minDate={new Date()}
                                dateFormat="EEE, dd MMMM yy"/>
                </div>
                <div className="datePick-item">
                    <label htmlFor="endDate">End Date</label>
                    <DatePicker selected={endDate}
                                onChange={(date)=>props.updateEndDate(date)}
                                id="endDate"
                                minDate={props.scheduleArray[0].actualDate}
                                dateFormat="EEE, dd MMMM yy"/>
                </div>
            </div>

            <div>
                <div className="datePick-item">
                    <label htmlFor="startTime">Start Time</label>
                    <DatePicker selected={setHours(setMinutes(startDate, getMinutes(startDate)), getHours(startDate))}
                                onChange={(date)=>props.updateStartTime(date)}
                                id="startTime"
                                showTimeSelect
                                showTimeSelectOnly
                                timeCaption="Time"
                                minTime={thisDay? setHours(setMinutes(new Date(), getMinutes(new Date())), getHours(new Date()))
                                                : setHours(setMinutes(startDate, 0), 0)}
                                maxTime={setHours(setMinutes(startDate, 30), 22)}
                                dateFormat="h:mm aa"/>
                </div>
                <div className="datePick-item">
                    <label htmlFor="startDate">Duration</label>
                    <DatePicker selected={props.fieldsObject.duration}
                                id="startTime"
                                showTimeSelect
                                showTimeSelectOnly
                                minTime={setHours(setMinutes(new Date(), 30), 0)}
                                maxTime={setHours(setMinutes(new Date(), 0), 8)}
                                timeCaption="Hours:Mins"
                                timeFormat="HH:mm"/>

                </div>
            </div>

            <div>
                {enableCustomize &&
                <div className="datePick-weekends">
                    <input type="checkbox"
                           id="includeSaturday"
                           checked={props.fieldsObject.includeSaturday}
                           onChange={()=>props.updateField("includeSaturday",!props.fieldsObject.includeSaturday)}/>

                    <label htmlFor="includeSaturday">Include Saturday</label>

                    <input type="checkbox"
                           id="includeSunday"
                           checked={props.fieldsObject.includeSunday}
                           onChange={()=>props.updateField("includeSunday",!props.fieldsObject.includeSunday)}/>

                    <label htmlFor="includeSunday">Include Sunday</label>
                </div>}
                <div className="datePick-customize"
                     enableCustomize={enableCustomize?'true':'false'}
                     onClick={()=>setEnableCustomize(true)}>Customize</div>
            </div>

          </div>


          <Calendar value={[props.scheduleArray[0].actualDate,props.scheduleArray[props.scheduleArray.length-1].actualDate]}
                    selectRange={true}
                    className="datePick-calendar"
                    tileClassName={({activeStartDate, date, view })=>
                                  (props.scheduleArray.some(element=>isSameDay(element.actualDate, date)))
                                  ?"disable-calendar datePick-calendarTile"
                                  :(date.getDay() === 6 || date.getDay() === 0)
                                  ?"weekendColor notActiveTile disable-calendar"
                                  :"notActiveTile disable-calendar"}              />


        </div>

        {enableCustomize &&
        <div className="customizeTable">
          <MaterialTable
            title="Everyday Schedule"
            columns={cols}
            data={props.scheduleArray}
            editable={{
              onRowUpdate: (newData, oldData) =>  new Promise((resolve, reject) => {
                                                  setTimeout(() => {
                                                    const dataUpdate = [...dataArray];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    tableOnUpdate([...dataUpdate],index)
                                                    resolve();
                                                  }, 1000)
                                                }),

             onRowDelete: oldData => new Promise((resolve, reject) => {
                                              setTimeout(() => {
                                                const dataDelete = [...props.scheduleArray];
                                                const index = oldData.tableData.id;
                                                dataDelete.splice(index, 1);
                                                tableOnDelete([...dataDelete],index)
                                                resolve()
                                              }, 1000)
                                            })
                      }}
          />

            <div className="closeCustomize">
              <FontAwesomeIcon icon={faTimes}
                               onClick={()=>setEnableCustomize(false)}/>
            </div>
        </div>}

      </div>

      <div className="onsite-firstStep-btn"
           onClick={props.handleNextStep}>Confirm & Proceed
      </div>
  </div>
)}

export default FirstStep;
