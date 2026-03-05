import React from 'react';
//import "./sideDrawer.css";
import {NavLink} from 'react-router-dom';
import {SideDrawerWrapper} from "../sideDrawer/sideDrawer.style";


const SideDrawer = props =>(
<SideDrawerWrapper>
  <div className="sideDrawer">
          <ul> <span>My Courses</span>
                <li><NavLink exact to="/instructor-dashboard/courses" className="link" activeClassName="link-active" onClick={props.handleSideDrawer} >Courses</NavLink></li>
                <li><NavLink to="/instructor-dashboard/scheduled" className="link" activeClassName="link-active" onClick={props.handleSideDrawer}>Scheduled Courses</NavLink></li>
          </ul>

          <ul> <span>Communication</span>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >Messages</NavLink></li>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >Reviews</NavLink></li>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >Q&A</NavLink></li>
          </ul>

          <ul> <span>Manage Venues</span>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >All venue</NavLink></li>
          </ul>

          <ul style={{borderTop:"1px solid #818487"}}> <span>Learning Resources</span>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >Live Sessions</NavLink></li>
                <li><NavLink exact to="/" className="link" onClick={props.handleSideDrawer} >Recorded Tutorials</NavLink></li>
          </ul>
  </div>
  </SideDrawerWrapper>
);

export default SideDrawer;
