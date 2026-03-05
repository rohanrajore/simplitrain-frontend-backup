import React from 'react';
import "./listPanel.css";
import {NavLink} from "react-router-dom";

const ListPanel = props => (
  <div className="listPanel-container">
        <NavLink className="link-listPanel" to="/policies/terms-of-use"
              activeStyle={{background:"#2d9cdb",color:"white"}}>Terms of Use</NavLink>

            <NavLink className="link-listPanel" to="/policies/privacy-and-cookie-policy"
              activeStyle={{background:"#2d9cdb",color:"white"}}>Privacy and Cookie Policy</NavLink>
  </div>
);

export default ListPanel;
