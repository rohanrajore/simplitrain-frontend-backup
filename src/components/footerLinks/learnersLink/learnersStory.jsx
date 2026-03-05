import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const LearnersStory = props => (
  <div className="learnersLink-storyItem">
      {props.side==="left"?
        <React.Fragment>
          <FontAwesomeIcon icon={faPlay} className="learnersLink-storyIconLeft" rotation={180}/>
          <img src={props.img}/>
          <div>
             <div>“{props.text}”</div>
             <div>Wade Warren, CEO of Weleet</div>
          </div>
        </React.Fragment>
      :
        <React.Fragment>
          <div>
             <div>“{props.text}”</div>
             <div>Wade Warren, CEO of Weleet</div>
          </div>
          <img src={props.img}/>
          <FontAwesomeIcon icon={faPlay} className="learnersLink-storyIconRight"/>
        </React.Fragment>
      }
  </div>
);

export default LearnersStory;
