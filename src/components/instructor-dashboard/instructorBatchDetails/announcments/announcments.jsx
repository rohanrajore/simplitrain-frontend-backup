import React from 'react';
//import "./announcments.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Announcement } from '@material-ui/icons';
import { AnnouncementStyleContainer } from '../announcments/announcments.style';

const InstructorAnnouncments = props => (
  <AnnouncementStyleContainer>
  <div className="instructorBatch-details">
      <div className="tabTitle">
          <div className="instructorBatch-details-head">Announcements</div>
          <FontAwesomeIcon className="instructorBatch-details-close"
                           icon={faTimes}
                           onClick={()=>props.handleActiveTab(0)}/>
      </div>

      <div className="instructorBatch-announcmentsList">
          <div>Announcements List</div>
          <div>
            {props.batchDetails.map(announcement=>(
              <div className="instructorBatch-announcmentsItem">
                  <div>{announcement.title}</div>
                  <div>{announcement.description}</div>
                  <div>{moment(announcement.dateCreated.includes("[Etc/UTC]")?
                              announcement.dateCreated.replace("[Etc/UTC]",""):
                              announcement.dateCreated).format('llll')}
                  </div>
              </div>
            ))}
          </div>
      </div>

      <div className="instructorBatch-newAnnouncement">Create New Announcement</div>
      <div className="instructorBatch-newItem">
          <label>Title</label>
          <textarea isTitle="yes" placeholder="Start typing here"/>
      </div>
      <div className="instructorBatch-newItem">
          <label>Description</label>
          <textarea placeholder="Start typing here"/>
      </div>
  </div>
  </AnnouncementStyleContainer>
);

export default InstructorAnnouncments;
