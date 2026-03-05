import React,{useState} from 'react';
import "./secondStep.css";
import VenueList from "./venueList/venueList.jsx";
import VenueDetails from "./venueDetails/venueDetails.jsx";

const SecondStep = props => {

  const [screen,setScreen] = useState("details")

  return(
  <div className="stepper-stepContainer">
      {screen==="list" && <VenueList setScreen={setScreen}/>}
      {screen==="details" && <VenueDetails setScreen={setScreen}
                                           handleNextStep={props.handleNextStep}/>}
  </div>
)}

export default SecondStep;
