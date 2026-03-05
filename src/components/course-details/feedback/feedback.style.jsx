import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const FeedbackContainer = styled.div`
  padding:0;
  width: 100%;
  margin-bottom:20px;
  ${mediaQueries.md}{
    width: 100%;
  }
  .feedback-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #041016;
    margin-bottom:20px;
  }
  .feedback-content{
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    ${mediaQueries.md}{
      flex-direction: row;
      justify-content: start;
    }
    .feedback-value{
      width: 100%;
      padding: 0;
      display: flex;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .rating-point{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 50px;
        line-height: 65px;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom:11px;
      }
      .star-point{
        margin-bottom:11px;
        color: #FFB30F;
        svg{
          margin:0px 2px;
        }
      }
      .point-text{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 16px;
        display: flex;
        margin-bottom:10px;
        align-items: center;
        letter-spacing: 0.02em;
        color: #4F4F4F;

      }
    }
    .feedback-percent-container{
      width: 100%;
      ${mediaQueries.md}{
        width: 80%;
      }

      .feedback-percent{
        display: flex;
        justify-content: space-between;
        ${mediaQueries.md}{
          display: -webkit-box;
          
        }
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 6px;
      }
      .feedback-bar{
        width:100%;
        height: 10px;
        background: #f2f2f2;
        border-radius: 5px;
      }
      .feedback-bar-progress{
        height: 100%;
        background: grey;
        border-radius: 5px;
        &.success{
          background:#2DB417;
        }
        &.warning{
          background:#FFD987;
        }
        &.danger{
          background:#EB5757;
        }
      }
      .feedback-rating{
        margin-left:10px;
        display: flex;
        span{
          padding:0px 5px;
        }
        svg{
          color: #FFB30F;
          margin: 0px 1px;
        }
      }
    }
  }
`;
