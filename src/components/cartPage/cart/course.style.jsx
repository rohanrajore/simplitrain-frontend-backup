import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const CartContainerStyle = styled.div`
  .cartPageTopMargin{
    margin-top:60px;
  }
  .cartPage-current-courses-title{
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 43px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #041016;
    .cartIcon{
      margin-left:25px;
      width:20px !important;
    }
  }

  .saveLater{
    margin-bottom: 20px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #041016;
  }

  .cartPage-current-courses-content{
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #4F4F4F;
  }

  .cartPage-courses{
    height: 100%;
    color: #627373;
  }

  .cartPage-summary{
    height: 350px;
    margin-top: 40px;
    ${mediaQueries.sm}{
      margin-left: -15px;
    }
  }
  .cartPage-summary-details{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items:center;
    flex-direction: column;
    height: auto;
    color: #627373;
    background: #f3f3f3;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 0px;
    position: relative;
  }
  .cartPage-summary-course{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #c4c8c4;
    width: 100%;
    .cartPage-summary-course-head{
      font-size: 14px;
      padding: 12px 20px;
      text-transform: uppercase;
      border-bottom: 1px solid #dedede;
    }
    .courseRow-item{
      font-family: Lato;
      font-style: normal;
      padding: 5px 20px 10px 20px;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #303030;
      &.green{
        span{
          color: #00d81b;
        }

      }
    }
    .courseRow-subtotal{
      font-family: Lato;
      font-style: normal;
      padding: 10px 20px 10px 20px;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #303030;
      border-top: 1px solid #dedede;
    }
    .courseRow-gst{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      padding: 10px 20px 10px 20px;
      font-size: 14px;
      line-height: 17px;
      color: #041016;
    }
    .checkout-totalDisc{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      padding: 10px 20px 10px 20px;
      font-size: 16px;
      line-height: 19px;
      color: #2D9CDB;
    }
  }
  .cartPage-summary-courseRow{
    display: flex;
    justify-content: space-between;
    color: black;
    font-weight: bold;
  }

  .cartPage-summary-button{
    width: 100%;
    height: 45px;
    color:#fff;
    margin: 16px 0;
    text-align:center;
    line-height:45px;
    font-size: 18px;
    background: #EB5757;
    border-radius: 5px;
  }
  
`
