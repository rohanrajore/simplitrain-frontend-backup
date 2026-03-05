import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const ViewBookingStyle = styled.div`  

    .viewBookings-container{
      margin-top: 70px;
      margin-bottom: 150px;
      min-height: 600px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .viewBookings-content{
      max-width: 440px;
      padding: 20px;
      background: #FBFBFB;
      border: 1px solid rgba(79, 79, 79, 0.05);
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
      border-radius: 4px;
      ${mediaQueries.md}{
        padding: 37px;
      }
    }
    .titleText{
      margin-bottom:5px;
      text-align:center;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      letter-spacing: 0.02em;
      color: #041016;
    }
    .subText{
      margin-bottom:60px;
      text-align:center;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
    }
    .viewBookings-radioBtns{
      display: flex;
      margin-bottom:30px;
      div{
        margin-right:40px;
      }
      input{
        width: 20px;
        margin-right: 5px;
      }
      label{
        margin-bottom: 0;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #4F4F4F;
      }
    }
    .viewBookings-radioBtns div:hover{
      cursor: pointer;
    }
    .viewBookings-radioBtns input:hover{
      cursor: pointer;
    }
    .viewBookings-radioBtns input:focus{
      outline: none;
    }
    .viewBookings-radioBtns label:hover{
      cursor: pointer;
    }
    .viewBookings-email{
      margin-bottom: 50px;
      width: 100%;
      input{
        border: none;
        width: 100%;
        padding: 8px 0;
        background: transparent;
        border-bottom: 1px solid #cccccc;
        &:focus{
          outline:none
        }
      }
    }
    .viewBookingsAbsoluteItem {
      font-size: 13px;
      position: absolute;
      margin-top: 5px;
      color: #f82e2e;
  }
  .viewBookings-phone {
      margin-bottom: 50px;
      .phoneBooking-input{
        display: flex;
        input{
          border: none;
          width: 100%;
          padding: 8px 0;
          background: transparent;
          border-bottom: 1px solid #cccccc;
          &:focus{
            outline:none
          }
        }
        select{
          border: none;
          margin-right: 14px;
          padding: 8px 0;
          background: transparent;
          border-bottom: 1px solid #cccccc;
          &:focus{
            outline:none
          }
        }
      }
  }
  .viewBookings-btn {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 30px;
    background: rgba(45, 156, 219);
    border-radius: 4px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
}

.viewBookings-info{
  margin-top: 47px;
  background: #FAF6D8;
  border: 1px solid rgba(79, 79, 79, 0.05);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding:10px 10px 45px 10px;
  div{
    margin-bottom: 10px;
  }
}
.react-code-input{
  margin-bottom: 30px;
  input{
    border: none !important;
    background: transparent;
    border-bottom: 1px solid #4F4F4F !important;
    border-radius: 0 !important;
    width: 50px !important;
    text-align: center;
    &:focus{
      outline:none !important;
    }
  }
}

`

export const PageTitleRow = styled.div`
  .pageTitle{
    padding:26px 0;
    margin-bottom: 30px;
    background:#2D9CDB;
      h4{
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;
        color: #FFFFFF;
      }
  }
`

