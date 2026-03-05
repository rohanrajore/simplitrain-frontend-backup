import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const AllFilterPopupContainer = styled.div`
  
  position: revert;
  display: flex;
  justify-content: center;
  align-items: center !important;
  z-index: 100;
  ${mediaQueries.md}{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .allfilter-popup-backdrop{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00000080;
    z-index: 0;
  }
  .all-filters-container{
    display: flex;
    width: 100%;
    height: 100%;
    overflow: hidden;
    max-height: 100% !important;
    border-radius: 0;
    padding: 0px;
    flex-direction: column;
    background: #fff;
    ${mediaQueries.md}{
      max-width: 1024px;
      background: #fff;
      z-index: 1;
      width: 100%;
      height: auto;
      max-height: 600px;
      overflow: auto;
      border-radius: 6px;
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 20px;
    }
    position: relative;
    .all-filters-group{
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      flex-wrap: wrap;
      height: 100%;
      overflow: auto;
      padding: 0px 10px;
      ${mediaQueries.md}{
        height: 100%;
        overflow: auto;
        padding: 0px;
      }
    }
    .all-filters-item{
      width:100%;
      min-width: 165px;
      padding:0px;
      margin:0px;
      box-sizing: border-box;
      background: #FAFAFA;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.04);
      
      ${mediaQueries.md}{
        width:25%;
        background: transparent;
        margin-top:30px;
        box-shadow: none;
        padding:0px 10px;
      }
      .all-filters-item-review{
        padding:5px 15px;
        ${mediaQueries.md}{
          padding:0;
        }
      }
      .all-filters-part-date{
        padding:5px 15px;
        ${mediaQueries.md}{
          padding:0;
        }
      }
      .all-filters-item-title{
        font-family: Lato;
        font-style: normal;
        font-weight: 400;
        margin-bottom: 10px;
        padding:10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.02em;
        color: #303030;
        background: #fff;
        box-shadow: 0px 4px 6px -6px #dedede;
        
        ${mediaQueries.md}{
          margin-bottom: 30px;
          padding:0px;
          box-shadow: none;
          span{
            display:none;
          }
        }
      }
      .all-filters-part-item{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 10px;
        padding: 0px 15px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        label{
          margin:0;
        }
        ${mediaQueries.md}{
          padding: 0px;
        }
        input:hover{
          cursor: pointer
        }
      }
    }
    .getMyLocation{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      margin: 5px;
      line-height: 17px;
      color: #2D9CDB;
      width: max-content;
      &:hover{
        cursor: pointer;
      }
    }
    input[type=checkbox], input[type=radio] {
      margin-right: 5px;
    }
    label{
      text-transform: capitalize;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #4F4F4F;
    }

  }
  .all-filters-buttons{
    padding: 10px;
    box-shadow: 0px 0px 4px #dedede;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      width:100%;
      text-align: center;
    }
    ${mediaQueries.md}{
      display: flex;
      position:relative;
      width: max-content;
      width:100%;
      margin-top: 20px;
      justify-content: flex-end;
      box-shadow: none;
      padding: 20px;
      div{
        width:120px;
        text-align: center;
      }
    }
    .afFirst{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      padding: 6px 18px;
      margin: 0px 10px;
      border-radius: 5px;
      border: 1px solid #2d9cdb;
      color: #2d9cdb;
      &:hover{
        cursor: pointer;
        background: #2D9CDB;
        color: white;
        opacity: 0.7;
      }

    }
    .afSecond{
      background: #2D9CDB;
      border-radius: 5px;
      color: #fff;
      padding: 6px 18px;
      margin: 0px 10px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      color: #FFFFFF;
      &:hover{
        cursor:pointer;
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 735px) {
    .all-filters-buttons{
      position: fixed;
      bottom: 0;
      width: 100%;
      background: white;
      justify-content: center;
    }
    .all-filters-container{
      padding-bottom: 75px;
    }
    .allfilter-popup-backdrop{
      display:none;
    }
    #priceResponsive{
      margin-top:10% !important;
    }
    .all-filters-item{
      margin-bottom: 10px;
      height:40px;
      overflow:hidden;
      position: relative;
      &.active{
        height:auto;
      }
      .all-filters-item-title{
        span{
          display:revert !important;
          position: absolute;
          right: 5px;
        }
      }
    }
  }
`;
