import React from 'react';
import './requirements.css';

const Requirements = props => (
  <div className="requirements-container">
    {/*This component will be used 2 times, so first time we pass requirements, second time who this course is for*/}
      <div style={{fontSize:"25px",fontWeight:"bold"}}>{props.name} </div>

        <ul>
          {props.info.map( req=>(
                <li style={{marginBottom:"10px"}} key={req.id}> {req.name} </li>
          ))}
      </ul>
  </div>
);

export default Requirements;
