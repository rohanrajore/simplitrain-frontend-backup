import React from 'react';
import './finance.css';
import response from '../JSONdetailed.js';

const Finance = props => (
      <div className="finance-container">
            <div className="students-list">
                  {response.finance.students.map(student=>(
                      <div className="student" key={student.id}>
                            <div className="student-name"><b>{student.name}</b></div>
                            <div className="student-coupon">{student.coupon!==""?"Coupon code: " + student.coupon : ''}</div>
                            <div className="student-value"><b>{student.price}</b></div>
                      </div>
                  ))}
            </div>

            <div className="earnings">
                <div style={{marginLeft:'15px'}}><b>Venue Expense</b></div>
                <div className="expense-value"><b>{"- " +response.finance.venueExpense}</b></div>
            </div>

            <div className="earnings">
              <div style={{marginLeft:'15px'}}><b>Total Earnings</b></div>
              <div className="earnings-value"><b>{response.finance.totalEarnings}</b></div>
            </div>
      </div>
);

export default Finance;
