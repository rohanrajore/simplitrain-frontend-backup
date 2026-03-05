import React from 'react';
import './learners.css';
import response from '../JSONdetailed.js';

const Learners = props => (
  <table className="learners-container">
    <thead>
        <tr className="learners-row">
              <th className="learners-header" style={{width:'5%'}}></th>
              <th className="learners-header" style={{width:'30%'}}>Name</th>
              <th className="learners-header" style={{width:'17.5%'}}>Amount Paid</th>
              <th className="learners-header" style={{width:'17.5%'}}>Coupon</th>
              <th className="learners-header" style={{width:'30%'}}></th>
        </tr>
      </thead>
        <tbody>
        {response.learners.map(learner=>(
          <tr className="learners-row" key={learner.id}>
                <td><input type="checkbox"/></td>
                <td>{learner.name}</td>
                <td>{learner.amountPaid}</td>
                <td>{learner.coupon}</td>
                <td><div className="learners-button">Message</div></td>
          </tr>
        ))}
      </tbody>
  </table>
);

export default Learners;
