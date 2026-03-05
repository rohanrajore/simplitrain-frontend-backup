import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const LeftFiltersContainer = styled.div`
  width:100%;
  position: relative;
  margin-bottom:16px;
  display:none;
  ${mediaQueries.md}{
    display:block;
  }
  .accordion-head{
    & > div{
      margin:0 !important;
    }
  }
  .accordion-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.02em;
    color: #303030;
  }
  .typo-start-date{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 17px;
    color: #000000;
    margin-bottom: 8px;
  }
`

export const RangeSliderCard = styled.div`
  width:100% !important;
  .MuiSlider-root{
    & > span:last-child{
      margin-left: -13px !important;
      color:#fff !important;
    }
  }
  .MuiSlider-rail{
    height:14px !important;
    background:#DDDDDD !important;
    border-radius: 20px !important;
  }
  .MuiSlider-track{
    height:14px !important;
    color: #2D9CDB !important;
    border-radius: 20px !important;
  }
  .MuiSlider-valueLabel{
    color: #2D9CDB !important;
  }
  .MuiSlider-thumb{
    width: 10px !important;
    height: 10px !important;
    margin-top: 2px !important;
    color:#fff !important;
    margin-left: 2px !important;
    .PrivateValueLabel-offset-3{
      background:#2D9CDB !important;
      border-radius: 4px !important;
      top:-20px !important;
      & > span{
        background: transparent !important;
        width:auto !important;
        height:auto !important;
        padding: 3px 8px !important;
      }
    }
  }
`
