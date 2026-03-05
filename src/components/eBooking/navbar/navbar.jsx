import React from 'react';

const EbookingNavbar = props => (

  <nav className="eBooking-navbar">
      <ul>
          <li className="paddingZero">
                <div  className={props.showDetails===1?"link activeLink":"link"}
                      onClick={()=>props.handleShowDetails(1)}>Details</div>
          </li>

          {/*<li>
            <div  className={props.showDetails===2?"link activeLink":"link"}
                  onClick={()=>props.handleShowDetails(2)}>Learner Details</div>
          </li>*/}

          <li>
            <div  className={props.showDetails===3?"link activeLink":"link"}
                  onClick={()=>props.handleShowDetails(3)}>Pre-Requisites</div>
          </li>

          {/*<li>
            <div  className={props.showDetails===4?"link activeLink":"link"}
                  onClick={()=>props.handleShowDetails(4)}>Terms & Conditions</div>
          </li>*/}

          {/*<li>
            <div  className={props.showDetails===5?"link activeLink":"link"}
                  onClick={()=>props.handleShowDetails(5)}>Cancellation Policy</div>
          </li>*/}

          {props.myCourses && <li>
            <div  className={props.showDetails===6?"link activeLink":"link"}
                  onClick={()=>props.handleShowDetails(6)}>Feedback</div>
          </li>}
      </ul>
  </nav>
);

export default EbookingNavbar;
