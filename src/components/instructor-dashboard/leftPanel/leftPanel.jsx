import React,{useState} from 'react';
//import './leftPanel.css';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faReply} from "@fortawesome/free-solid-svg-icons";
import {LeftPanelWrapper} from "../leftPanel/leftPanel.style";

const LeftPanel = props => {

  return(
<LeftPanelWrapper>
  <div className="left-container">
          <ul> <span>Manage Batches</span>
                <li className={props.activeTab===1?'link-active-instrDash':''}>
                    <NavLink to="/instructor-dashboard/batches"
                             onClick={()=>props.setActiveTab(1)}
                             className="link">Batches</NavLink>
                </li>
          </ul>

          <ul style={{minHeight:'101px'}}> <span>Manage Courses</span>
                <li className={props.activeTab===2?'link-active-instrDash':''}>
                    <NavLink exact to="/instructor-dashboard/courses"
                             onClick={()=>props.setActiveTab(2)}
                             className="link">Courses</NavLink>
                </li>

                {props.activeTab===2.5 && <li className={props.activeTab===2.5?'link-active-instrDash':''}>
                    <div     onClick={()=>props.setActiveTab(2.5)}
                             className="link" ><FontAwesomeIcon icon={faReply} rotation={180}/> Complete Python Boot..</div>
                         </li>}
          </ul>

          <ul> <span>Communication</span>
                <li><NavLink exact to="/" className="link"  >Messages</NavLink></li>
                <li><NavLink exact to="/" className="link"  >Reviews</NavLink></li>
                <li><NavLink exact to="/" className="link"  >Q&A</NavLink></li>
          </ul>

          {/*<ul> <span>Manage Venues</span>
                <li style={{marginTop:'20px'}}><NavLink exact to="/" className="link"  >All venue</NavLink></li>
          </ul>*/}

          <ul style={{paddingTop:'20px',borderTop:'1px solid #EDEDED'}}> <span>Learning Resources</span>
                <li><NavLink exact to="/" className="link"  >Live Sessions</NavLink></li>
                <li><NavLink exact to="/" className="link"  >Recorded Tutorials</NavLink></li>
          </ul>
  </div>
  </LeftPanelWrapper>
);}

export default LeftPanel;
