import React from 'react';

const InstDashCredsItem = props => (
  <div className="instCourseDetails-credsItem">
    <div>{props.name}</div>
    <span>: </span>
    <div style={{fontWeight:props.isBold?"700":"500"}}>
        {props.text}
    </div>
  </div>
);

export default InstDashCredsItem;
