import React from 'react';
//import "./finance.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FinanceStyle } from '../finance/finance.style'

const InstructorFinance = props => (
  <FinanceStyle>
  <div className="instructorBatch-details">
    <div className="tabTitle">
        <div className="instructorBatch-details-head">Finance</div>
        <FontAwesomeIcon className="instructorBatch-details-close"
                         icon={faTimes}
                         onClick={()=>props.handleActiveTab(0)}/>
    </div>

    <div className="instructorBatch-finance-table">
        <div className="instructorBatch-finance-table-head">
            <div>Name</div>
            <div>Coupon</div>
            <div>Discount</div>
            <div>Amount Paid</div>
        </div>
        <div className="instructorBatch-finance-table-body">
          {props.learners.map(learner=>(
            <div className="instructorBatch-finance-table-bodyItem" key={learner.id}>
                <div>{learner.name}</div>
                <div> {learner.coupon}</div>
                <div><FontAwesomeIcon icon="rupee-sign"/> {learner.discount}</div>
                <div><FontAwesomeIcon icon="rupee-sign"/> {learner.amountPaid}</div>
            </div>
          ))}

          <div className="instructorBatch-finance-table-summary">
              <div>Sub Total</div>
              <div> </div>
              <div> </div>
              <div><FontAwesomeIcon icon="rupee-sign"/> {props.finance.subTotal}</div>
          </div>
          <div className="instructorBatch-finance-table-summary">
              <div>Venue Expense</div>
              <div> </div>
              <div> </div>
              <div><FontAwesomeIcon icon="rupee-sign"/> {props.finance.venueExpense}</div>
          </div>
          <div className="instructorBatch-finance-table-summary">
              <div>SimpliTrain Platform Payout</div>
              <div> </div>
              <div> </div>
              <div><FontAwesomeIcon icon="rupee-sign"/> {props.finance.simplitrainPayout}</div>
          </div>
          <div className="instructorBatch-finance-table-summary">
              <div>Total Earnings</div>
              <div> </div>
              <div> </div>
              <div profit="false"><FontAwesomeIcon icon="rupee-sign"/> {props.finance.totalEarnings}</div>
          </div>
        </div>
    </div>

  </div>
  </FinanceStyle>
);

export default InstructorFinance;
