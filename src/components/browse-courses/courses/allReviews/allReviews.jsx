import React from 'react';
import {Link} from "react-router-dom";
import "./allReviews.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AllReviews = props => (
  <div className="allReviews-container">
      <div className="rightContent-ratings">
            <FontAwesomeIcon icon={props.rating<0.5? ['far', 'star']: props.rating>=0.5&& props.rating<1?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
            <FontAwesomeIcon icon={props.rating<1.5? ['far', 'star']: props.rating>=1.5&& props.rating<2?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
            <FontAwesomeIcon icon={props.rating<2.5? ['far', 'star']: props.rating>=2.5&& props.rating<3?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
            <FontAwesomeIcon icon={props.rating<3.5? ['far', 'star']: props.rating>=3.5&& props.rating<4?'star-half-alt' : 'star'} style={{color:"#e39e09"}} size='1x'/>
            <FontAwesomeIcon icon={props.rating<4.5? ['far', 'star']: props.rating>=4.5&& props.rating<5?'star-half-alt' : 'star'} style={{color:"#e39e09",marginRight:'10px'}} size='1x'/>
            <span className="allReviews-rating">{props.rating} out of 5 </span>
      </div>
      <div className="allReviews-cr">{props.reviews} customer ratings</div>
      <div>
        <div className="feedback-percent-container allReviews-percent-container">
              <div className="feedback-percent">
                      <span className="allReviews-blue"> 5 star </span>
                    <div className="feedback-bar"> <div className="feedback-bar-progress" style={{width:`34%`,backgroundColor:"#e39e09"}}></div></div>
                        <span className="allReviews-blue"> 34% </span>
              </div>

              <div className="feedback-percent">
                        <span className="allReviews-blue"> 4 star </span>
                    <div className="feedback-bar"> <div className="feedback-bar-progress" style={{width:`25%`,backgroundColor:"#e39e09"}}></div></div>
                        <span className="allReviews-blue"> 25% </span>
              </div>

              <div className="feedback-percent">
                        <span className="allReviews-blue"> 3 star </span>
                    <div className="feedback-bar"> <div className="feedback-bar-progress" style={{width:`11%`,backgroundColor:"#e39e09"}}></div></div>
                        <span className="allReviews-blue"> 11% </span>
              </div>

              <div className="feedback-percent">
                        <span className="allReviews-blue"> 2 star </span>
                    <div className="feedback-bar"> <div className="feedback-bar-progress" style={{width:`22%`,backgroundColor:"#e39e09"}}></div></div>
                        <span className="allReviews-blue"> 22% </span>
              </div>

              <div className="feedback-percent">
                        <span className="allReviews-blue"> 1 star </span>
                    <div className="feedback-bar"> <div className="feedback-bar-progress" style={{width:`8%`,backgroundColor:"#e39e09"}}></div></div>
                        <span className="allReviews-blue"> 8% </span>
              </div>
        </div>
      </div>
      <Link to={`/course-details/${props.id}#course-reviews`} className="allReviews-seeAll">See all customer reviews></Link>
  </div>
);

export default AllReviews;
