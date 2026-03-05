import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const CartCourseContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 5px;
    padding: 0px;
    margin-bottom:15px;
    flex-direction: column;
    ${mediaQueries.md}{
      padding: 14px;
    }
    .cartCourse-content{
      display: flex;
      flex-direction: column;
      width: 100%;
      ${mediaQueries.md}{
        flex-direction: row;
      }
    }
    .cartCourse-image{
      width:100%;
      height: 120px;
      background-size: cover !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
      ${mediaQueries.md}{
        width: 120px;
        height: 80px;
      }
    }
    .cartCourse-top, .cartCourse-bottom{
      display: flex;
      width: 100%;
      justify-content: space-between;
      flex-direction: column;
      padding:0px;
      ${mediaQueries.md}{
        flex-direction: row;
        padding:0px 0px;
      }
    }
    .cartCourse-bottom{
      flex-direction: column-reverse;
      align-items: flex-end;
      margin-top:10px;
      padding-left: 0px;
      ${mediaQueries.md}{
        margin-top:0px;
        padding-left: 110px;
        flex-direction: row;
        align-items: center;
      }

    }
    .cartCourse-first{
      width: 100%;
      padding: 10px;
      padding-top:10px;
      ${mediaQueries.md}{
        padding-top:0px;
      }
      .cartCourse-title{
        margin-bottom: 8px;
        font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #041016;
      }
      .cartCourse-author{
        margin-bottom: 8px;
        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #828282;
        border-radius: 5px;
      }
      .cartCourse-date{
        margin-bottom: 0px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #4F4F4F;
        img{
          position: relative;
          margin-right:10px;
          top:-2px;
        }
      }
    }
  .cartCourse-second{
    padding: 10px;
    white-space: nowrap;
    ${mediaQueries.md}{
      width: 100%;
      padding: 0px;
      max-width: 180px;
    }
    .cartCourse-price{
      margin-bottom: 5px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      white-space: nowrap;
      font-size: 20px;
      line-height: 24px;
      color: #EB5757;
    }
    .cartCourse-textThrough{
      text-decoration: line-through;
    }
    .cartCourse-off{
      margin-bottom:0px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #828282;
      letter-spacing: 0.02em;
    }
      .cartCourseRemove {
        background: transparent !important;
        color: #2D9CDB !important;
      }
    }
  }

  .cartCourse-actions {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: pointer;
    margin-top:10px;
    padding:10px;
    ${mediaQueries.md}{
      margin-top:0px;
      padding:0px 10px;
    }
    .cartCourse-save{
      color: #2D9CDB;
      font-size: 14px;
      border-right: 1px solid #ccc;
      text-align: center;
      cursor: pointer;
      font-weight: 500;
      padding:0px 5px;
      &:last-child{
        padding-right:0px;
        border-right:none;
      }
      &:first-child{
        padding-left:0px;
      }
    }
  }
  .cartPage-summary-coupon {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    padding: 10px;
    ${mediaQueries.md}{
      width: 100%;
      max-width:180px;
      padding: 0px;
    }
    .cartPage-summary-courseRow{
      font-size: 12px;
      font-weight: 600;
      margin: 0;
    }
    .cartPage-remove-coupon{
      width: 18px;
      cursor: pointer;
      color: #eb5757;
      margin-left: 8px;
    }
    .cartPage-summary-coupon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Lato;
      font-size: 12px;
      input {
        width: 13px;
        height: 13px;
        &:hover{
          cursor: pointer;
        }
      }
      label{
        margin-bottom: 0;
        margin-left: 5px;
        b{
          color: black;
        }
      }
    }
  }
  .cartPage-summary-coupon-input {
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    box-sizing: border-box;
    border-radius: 5px 0px 0px 5px;
    height: 38px;
    font-size: 14px;
    width: 160px;
    padding: 10px;
    box-sizing: border-box;
  }
  .cartPage-summary-coupon-apply {
    background: #2D9CDB;
    border-radius: 0px 4px 4px 0px;
    height: 38px;
    line-height: 38px;
    white-space: nowrap;
    color: #fff;
    font-size: 13px;
    cursor: pointer;
    padding: 0 10px;
    text-align: center;
  }
`
