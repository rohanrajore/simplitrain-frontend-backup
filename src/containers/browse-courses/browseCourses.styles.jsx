import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const BrowseCoursesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom:30px;
  .mobile-filter{
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fff;
    z-index: 100000000;
    top: 0;
    left: 0;
    .mobile-filter-head{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 14px;
      border-bottom: 1px solid #EDEDED;
      position: relative;
      h3{
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        margin: 0;
        text-align: justify;
        letter-spacing: 0.02em;
        color: #041016;
      }
      .close-icon{
        color: #EB5757;
        position: absolute;
        right: 15px;
        top: 15px;
        font-size: 20px;
      }
    }
    .mobile-filter-body{
      padding: 20px 0px;
      height: calc(100% - 60px);
      box-sizing: border-box;
      .button-groups{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 4px;
        overflow:hidden;
        margin: 0px 16px;
        border-radius: 4px;
        button{
          border: 1px solid #EDEDED;
          box-sizing: border-box;
          border-radius: 0px;
          padding: 6px 10px;
          background: transparent;
          height: 36px;
          width: 100%;
          margin: 0px;
          font-style: normal;
          font-weight: bold;
          text-align: center !important;
          font-size: 16px;
          line-height: 19px;
          text-align: justify;
          letter-spacing: 0.02em;
          color: #5F5F60;
          &.active{
            background: #2D9CDB;
            border: 0px solid #EDEDED;
            color: #FFFFFF;
          }
        }
      }
      .mobile-filter-sort-by{
        margin-top:20px;
        margin-bottom:20px;
        height: 95%;
        overflow: auto;
        padding: 0px 20px;
        & > div{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0px;
          border-bottom: 1px solid #EDEDED;
          h3{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            color: #303030;
            margin:0;
          }
          .active{
            color:#2D9CDB;
          }
        }


      }
      .mobile-filter-refine-by{
        height: 95%;
        margin-top: 10px;
        overflow: auto;
        display: block;
      }
    }
    .mobile-filter-footer{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;
      overflow:hidden;
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 10px 0;
      box-shadow: 1px 1px 6px #dedede;
      border-radius: 0;
      button{
        box-sizing: border-box;
        border-radius: 0px;
        padding: 6px 10px;
        height: 36px;
        width: 100%;
        border:0;
        font-style: normal;
        font-weight: 400;
        text-align: center !important;
        font-size: 16px;
        border-radius: 4px;
        line-height: 19px;
        text-align: justify;
        letter-spacing: 0.02em;
        background: #2D9CDB;
        color: #FFFFFF;
        &.clear{
          margin-left:20px;
          margin-right:5px;
          color: #2D9CDB;
          background:transparent;
          border:1px solid #2D9CDB;
        }
        &.done{
          margin-left:5px;
          margin-right:20px;
        }
      }
    }
  }
`;

export const BrowseCoursesContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  padding-top: 5px;
  height: auto;
  .row{
    width: 100%;
    margin: auto;
    .col-lg-9{
      padding:0px 0px;
    }
    ${mediaQueries.md}{
      .col-lg-9{
        padding:0px 15px;
      }
    }
  }
`