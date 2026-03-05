import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckCircle, faCircle, faDotCircle} from "@fortawesome/free-regular-svg-icons";
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
// import './courseCard.css';

const Coupon = props =>{

  return(
  <div className={`card-coupon-separate ${props.couponSelected.id===props.coupon.id?'active':null}`}
    key={props.coupon.id}
    onClick={props.handleCouponSelection}
    id={props.coupon.id}
    name={props.coupon.name}
    discount={props.coupon.discount}>
      {props.couponSelected.id===props.coupon.id?
       <FontAwesomeIcon className="radio" icon={faDotCircle} size='1x'/>: <FontAwesomeIcon className="radio" icon={faCircle} size='1x'/>}
     
      <div>
        <div className="coupon-names">
          <h4><b> Apply coupon code </b></h4>
          <span> {props.coupon.name} </span>
        </div>
        <strong>Discount - <FontAwesomeIcon style={{margin:'0 2px 0 4px'}} icon={faRupeeSign} size='1x'/> {props.coupon.discount}  off</strong>
     </div>
  </div>
);}

export default Coupon;
