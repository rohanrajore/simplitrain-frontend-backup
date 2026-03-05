import React from 'react';
import ErrorComponent from "../errComponent/errorComponent.jsx";
import {InteroVideo} from "../../profile/introductoryVideo/introductoryVideo.style";

const urlValidationRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;

const IntroductoryVideo = props => (
  <InteroVideo>
  <div className="userProfile-section-container" id="profileIntroductory">
      <div className="userProfile-section-title">Introductory Video</div>

      <div className="form-group">
            <label htmlFor="pf-introductory" className="required">
              Youtube URL
            </label>
            <input
              type="text"
              className="form-control"
              id="pf-introductory"
              value={props.introVideoUrl}
              name="introVideoUrl"
              onChange={props.handleField}
            />
          {props.introVideoUrl.length>0 &&
             !urlValidationRegex.test(props.introVideoUrl) &&
             <ErrorComponent title="This field should contain valid URL"/>}
      </div>

  </div>
  </InteroVideo>
);

export default IntroductoryVideo;
