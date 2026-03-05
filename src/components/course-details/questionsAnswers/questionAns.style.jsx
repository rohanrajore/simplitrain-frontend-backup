import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const InstructorContainer = styled.div`
  padding: 20px 0;
  .instructor-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #041016;
  }
  .qa-title{
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #041016;
  }
  .trending-noCourses{
    margin-left: 0px;
    text-align: left;
    color: #a1a1a1;
    padding: 20px;
    font-style: italic;
    letter-spacing: 1px;
  }
  .qa-ask-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .qa-ask-search{
      width: 100%;
      margin-right: 10px;
      margin-bottom:20px;
      display: flex;
      input{
        background: #FFFFFF;
        border: 1px solid #BDBDBD;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 5px;
        height: 40px;
        width: 100%;
        &:focus{
          outline: none;
        }
      }
    }
    .qa-ask-submitContainer{
      display: flex;
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      div {
        width: 100%;
        button{
          margin-top:20px;
          width: 100%;
        }
      }
      div :first-child{
        margin-right: 0px;
        ${mediaQueries.md}{
          margin-right: 20px;
        }
      }
      p{
        margin-bottom: 4px;
      }
      ${mediaQueries.md}{
        div {
          width: 100%;
          button{
            margin-top:20px;
            width: 200px;
          }
        }
      }
    }
    .qa-ask-submit{
      background: #2D9CDB;
      color: #fff;
      font-size: 16px;
      text-align: center;
      padding: 6px 20px;
      border: 0;
      border-radius: 4px;
      border: 1px solid #2D9CDB;
      box-sizing: border-box;
      border-radius: 5px;
      margin-bottom: 20px;
      height: 40px;
      margin-right: 20px;
    }
    .qa-validation-err{
      position: absolute;
      bottom: 0;
      color: #f00;
      font-size: 12px;
      margin: 0px 0;
    }
  }
  .questAnswer-container{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    ${mediaQueries.md}{
      flex-direction: row;
    }
    .questAnswer-rating-disabled{
      pointer-events: none;
      opacity: 0.5;
    }
    .questAnswer-rating{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      width:100%;
      line-height: 14px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #4F4F4F;
      div, svg{
        margin-bottom:8px;
      }
      path{
        pointer-events: none;
      }
      svg:hover{
        cursor:pointer;
      }
    }
    .questAnswer-content{
      width: 100%;
      border-left: 1px solid #DDDDDD;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .questAnswer-question{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        margin-bottom: 10px;
        flex-direction: column;
        ${mediaQueries.md}{
          flex-direction: row;
        }
        .questAnswer-title{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          min-width: 100px;
          color: #303030;
        }
        .questAnswer-question-title{
          width:100%;
          text-align:left;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          align-items: center;
          color: #2D9CDB;
        }
        .questAnswer-answer{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          margin-bottom: 10px;
          align-items: center;
          color: #333333;

        }
        .questAnswer-date{
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          display: flex;
          align-items: center;

          color: #4F4F4F;
        }
      }
    }
  }
  .qa-seeMore{
    background: #e0ebf1;
    color:#439cca;
    font-weight: bold;
    min-height: 40px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    font-size: 15px;
  }
  .qa-seeMore:hover{
    cursor: pointer;
  }
`

export const QuestAnswerStyle = styled.div`
  .questAnswer-container{
    margin-bottom:50px;
    .row{
      flex-direction: row;
      & > div{
        width:100%;
      }
      ${mediaQueries.md}{
        flex-direction: row;
        & > div{
          width:auto;
        }
      }

    }
    .questAnswer-rating{
      svg{
        margin-bottom:7px;
      }
      font-style: normal;
      font-weight: bold;
      font-size: 12px;
      line-height: 14px;
      text-align: center;
      color: #4F4F4F;
      ${mediaQueries.md}{
        width:80px;
      }
    }
    .questionBox{
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: #303030;
    }
    .answerBox{
      @media (max-width: 480px) {
        margin-top:15px;
      }
      .questAnswer-title{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #303030;
      }
      .questAnswer-answer{
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: #2D9CDB;
      }
      .questAnswer-date{
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: #4F4F4F;
      }
    }
  }
`
