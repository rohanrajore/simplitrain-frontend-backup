import React,{useState} from 'react';
import "./instructorBatchDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InstructorDetails from "./details/details.jsx";
import InstructorLearners from "./learners/learners.jsx";
import InstructorFinance from "./finance/finance.jsx";
import InstructorFeedback from "./feedback/feedback.jsx";
import InstructorReviews from "./reviews/reviews.jsx";
import InstructorAnnouncments from "./announcments/announcments.jsx";
import InstructorMainCard from "./mainCard/mainCard.jsx";
import batchDetails from "./responseJSON.js";
import { Col, Container, Row } from 'react-bootstrap';
import {InstDashboardBatchCard} from "../instructorBatchDetails/instructorBatchDetails.style";


const InstructorBatchDetails = props => {

  const [activeTab, setActiveTab] = useState(0)
  const handleActiveTab = value => setActiveTab(value)

  return(
<InstDashboardBatchCard>
  <div className="instDashboard-batchCard">

      <InstructorMainCard batchDetails={props.batchDetails.mainCard}/>

      <ul active={activeTab!==0?"true":"false"}>
        <li active={activeTab===1?"true":"false"}
            onClick={()=>handleActiveTab(1)}>Details</li>
        <li active={activeTab===2?"true":"false"}
            onClick={()=>handleActiveTab(2)}>Learners</li>
        <li active={activeTab===3?"true":"false"}
            onClick={()=>handleActiveTab(3)}>Feedback</li>
        <li active={activeTab===4?"true":"false"}
            onClick={()=>handleActiveTab(4)}>Finance</li>
        <li active={activeTab===5?"true":"false"}
            onClick={()=>handleActiveTab(5)}>Reviews</li>
        <li>Q&A</li>
        <li active={activeTab===7?"true":"false"}
            onClick={()=>handleActiveTab(7)}>Announcements</li>

      </ul>

      {activeTab===1 && <InstructorDetails handleActiveTab={handleActiveTab} batchDetails={props.batchDetails.details}/>}
      {activeTab===2 && <InstructorLearners handleActiveTab={handleActiveTab} batchDetails={props.batchDetails.learners}/>}
      {activeTab===3 && <InstructorFeedback handleActiveTab={handleActiveTab} batchDetails={props.batchDetails.feedback}/>}
      {activeTab===4 && <InstructorFinance handleActiveTab={handleActiveTab} finance={props.batchDetails.finance} learners={props.batchDetails.learners}/>}
      {activeTab===5 && <InstructorReviews handleActiveTab={handleActiveTab}/>}
      {activeTab===7 && <InstructorAnnouncments handleActiveTab={handleActiveTab} batchDetails={props.batchDetails.announcements}/>}
  </div>
  </InstDashboardBatchCard>
);}

export default InstructorBatchDetails;
