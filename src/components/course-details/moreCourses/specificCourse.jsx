import React from 'react';
import './specificCourse.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SpecificCourse = props => {

    let rating= parseFloat(props.info.rating)
  return (
  <div className="specific-container">
        <img src={props.info.imageUrl} alt="course"/>
        <div><b>{props.info.title}</b></div>
        <div style={{fontSize:"13px",margin:"5px 0"}}>{props.createdBy.name}</div>

        <div style={{fontSize:"14px"}}>
        {rating}
        <FontAwesomeIcon icon={rating<0.5? ['far', 'star']: rating>=0.5&& rating<1?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
        <FontAwesomeIcon icon={rating<1.5? ['far', 'star']: rating>=1.5&& rating<2?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
        <FontAwesomeIcon icon={rating<2.5? ['far', 'star']: rating>=2.5&& rating<3?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
        <FontAwesomeIcon icon={rating<3.5? ['far', 'star']: rating>=3.5&& rating<4?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
        <FontAwesomeIcon icon={rating<4.5? ['far', 'star']: rating>=4.5&& rating<5?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
        {" (" +props.info.numberOfRates} ratings)
      </div>

        <div style={{fontSize:"13px",margin:"5px"}}>
          {props.info.totalHours +" "} total hourse <b style={{fontSize:"15px"}}>·</b>
              {" "+ props.info.numberOfLectures +" "} lectures <b style={{fontSize:"15px"}}>·</b>
               {" "+ props.info.levels}
        </div>

        <div><b>{"$"+props.info.discountedValue}</b>  <span style={{fontSize:"13px",textDecoration:"line-through"}}>{" $"+ props.info.value}</span></div>
  </div>
);}

export default SpecificCourse;
