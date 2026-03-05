import styled from 'styled-components';

export const CheckoutContainerStyle = styled.div`
  .checkout-content{
    margin-top:50px;
    margin-bottom:150px;
      .checkout-billing-details {
        border: 1px solid #EDEDED;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 30px 20px;
        margin-bottom: 20px;
      }
      .checkout-billing-details-title{
        display: flex;
        justify-content: space-between;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #041016;
        border-bottom: 1px solid #EDEDED;
        padding-bottom: 10px;
        margin-bottom: 30px;
          .checkout-billing-details-editBtn {
            font-family: Lato;
            font-style: normal;
            font-weight: 500;
            cursor: pointer;
            font-size: 16px;
            line-height: 19px;
            display: flex;
            align-items: center;
            letter-spacing: 0.02em;
            color: #2D9CDB;
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
        position: relative;
      }
      .cartPage-summary-course-head{
        font-size: 14px;
        padding: 12px 20px;
        width: 100%;
        text-transform: uppercase;
        border-bottom: 1px solid #dedede;
      }
      .cartPage-summary-course{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #c4c8c4;
        width: 100%;
        
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
        .checkout-total{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          padding: 10px 20px 10px 20px;
          font-size: 16px;
          line-height: 19px;
          color: #2D9CDB;
        }
        .checkout-totalDisc{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 13px;
          line-height: 18px;
          color: #303030;
          text-align: center;
          display: flex;
          justify-content: center;
        }

      }
      .cartPage-summary-courseRow {
        display: flex;
        justify-content: space-between;
        padding: 8px 0;
      }
      input, select{
        padding: 12px 15px;
        border: 1px solid #EDEDED;
        border-radius: 5px;
        width:100%;
        height:40px;
      }
      .checkout-billing-details-btn-container {
        text-align: right;
      }
      .checkout-billing-details-footer-btn {
        width: 196px;
        height: 40px;
        background: #2D9CDB;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        margin-left: auto;
        line-height: 40px;
        margin-top: 30px;
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
      }

    .billing-half-width {
      margin-bottom: 22px;
       b{
        margin-right: 29px;
        width: 70px;
        display: inline-block;
      }
    }
    
    .payment-title{
      margin-top: 30px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #303030;
    }

    .payment-method-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
      
  }
`
