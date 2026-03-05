import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const AccordionContainerStyle = styled.div`
  padding:20px 0;
  .accordion-head{
    display: flex;
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .accordion-title{
      display: flex;
      h4{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        margin:0;
        color: #041016;

      }
      span{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        margin-left:20px;
        color: #4F4F4F;
      }
    }
    .accordion-summary{
      display:none;
      ${mediaQueries.md}{
        display:flex;
      }
      .accordion-expand-all{
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #2D9CDB;
      }
    }
  }
  .MuiAccordion-root{
    margin:0 !important;
    margin-bottom: 5px !important;
    box-shadow: none;
  }
  .MuiAccordionSummary-root {
    position: relative;
    padding: 10px 0;
    background: #F5F5F5;
    border: 1px solid #F5F5F5;
    box-sizing: border-box;
    .MuiAccordionSummary-content {
      margin: 0;
      padding-left: 40px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
      &.Mui-expanded{
        margin-top:2px;
      }
      .subtitle{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.02em;
        margin-top: 10px;
        color: #303030;
      }

    }
    .MuiButtonBase-root {
      position: absolute;
      left: 0;
      top: 2px;
      font-size: 16px;
      color: #42a6df;
    }
   
  }
  .MuiCollapse-root{
    border: 1px solid #dedede;
    margin: 3px 0px !important;
    .MuiAccordionDetails-root{
      padding:0px !important;
      .MuiTypography-root{
        margin:0;
        padding: 10px 20px;
        color:#303030;
        border-bottom: 1px solid #dedede;
        svg{
          margin-right:10px;
        }
        &:last-chid{
          border-bottom: 0px solid #dedede;
        }
      }
      
    }
  }
`