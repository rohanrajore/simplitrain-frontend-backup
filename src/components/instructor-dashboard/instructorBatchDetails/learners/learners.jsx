import React from 'react';
//import "./learners.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { InstructorBatchDetails } from '../learners/learners.style';

const InstructorLearners = props => (
  <InstructorBatchDetails>
  <div className="instructorBatch-details">
    <div className="tabTitle">
        <div className="instructorBatch-details-head">Learners</div>
        <FontAwesomeIcon className="instructorBatch-details-close"
                         icon={faTimes}
                         onClick={()=>props.handleActiveTab(0)}/>
    </div>

    <div className="instructorBatch-learners-table">
      <div className="instructorBatch-learners-table-head">
          <input type="checkbox"/>
          <div>Name</div>
          <div>Amount Paid</div>
          <div>Coupon</div>
          <div>Message All</div>
      </div>

      <div className="instructorBatch-learners-table-body">
        {props.batchDetails.map(item=>(
          <div className="instructorBatch-learners-table-bodyItem" key={item.id}>
              <input type="checkbox" />
              <div>{item.name}</div>
              <div><FontAwesomeIcon icon="rupee-sign"/> {item.amountPaid}</div>
              <div> {item.coupon}</div>
              <div>
                <div>Message</div>
              </div>
          </div>
        ))}
      </div>

    </div>
  </div>
  </InstructorBatchDetails>
);

export default InstructorLearners;
