import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const CardContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #F2F2F2;
  box-sizing: border-box;
  margin-bottom: 20px;
  border-radius: 4px;
  padding: 20px;
  .card-price{
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-bottom: 15px;
    .card-price-tags{
      display: flex;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      & > div{

        .main-price{
          font-family: Lato;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          text-decoration: line-through;
          line-height: 22px;
          display: flex;
          align-items: center;
          margin-left: 12px;
          color: #828282;
          svg{
            width: 8px !important;
            text-decoration: line-through;
          }
        }
        :nth-child(1){
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 29px;
          display: flex;
          align-items: center;
          color: #EB5757;
          svg{
            width: 12px;
          }
        }
        :nth-child(2){
          font-family: Lato;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          /* identical to box height */
          text-decoration: line-through;
          display: flex;
          justify-content: flex-end;
          align-items: center;

          color: #828282;
        }
      }
      .heartIcon-red-disabled{
        svg{
          opacity: 0.5 !important;
          &:hover{
            cursor: default !important;
          }
        }
      }
      .heartIcon-red{
        svg{
          color:#2D9CDB;
          font-size: 20px;
          &:hover{
            cursor: pointer;
          }
        }
      }

    }
    .card-price-promotion{
      width:100%;
      text-align:left;
      font-family: Lato;
      font-weight: 500;
      font-size: 13px;
      margin-top:5px;
      line-height: 17px;
      /* identical to box height */

      display: flex;
      align-items: center;

      /* Red */

      color: #202020;
    }
  }
  .card-buttons{
    width: 100%;
    height: 45px;
    margin:8px 0;
    &.card-button1-disabled{
      opacity: 0.5 !important;
      &:hover{
        cursor: default !important;
      }
    }
    &.card-button1{
      background: #2D9CDB;
      border-color: #2D9CDB;
    }
    &.insideCart{
      background: #2D9CDB;
      border-color: #2D9CDB;
    }
    &.insideCart-Link{
      &:hover{
        cursor: pointer;
        background: #2D9CDB;
      }
      background: #2D9CDB;
      border-color: #2D9CDB;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.card-button2-disabled{
      opacity: 0.5 !important;
      &:hover{
        cursor: default !important;
      }
    }
    &.card-button2{
      background: #FFFFFF;
      border: 1px solid #2d2d2d;
      box-sizing: border-box;
      border-radius: 4px;
    }
  }
  .card-coupons{
    width:100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(79, 79, 79, 0.15);
    box-sizing: border-box;
    border-radius: 5px;
    .card-coupon-separate{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      padding: 10px;
      border-bottom: 1px solid #dedede;
      div, path, svg{
        pointer-events: none;
      }
      &:hover{
        cursor:pointer;
      }
      &.active{
        background:#2DB41730;
        svg.radio{
          color: #2DB417;
          margin-right: 10px;
          font-size: 16px;
        }
      }
      & > div{
        width:100%;
        margin-left: 10px;
      }
      strong{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        display: flex;
        align-items: center;
        color:#EB5757;
      }
      .coupon-names{
        margin-bottom:10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        ${mediaQueries.md}{
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          
        }
        h4{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          margin:0;
          align-items: center;
          color: #4F4F4F;
        }
        span{
          font-family: Lato;
          font-size: 16px;
          line-height: 17px
          font-weight: 900;
          display: flex;
          align-items: center;
          color: #2D9CDB;
        }
      }

    }
  }
  .card-become-instructor{

  }
  &.mobile-fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #f5f5f5;
    z-index: 1000000;
    margin: 0;
    padding: 10px 16px;
    border-radius: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 10000000000;
    box-shadow: 0px 0px 10px -5px #2c2c2c;
    .card-price{
      margin: 0;
    }
    .card-buttons{
      width: 120px;
      line-height: 22px !important;
      padding: 5px 10px;
      height: 32px;
      margin: 10px;
    }
    .card-coupons{
      display:none;
    }
  }
`;

export const CardBecomeInstructor = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background: #F5F5F5;
    opacity: 0.9;
    border-radius: 5px;
    img{
      width: 80%;
      margin-bottom: 20px;
    }
    .card-become-text{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      display: flex;
      margin-bottom:20px;
      align-items: center;
      text-align: center;
      color: #4F4F4F;
    }
    .card-buttons.card-button2{
      background: #2D9CDB;
      border: 1px solid #2d2d2d;
      box-sizing: border-box;
      border-radius: 5px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #FFFFFF;
      width: 100%;
      max-width: 180px;
      padding: 10px;
      text-align: center;
    }
`
