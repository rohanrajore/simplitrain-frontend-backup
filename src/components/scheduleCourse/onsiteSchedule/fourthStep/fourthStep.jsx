import React from 'react';
import "./fourthStep.css";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {isSameDay} from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FourthStep = props => (
  <div className="stepper-stepContainer">
      <div className="stepper-stepTitle">Summary</div>
      <div className="fourthStep-container">
          <div>
              <div className="summaryTitle">Schedule</div>
              <div className="summaryTable">
                <div className="summary-tableHead">
                  <div>From</div>
                  <div>To</div>
                  <div>Timings</div>
                  <div>Duration</div>
                </div>
                <div className="summary-tableBody">
                  <div>10/11/21</div>
                  <div>15/11/21</div>
                  <div>10:00 AM - 12:00 PM</div>
                  <div>5 Days</div>
                </div>
              </div>

              <div className="summaryTitle">Venue & Pricing</div>
              <div className="summaryTable">
                <div className="summary-tableHead">
                  <div>Venue Name</div>
                  <div>Total Amount</div>
                  <div>Advance Amount</div>
                  <div>Pay</div>
                </div>
                <div className="summary-tableBody">
                  <div>Taj Vivanta Conference Room</div>
                  <div className="greenMoney"> <FontAwesomeIcon icon='rupee-sign'/> 5,850.00</div>
                  <div className="redMoney"> <FontAwesomeIcon icon='rupee-sign'/> 1,000.00</div>
                  <div className="payBtn">Pay Now</div>
                </div>
              </div>

              <div className="summaryTitle">Corporate discount code</div>
              <div className="summaryTable">
                <div className="summary-tableHead">
                  <div>Code</div>
                  <div>Discounted Price</div>
                  <div>Validity</div>
                  <div>No. of Coupons</div>
                </div>
                <div className="summary-tableBody">
                  <div>1BCDTY1ER</div>
                  <div><FontAwesomeIcon icon='rupee-sign'/> 5,850.00</div>
                  <div>5/11/21 - 20/11/21</div>
                  <div>4</div>
                </div>
              </div>

              <div className="summaryTitle">Note</div>
              <div className="summaryNote">To book a venue its mandatory to make the advance payment/amount mentioned above.</div>
              <div className="summaryNote">To pay the advance amount for the venue click on the Pay now Button.</div>
          </div>
          <div>
              <div className="summaryTitle">Calendar</div>
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
      </div>

      <div className="onsite-firstStep-btn">Send for Review</div>
  </div>
);

export default FourthStep;
