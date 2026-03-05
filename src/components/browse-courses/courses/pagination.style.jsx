import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const BrowseCoursesPaginate = styled.div`
  width:100%;
  position: relative;
  .pagination-container{
    position: -webkit-sticky; /* Safari */
    position: sticky;
    bottom: 0;
    background: white;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    padding-bottom: 10px;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    li{
      padding: 4px 10px;
      font-size:13px;
      &.next, .previous{
        padding: 0px 10px;
      }
      a{
        color:#4F4F4F;
      }
      &.active{
        background: #2D9CDB;
        border-radius: 4px;
        a{
          color:#ffffff;
        }
      }
      &.disabled{
        a{
          color: #afafaf;
        }

      }
    }
  }
  .pagination-link:focus{
    outline: none;
  }
  .pagination-link:hover{
    cursor: pointer;
    color: #e39e09;
  }
  .pagination-active{
    color:red
  }
  .trending-loading{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .trending-noCourses{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    ${mediaQueries.md}{
      flex-direction: row;
    }
    h5{
      font-family: Lato;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: #4F4F4F;
      margin-bottom: 5px;

      width: 100% !important;
      display: flex;
      text-align: center;
      flex-direction: column;
      ${mediaQueries.md}{
        width: 100%;
        font-size: 18px;
        flex-direction: row;
      }
    }
    .browse-courses-resetFilter{
      color:#2D9CDB;
      margin-left: 5px;
      &:hover{
        cursor: pointer;
      }
    }
    p{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #4F4F4F;

      flex-wrap: wrap;
      white-space: normal;
      text-align: center;
      ${mediaQueries.md}{
        text-align: left;
      }
    }


  }
`
