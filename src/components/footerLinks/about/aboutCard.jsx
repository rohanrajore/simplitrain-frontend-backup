import React from 'react';

const AboutCard = props => (
  <div className="about-cardContent" flexPosition={props.imagePosition}>
      <div className="about-cardInfo">
          <div>{props.title}</div>
          <p>To enable learners everywhere search, select and register for learning sessions offered by trainers in myriad subjects anywhere in the world both in online and offline modes</p>
      </div>

      <div className="about-cardImg" imagePosition={props.imagePosition}>
        <div imagePosition={props.imagePosition}></div>
      </div>
  </div>
);

export default AboutCard;
