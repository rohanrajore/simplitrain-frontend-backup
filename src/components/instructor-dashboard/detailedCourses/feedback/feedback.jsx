import React,{useState,useEffect} from 'react';
import './feedback.css';
import response from '../JSONdetailed.js';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feedback = props => {
  const [currentDay, setCurrentDay] = useState(0)
  const [daysArray, setDaysArray] = useState({})
  const clickHandler = arg => setCurrentDay(arg)
  // Here we will map days index position, and key is days id attribute
  useEffect(()=>{
    let object ={};
     for(let i=0;i<response.days.length;i++){
       object[response.days[i].id]=i
     }
     setDaysArray(object)
  },[])

  return (
  <div className="feedback-container">
        <div className="feedback-days">
          {response.days.map(day=>(
              <div className="feedback-button" onClick={() => clickHandler(daysArray[day.id])} key={day.id}>{day.name +" "+ day.rating}</div>
          ))}
        </div>

        <div className="accordion-container">

            { response.days[currentDay].students.map(student=>(
              <Accordion style={{color:"#627373"}}
                         key={student.id}>

                  {/* THIS IS ACCORDION TITLE*/}
                   <AccordionSummary
                           expandIcon={<FontAwesomeIcon icon='chevron-down' style={{fontSize:"11px"}} size='1x'/>}
                           aria-controls={student.id}
                           id={student.id}>

                           <Typography> <b style={{fontSize:"18px"}}>{student.name}</b></Typography>
                   </AccordionSummary>

                  {/*This is accordion content*/}
                  <AccordionDetails style={{display:"flex",flexDirection:"column"}}>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                      <div className="ratings-title">Technical knowledge of the Instructor</div>
                                      <div style={{background:parseInt(student.technicalKnowledge)<=2?'red':parseInt(student.technicalKnowledge)<=5?'blue'
                                                  :parseInt(student.technicalKnowledge)<=8?'orange':'green'}} className="ratings">
                                        {student.technicalKnowledge}/10
                                      </div>
                     </Typography>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                      <div className="ratings-title">Training content Quality</div>
                                      <div style={{background:parseInt(student.trainingContent)<=2?'red':parseInt(student.trainingContent)<=5?'blue'
                                                  :parseInt(student.trainingContent)<=8?'orange':'green'}} className="ratings">
                                        {student.trainingContent}/10
                                      </div>
                     </Typography>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                      <div className="ratings-title">Ability to answer questions Satisfactoraly</div>
                                      <div style={{background:parseInt(student.ability)<=2?'red':parseInt(student.ability)<=5?'blue'
                                                  :parseInt(student.ability)<=8?'orange':'green'}} className="ratings">
                                        {student.ability}/10
                                      </div>
                     </Typography>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                      <div className="ratings-title">Venue</div>
                                      <div style={{background:parseInt(student.venue)<=2?'red':parseInt(student.venue)<=5?'blue'
                                                  :parseInt(student.venue)<=8?'orange':'green'}} className="ratings">
                                        {student.venue}/10
                                      </div>
                     </Typography>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                      <div className="ratings-title">Rate your Day 1 Experience. Were the training objectives met?</div>
                                      <div style={{background:parseInt(student.firstDay)<=2?'red':parseInt(student.firstDay)<=5?'blue'
                                                  :parseInt(student.firstDay)<=8?'orange':'green'}} className="ratings">
                                        {student.firstDay}/10
                                      </div>
                     </Typography>

                     <Typography className="accordion-typography" component={'span'} style={{marginBottom:"13px"}}>
                                    Comments: {student.comment}
                     </Typography>


                   </AccordionDetails>

           </Accordion>
         ))}
        </div>
  </div>
);}

export default Feedback;
