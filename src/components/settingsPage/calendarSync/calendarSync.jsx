import React from 'react';
import {CalenderContainer} from "../calendarSync/calendarSync.style";

const CalendarSync = props => (
<CalenderContainer>
  <div className="userProfile-section-container" id="settingsCalSync">
        <div className="userProfile-section-title">Calendar Sync</div>

          <div className="settings-account-section" style={{borderBottom:"none"}}>
                <p>Automatically sync all the deadlines and other related
                    items from all active courses to your calendar.</p>

                <div className="settings-account-btnContainer">
                      <div className="settings-account-btn">Google Calendar</div>
                      <div className="settings-account-btn">Apple Calendar</div>
                      <div className="settings-account-btn">Other Calendar</div>
                </div>
          </div>
  </div>
  <hr/>
  </CalenderContainer>
);

export default CalendarSync;
