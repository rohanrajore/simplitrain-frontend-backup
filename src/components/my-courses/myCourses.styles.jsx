import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const MyCoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 600px;
  .myCourses-title{
    font-family: Lato;
    font-style: normal;
    width:100%;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    padding-bottom:16px;
    align-items: center;
    border-bottom: 1px solid #EDEDED;
    color: #041016;

  }
  .myCourses-filters{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding:20px 0;
    width: 100%;
    ${mediaQueries.md}{
      flex-direction: row;
    }
    .search-bookings{
      background: #F5F5F5;
      width: 100%;
      max-width: 300px;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      input{
        width: 100%;
        background: transparent;
        border: 0;
        padding: 6px 10px;
        height: 40px;
      }
      button{
        background: #2d9cdb;
        border-radius: 4px;
        text-align: center;
        width: 40px;
        height: 40px;
        border: 0;
        color: #ffffff;
        font-size: 16px;
      }
    }
    .myCourses-timeline{
      width: 100%;
      display: flex;
      ${mediaQueries.md}{
        width: auto;
      }
      & > div {
        padding: 10px 0;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em;
        color: #303030;
        width:100%;
        text-align:center;
        border-bottom: 1px solid #dedede;
        ${mediaQueries.md}{
          border-bottom: 0px solid #dedede;
        }

        &:hover{
          cursor:pointer;
        }
        
        ${mediaQueries.md}{
          &:first-child{
            margin-right: 20px;
          }
          &:last-child{
            margin-left: 20px;
          }
        }
        &.active{
          font-family: Lato;
          font-style: normal;
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 0.02em;
          color: #2D9CDB;
          border-bottom: 1px solid #2D9CDB;
          ${mediaQueries.md}{
            border-bottom: 0px solid #dedede;
          }
        }
      }
    }
  }
`

export const PageTitleRow = styled.div`
  width:100%;
  .pageTitle{
    padding:26px 0;
    margin-bottom: 30px;
    background:#2D9CDB;
    h4{
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #FFFFFF;
    }
  }
`
