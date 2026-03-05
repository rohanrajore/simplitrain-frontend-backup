import React from 'react';
import "./paymentDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

const PaymentDetails = props => (
  <div className="venueDetails-payment">
    <div>Payment Details</div>
    <div className="venueDetails-paymentItem">
      <div>1 Day</div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        1,000.00
      </div>
    </div>

    <div className="venueDetails-paymentItem">
      <div>5 Day</div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        4,500.00
      </div>
    </div>

    <div className="venueDetails-paymentItem">
      <div>GST - 18%</div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        850.00
      </div>
    </div>

    <div className="venueDetails-paymentItem">
      <div>
        Coupon Aplied
        <FontAwesomeIcon icon={faInfo} className="venueDetails-infoIcon"/>
      </div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        - 500.00
      </div>
    </div>

    <div className="venueDetails-paymentTotal">
      <div>Total Amount</div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        5,850.00
      </div>
    </div>

    <div className="venueDetails-paymentAdvance">
      <div>Advance Amount</div>
      <div>
        <FontAwesomeIcon icon="rupee-sign"/>
        1,000.00
      </div>
    </div>

    <div className="venueDetails-paymentAdd">Apply Coupon code</div>
    <div className="venueDetails-paymentAdd">Add on facilities</div>

    <div className="venueDetails-paymentBottom">
      <div className="venueDetails-paymentBtn"
           onClick={()=>props.handleNextStep(2)}>
           I'll Reserve
      </div>
      <div className="venueDetails-paymentBtn"
           onClick={()=>props.setScreen("list")}>
           Back to Venue List
      </div>
    </div>

  </div>
);

export default PaymentDetails;
