import React from 'react';
import {Link} from "react-scroll";
import {LeftPanelContainer} from "../leftPanel/leftPanel.style";

const LeftPanel = props => (
<LeftPanelContainer>
  <div className="userProfile-leftPanel">
      <ul>
          <span>Settings</span>

          <li>
              <Link to="settingsAccount"
                       className="link" spy={true} smooth={true}
                       duration={250} offset={-200}
                       activeClass="profile-link-active">Account</Link>
          </li>
{/*
          <li>
              <Link to="settingsCalSync"
                       className="link" spy={true} smooth={true}
                       duration={250} offset={-250}
                       activeClass="profile-link-active">Calendar Sync</Link>
          </li> */}
      </ul>
  </div>
  </LeftPanelContainer>
);

export default LeftPanel;
