import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const NavContainer = styled.div`
  width:100%;
  position: relative;
  padding: 10px;
  border-bottom: 1px solid #EDEDED;
  .search-navbar-left{
    display: flex;
    height:30px;
    justify-content: space-between;
    align-items: center;
    ${mediaQueries.md}{
      justify-content: flex-start;
    }
    .text-results{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
      color: #828282;
      ${mediaQueries.md}{
        font-size: 16px;
      }
      span{
        color:#2D9CDB;
      }
    }
    .mobile-filterIcon{
      border: 1px solid #dedede;
      border-radius: 6px;
      height: 35px;
      width: 35px;
      display: flex;
      justify-content: center;
      align-items: center;
      ${mediaQueries.md}{
        display:none;
      }
    }
  }
  .clearfilter{
    background: transparent;
    color: #2d9cdb;
    border: 0;
    font-weight: 500;
    outline:none;
    font-size: 12px;
   
    box-shadow:none;
    &:hover, &:active, &:focus, &:focus-visible{
      background: transparent !important;
      color: #2d9cdb !important;
      border:0 !important;
      outline:none !important;
      text-decoration: underline !important;
      box-shadow:none !important;
    }
  }
  .search-navbar-right{
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    margin-top: 0px;
    margin-right: 0px;
    margin-left: 0px;
    ${mediaQueries.md}{
      display: flex;
      margin-top: 10px;
      margin-right: -15px;
      margin-left: -15px;
    }
    .appliedFilters{
      margin-left: 0;
      margin-right: auto;
      margin-bottom: 10px;
      display: none;
      padding:0px 0px;
      
      .appliedFilter-item{
        border-radius: 5px;
        background: #f0f5ff;
        color: #303030;
        padding: 5px;
        display: flex;
        border: 1px solid #ebebeb;
        margin-right: 10px;
        & > div{
          font-weight: 600;
          font-size: 12px;
          p{
            font-weight: 400;
            color:#30303099;
          }
        }
        span{
          color: red;
          margin-left: 5px;
          font-size: 14px;
          height: max-content;
          &:hover{
            cursor: pointer;
          }
        }
      }
      &.mobile{
        margin-top:10px;
        display: flex;
        overflow: auto;
        flex-wrap: nowrap;
        .appliedFilter-item{
          border-radius: 50px;
          background: #ffffff;
          padding: 2px 10px;
          
          & > div{
            maring-right:5px;
          }
        }
      }
      ${mediaQueries.md}{
        padding:0px 15px;
        &.desktop{
          display: flex;
        }
        &.mobile{
          display: none;
        }
      }
    }
    .allFilters-btn-row{
      display: none;
      margin-right: 0;
      margin-left: auto;
      justify-content: flex-end;
      padding:0px 0px;
      flex-direction: column-reverse;
      button{
        margin: 0px 0px;
        margin-top: 10px;
        width:100%;
        min-width: 120px;
        height: 40px;
      }
      ${mediaQueries.md}{
        display: flex;
        flex-direction: row;
        padding:0px 15px;
        button{
          margin:0px 10px;
          width:max-content;
        }
      }
    }
    .allFilters-box{
      background: #F0F5FF;
      border-radius: 4px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      width: max-content;
      border:0;
      margin-right:10px;
      svg{
        color: #4F4F4F;
        width: 20px;
      }
    }
    .select-location-button{
      background: #f0f5ff;
      padding: 5px 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      height: 40px;
      label{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        margin:0;
        width:60px;
        color: #303030;
      }
    }
    .select-location{
      background: #F0F5FF;
      box-sizing: border-box;
      border-radius: 4px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
      & > div{
        box-shadow: none;
        border: 0;
        background: #F0F5FF;
        & > div {
        }
      }
      & > div:first-child{
        box-shadow: none
        background: transparent;
        border: 0;
        div span{
          box-shadow: none
          background: transparent;
        }
      }
      & > div:last-child{
        background: #F0F5FF;
        // border: 1px solid #EDEDED;
        box-sizing: border-box;
        right:0;
        border-radius: 4px;
      }
    }
  }
`;
