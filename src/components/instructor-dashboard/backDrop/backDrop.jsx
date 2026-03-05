import React from 'react';
import "./backDrop.css"

const Backdrop = props =>(
    <div className="backdrop" onClick={props.handleSideDrawer}/>


);

export default Backdrop;
