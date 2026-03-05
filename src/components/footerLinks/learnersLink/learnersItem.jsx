import React from 'react';

const LearnersItem = props => (
  <div className="learnersLink-learnersItem">
     <img src={props.img}/>
     <div>
       I am
       <p>{props.text}</p>
     </div>
  </div>
);

export default LearnersItem;
