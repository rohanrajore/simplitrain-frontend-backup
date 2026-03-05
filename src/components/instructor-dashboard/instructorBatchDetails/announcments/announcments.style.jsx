import styled from 'styled-components';

export const AnnouncementStyleContainer = styled.div`
.instructorBatch-announcmentsList{
  max-width: 994px;
  border-radius: 4px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  margin-bottom: 20px !important;
}
.instructorBatch-announcmentsList > div:first-child{
  background: #F0F5FF;
  border-bottom: 1px solid #E0E0E0;
  padding-left: 20px;
  padding-right: 37px;
  height: 45px;
  display: flex;
  align-items: center;
}
.instructorBatch-announcmentsList > div:last-child{
  overflow-y: scroll;
  max-height: 351px;
}
.instructorBatch-announcmentsItem{
  max-width: 91%;
  font-size: 14px;
  line-height: 17px;
  color: #041016;
  border-bottom: 1px solid #E2E2E2;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 28px;
}
.instructorBatch-announcmentsItem > div:first-child{
  font-weight: bold;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
}
.instructorBatch-announcmentsItem::before{
    content:"\A";
    width:6px;
    height:6px;
    border-radius:50%;
    background: #2D9CDB;
    display: inline-block;
    margin-right: 2px;
    position: absolute;
    top: 6px;
    left: -14px;
}
.instructorBatch-announcmentsItem > div:nth-child(2){
 margin-bottom: 8px;
}
.instructorBatch-announcmentsItem > div:last-child{
  font-style: italic;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #626262;
  margin-bottom: 15px;
}
.instructorBatch-newAnnouncement{
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 20px !important;
  display: flex;
  flex-direction: column;
}
.instructorBatch-newItem{
  margin-bottom: 15px;
}
.instructorBatch-newItem > label{
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 8px;
}
.instructorBatch-newItem > textarea{
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 4px;
  height: 77px;
  resize: none;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #041016;
  padding: 10px;
}
.instructorBatch-newItem > textarea[isTitle=yes]{
  height: 47px;
}
.instructorBatch-newItem > textarea:focus{
  outline: 1px solid #81C4E9;
}

.instructorBatch-details{
  .tabTitle{
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
    border-top: 1px solid #EDEDED;
    padding: 15px 0px 0px 0px;
  }
}
.instructorBatch-details-close{
  color: #EB5757;
  font-size: 17px;
}
.instructorBatch-details-head{
  font-weight: 600;
  font-size: 16px;
}

`

