import React from 'react';
//import "./batchesContainer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstructorBatchDetails from "../instructorBatchDetails/instructorBatchDetails.jsx";
import batchDetails from "../instructorBatchDetails/responseJSON.js";
import { Col, Container, Row } from 'react-bootstrap';
import {CoursesContainer} from "../batchesContainer/batchesContainer.style";

const BatchesContainer = (props) => {

  return(
<CoursesContainer>
  <div className="courses-container">
    <div className="insDash-batches-title">Batches</div>

    <div className="batches-search-container">
      <div>
        <input type="text"
               placeholder="Search Batches"/>

        <div className="batches-searchIcon">
          <FontAwesomeIcon icon="search"/>
        </div>
      </div>

      <div className="batches-timeline">
          <div>Past</div>
          <div active="true">Upcoming</div>
      </div>
    </div>

    {batchDetails.map(batchDetail=>(
         <InstructorBatchDetails batchDetails={batchDetail} />
    ))}
    {batchDetails.map(batchDetail=>(
         <InstructorBatchDetails batchDetails={batchDetail} />
    ))}
    {batchDetails.map(batchDetail=>(
         <InstructorBatchDetails batchDetails={batchDetail} />
    ))}
    {batchDetails.map(batchDetail=>(
         <InstructorBatchDetails batchDetails={batchDetail} />
    ))}

  </div>
  </CoursesContainer>
);}

export default BatchesContainer;
