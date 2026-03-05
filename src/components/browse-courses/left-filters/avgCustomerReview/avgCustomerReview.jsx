import React from 'react';
import './avgCustomerReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStartOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {useSelector, useDispatch} from 'react-redux';
import {setAvgCustomerReview} from '../../../../redux/browse-courses/browse-courses-actions.js';

const AverageCustomerReview = props => {

  const afOpen = props.allFiltersOpen
  const avgCustomerReview = useSelector(state => state.browseCourses.avgCustomerReview)
  const dispatch =useDispatch()

  // If all filters component is opened, it will store value in local state, until we click apply, and then it will be stored in global state
  // Otherwise if we click cancel nothing will be changed
  const handleAFOpenClick = e =>{
        props.handleSetAvgCustomerReview(e.target.getAttribute("value"))
  }
  const handleAFClosedClick = e => {
      dispatch(setAvgCustomerReview(e.target.getAttribute("value")))
    };

  return(
  <div className="avg-customer-review">

          {/*<div className="avg-customer-review-item" value={"FIVE"} onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="FIVE"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="FIVE"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={ faStar } />
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
              </div>


          </div>*/}


          <div className="avg-customer-review-item" value={"FOUR"} onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="FOUR"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="FOUR"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={ faStar } />
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <span>and up</span>
              </div>


          </div>

          <div className="avg-customer-review-item" value="THREE" onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="THREE"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="THREE"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <span>and up</span>
              </div>

          </div>

          <div className="avg-customer-review-item" value="TWO" onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="TWO"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="TWO"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <span>and up</span>
              </div>

          </div>

          <div className="avg-customer-review-item" value="ONE" onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="ONE"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="ONE"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={ faStar }/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <span>and up</span>
              </div>

          </div>

          <div className="avg-customer-review-item" value="ZERO" onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className="avg-customer-review-clear">Clear</div>
          </div>

          {/*<div className="avg-customer-review-item" value="ZERO" onClick={afOpen===true? handleAFOpenClick: handleAFClosedClick}>
              <div className={`avg-customer-ratings ${afOpen===true?props.avgCustomerReviewState==="ZERO"?"activeAvgCustRating":""
                                                                   :avgCustomerReview==="ZERO"?"activeAvgCustRating":""}`}>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
                <FontAwesomeIcon  icon={faStartOutline}/>
              </div>

          </div>*/}

  </div>
);}

export default AverageCustomerReview;
