import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const ReviewContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #EDEDED;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 30px 0;
  .review-img{
    display: flex;
    width: 15%;
    img{
      width: 34px;
      height: 34px;
      border-radius: 100%;
      ${mediaQueries.md}{
        width: 75px;
        height: 75px;
      }
    }
  }
  .review-name-time{
    flex-direction: column;
    display: flex;
    width: 100%;
    ${mediaQueries.md}{
      width: 30%;
    }
    h4{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom:10px;
      color: #303030;
    }
    p{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;

      color: #4F4F4F;
    }
  }
  .review-content{
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    .star-ratings{
      margin-bottom:10px;
      color: #808080;
      & svg:last-child{
        margin-right: 10px;
      }
    }
    .review-description{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      margin-bottom:20px;
      color: #041016;

    }
    .review-report{
      display: flex;
      flex-direction: column;
      width: 100%;
      align-items:flex-start;
      justify-content: space-between;
      .review-thumbs{
        display: flex;
        align-items:center;
        margin-top:10px;
        .likethumb{
          background: #FFFFFF;
          color:#4F4F4F;
          border: 1px solid #4F4F4F;
          box-sizing: border-box;
          border-radius: 4px;
          margin: 0 5px;
          padding:8px 16px;
          &.active{
            background: #2D9CDB;
            border: 1px solid #2D9CDB;
            color:#FFFFFF;
          }
        }
        .dislikethumb{
          background: #FFFFFF;
          color:#4F4F4F;
          border: 1px solid #4F4F4F;
          box-sizing: border-box;
          margin: 0 5px;
          padding:8px 16px;
          border-radius: 4px;
          &.active{
            background: #EB5757;
            border: 1px solid #EB5757;
            color:#FFFFFF;
          }
        }
        .review-total{
          padding:0px 10px;
        }
      }
    }

  }
  .review-report-btn{
    cursor: pointer;
    margin-left: 20px;
    text-decoration: underline;
  }
`;
