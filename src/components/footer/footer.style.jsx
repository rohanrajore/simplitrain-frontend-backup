import styled from 'styled-components';
import { mediaQueries, themeColors } from '../../theme';

export const FooterContainer = styled.div`
  width:100%;
  padding-top:100px;
  position: relative; 
`;

export const FooterTop = styled.div`
  width:100%;
  position: relative;  
  padding: 30px 50px;

  @media (max-width: 1200px) {
    padding: 0px 30px;
  }
  @media (max-width: 991px) {
    padding: 0px 15px;
    padding-bottom:30px;
  }
  background: #d5ebf880;  
  .footer-logo{
    width: 100%;
    max-width: 130px;
    margin: auto;
    margin: 20px 0 10px 0 !important;
    ${mediaQueries.sm}{
      margin: 32px 0 !important;
      max-width: 200px;
    }
  }
`;

export const LinksList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${mediaQueries.sm}{
    flex-direction: column;
  }
  .pl-0{
    padding-left:0;
  }
  & a:last-child {
      border-width: 0px;
  }
  h2{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    width:100%
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #303030;
    margin: 15px 0 10px 0 !important;
    ${mediaQueries.sm}{
      font-size: 18px;
      margin: 32px 0 !important;
    }
  }
  a{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    margin-bottom: 0px;
    line-height: 19px;
    padding:0px 10px;
    color: #4F4F4F;
    border-right: 1px solid #4F4F4F;
    ${mediaQueries.sm}{
      padding:0px 0px;
      font-size: 16px;
      margin-bottom: 12px;
      border-right: 0px solid #4F4F4F;
    }
  }
`;


export const FooterEnd = styled.div`
  background: #2D9CDB;
  padding: 0px 50px;
  @media (max-width: 1200px) {
    padding: 0px 30px;
  }
  @media (max-width: 991px) {
    padding: 0px 15px;
  }
  span{
    color:#ffffff;
    margin-right:10px;
    font-size: 12px;
    ${mediaQueries.sm}{
      margin-right:20px;
    }
  }
  .footer-right{
    margin:10px 0;
    text-align:center;
    a{
      color:#ffffff;
      margin-right:10px;
      text-decoration: underline;
      ${mediaQueries.sm}{
        margin-right:20px;
      }
      font-size: 12px;
    }
    ${mediaQueries.sm}{
      text-align:right;
      margin:12px 0;
    }
  }
  .footer-left{
    margin:10px 0 0 0;
    text-align:center;
    ${mediaQueries.sm}{
      text-align:left;
      margin:12px 0;
    }
  }
`;


