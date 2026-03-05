import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const InstructorContainer = styled.div`
  padding:20px 0;
  .instructor-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #041016;
    margin-bottom:20px;

  }
  .instructor-content{
    .instructor-details{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #FFFFFF;
      border: 1px solid #F2F2F2;
      box-sizing: border-box;
      padding: 20px;
      .instructor-img{
        width: 100px;
        height: 100px;
        border-radius: 100%;
        margin-bottom: 10px;
      }
      .instructor-values{
        .instructor-val{
          font-family: Lato;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          color: #4F4F4F;
          margin-bottom: 10px;
          svg{
            margin-right:10px;
            color:#2D9CDB;
          }
        } 
      }
      .instructor-socialNetwork{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        a{
          font-size: 24px;
          margin: 5px;
        }
      }
    }
    .instructor-description{
      background: #F5F5F5;
      padding: 16px;
      margin:10px 16px;
      ${mediaQueries.md}{
        margin:0;
      }
      .instructor-name{
        .info-link{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          color: #2D9CDB;
        }
      }
      .instructor-role{
        margin-bottom: 20px;
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #000000;
      }
      .instructor-text-info{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        color: #303003;
      }
    }
    
  }
`;
