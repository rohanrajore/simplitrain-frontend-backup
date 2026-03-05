import styled from 'styled-components';

export const SchedulePopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center !important;
  z-index: 100;
  .calendar-details{
    max-height: 260px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 4px;
    & * {
      width: 100%;
    }
    .days{
      width:100%;
      background:#fff;
      border-bottom: 1px solid #dedede;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: left;
      color: #2D9CDB;
      padding: 10px;
    }
    .day{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 10px;
      .tag{
        background: #F5F5F5;
        border-radius: 4px;
        padding:3px;
        margin: 0px 5px;
      }
      div {
        font-size: 12px;
        line-height: 17px;
        color: #303030;
        span{
          font-weight: bold;
        }
      }
    }
  }
  .schedule-popup-backdrop{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: 0;
  }
  .react-calendar__month-view__weekdays{
    .react-calendar__month-view__weekdays__weekday{
      text-decoration: none;
      abbr[title]{
        text-decoration: none;
      }
    }
  }
  .react-calendar__navigation{
    margin-bottom:0;
    button{
      height:35px;
    }
  }
  
  .schedule-popup-container{
    z-index: 1;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    max-width: 670px;
    display: flex;
    flex-direction: row;
    width: 100%;
    .schedule-popup-dates{
      width: 100% !important;
      max-height: 450px;
      height: 100%;
      overflow: auto;
      display: flex !important;
      flex-wrap: wrap !important;
      padding: 20p !important;
      padding: 10px !important;
      justify-content: space-between;
      .schedule-popup-date{
        padding: 6px 10px !important;
        border: 1px solid #ebebeb !important;
        box-sizing: border-box !important;
        width: 50% !important;
        font-family: Lato;
        font-style: normal;
        font-size: 12px;
        line-height: 17px;
        color: #4F4F4F;
      }
    }
    .schedule-popup-calendar{
      width: 100%;
      padding: 10px;
    }
    .schedule-popup-tile{
      width: 10px !important;
      height: 20px !important;
      font-size: 10px !important;
      padding: 0 !important;
    }
  }
`;