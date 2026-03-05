import styled from 'styled-components';

export const ScheduleCourseStyle = styled.div`
.schedule-title{
  border-bottom: 1px solid #EDEDED;
  color: #041016;
  font-weight: 800;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-bottom: 10px;
  width: 100%;
}
.scheduleMainContainer{
  padding:30px 20px;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
}
.schedule-timeContainer{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 10px;
}
.schedule-timeContent{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.schedule-timeLeft{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}
.schedule-timeRight{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
}
.schedule-timeSelect{
  width: auto;
}
.ignoreWeekend{
  margin-top: 35px;
  margin-bottom: 35px;
}
.disableWeekend{
  background: none !important;
  color: rgb(209, 0, 0);
}
.calendar-everyday-container{
  display: flex;
}
.everyday-container{
  width: 100%;
  position: relative;
}

.everydayTitle:hover{
  cursor: pointer;
}
.disable-calendar{
  pointer-events:none !important;
}
.datepicker-no-focus{
  border: 1px solid grey;
  border-radius: 5px;
}

.themeColor{
  color:#2D9CDB;
}
.MuiPaper-root{
  width:70%;
  @media (max-width: 480px) {
    width:100%;
  }
}

.react-datepicker-wrapper{
  width:100%;
  margin-bottom: 20px;
}
.form-control{
  width:100%;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 4px;
}

.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
  padding: 7.4px;
  height: 40px;
}

.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input {
  padding: 5px 4px;
}

@media (max-width:1150px) {
  .calendar-everyday-container{flex-direction: column;}
  .everyday-container{width: 100%; margin-top: 30px;}
}
@media (max-width:1030px) {
  .schedule-timeContent{flex-direction: column;}
  .schedule-timeLeft{width: 100%; margin-bottom: 40px;}
  .schedule-timeRight{width: 100%}
  .schedule-dateContainer{margin-bottom: 25px;}
}

`

