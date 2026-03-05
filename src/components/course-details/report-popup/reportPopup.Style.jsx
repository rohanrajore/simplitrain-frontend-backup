import styled from 'styled-components';

export const ReportPopupContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  .report-popup-backdrop{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: 0;
  }
  .report-popup-container{
    z-index: 1;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    max-width: 600px;
    width: 100%;
    button{
      background: transparent;
      border: 1px solid #dedede;
      padding: 6px;
      width: 30px;
      height: 30px;
    }
  }
  .report-popup-title{
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 20px;
    align-items: left;
    color: #041016;
  }
  .report-popup-subtitle{
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
    align-items: left;
    color: #041016;
  }
  .report-popup-input{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    label{
      width: 160px;
      margin-top: 6px;
    }
    select, textarea{
      width: 100%;
    }
  }
  .report-popup-btns{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button{
      padding: 8px 16px;
      background:#2D9CDB;
      border: 1px solid #2D9CDB;
      margin: 0px 10px;
      border-radius: 5px;
      width: 100px;
      color: #fff;
      line-height: 14px;
      &.report-popup-btn{
        background:#EB5757;
        border: 1px solid #EB5757;
      }
    }
  }
`;