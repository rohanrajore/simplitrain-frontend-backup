import styled from 'styled-components';
import { mediaQueries } from '../../../../theme';

export const BrowseCoursesCourse = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  padding: 16px;
  margin-bottom: 16px;
  ${mediaQueries.md}{
    flex-direction: row;
  }
`

export const CourseLeftContent = styled.div`
  width: 100%;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  padding-right:0px;
  justify-content: center;
  align-items: flex-start;
  ${mediaQueries.md}{
    flex-direction: row;
    padding-right:20px;
  }
  .course-leftContent-image{
    border-radius: 4px;
    margin-right:16px;
    width: 100%;
    height: 80px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    ${mediaQueries.md}{
      width: 200px;
    }
  }
  .distance-away{
    margin-bottom: 10px;
    svg{
      margin-right: 5px;
    }
  }
  .course-leftContent-details{
    display: flex;
    width: 100%;
    flex-direction: column;
    .leftContent-details-title{
      font-family: Lato;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #041016;
      margin-top:0px;
      margin-bottom:15px;
      border-radius: 5px;
    }
    .leftContent-details-author{
      font-family: Lato;
      font-style: italic;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      margin-bottom:10px;
      display: flex;
      align-items: center;
      color: #828282;
      border-radius: 5px;
      a{
        font-family: Lato;
        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        margin-left:5px;
        display: flex;
        align-items: center;
        color: #2F80ED;
        border-radius: 5px;
      }
    }
    .leftContent-details-date{
      font-family: Lato;
      font-style: normal;
      display: flex;
      width: 100%;
      flex-direction: row;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      margin-bottom:10px;
      display: flex;
      align-items: flex-start;
      color: #4F4F4F;
      & > div{
        margin-bottom:5px;
        :nth-child(2){
          display:none;
        }
      }
      ${mediaQueries.md}{
        flex-direction: row;
        & > div{
          margin-bottom:0px;
          :nth-child(2){
            display:flex;
          }
        }
      }
      svg{
        width: 16px;
        height: 16px;
      }
      .simulate-link{
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #2D9CDB;
        ${mediaQueries.md}{
          display: flex;
        }
      }
      & > div {
        width:100%;
        display: flex;
        align-items: flex-start;
        svg{
          margin-right: 5px;
        }
      }
    }
    .leftContent-details-location{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: flex-start;
      color: #4F4F4F;
      svg{
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
`

export const CourseRightContent = styled.div`
  border-left: 0px solid #EDEDED;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  margin-top: 10px;
  padding-left: 0;
  .rightContent-price{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px !important;
    line-height: 24px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #EB5757;
    svg{
      width: 11px;
    }

  }
  ${mediaQueries.md}{
    width: 35%;
    border-left: 1px solid #EDEDED;
    justify-content: center;
    margin-top: 0px;
    padding-left: 20px;
  }


  & > div:first-child{
    padding-right:0px;
    display: flex;
    flex-diraction:row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    ${mediaQueries.md}{
      padding-right:16px;
      align-items: center;
      display: revert;
    }
    & div{
      width:100%;
      margin-bottom:6px;

    }
    .rightContent-ratings{
      text-align:right;
      ${mediaQueries.md}{
        text-align:left;
      }
    }
    .simulate-link{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */

      display: none;
      align-items: center;
      letter-spacing: 0.02em;

      color: #2D9CDB;
      ${mediaQueries.md}{
        display: flex;
      }
    }
  }
  & > div:last-child{
    padding-left:16px;
    display: none;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & div {
      margin:0px 5px;
    }
    ${mediaQueries.md}{
      display: flex;
    }
  }
  .linkHoverbtn{
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: none;
    align-items: center;
    letter-spacing: 0.02em;
    color: #2D9CDB;
    background: #FFFFFF;
    border: 1px solid #2D9CDB;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 8px 16px;
    text-align: center;
    justify-content: center;
    ${mediaQueries.md}{
      display: flex;
    }
  }
  .heartIcon-blue-disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  .heartIcon-blue svg{
    color: #2D9CDB;
    width: 21px;
    height: 20px;
    margin-top:3px;
  }
  .heartIconHover-disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  .heartIconHover:hover{
    cursor: pointer;
  }
  .heartIcon-blue:hover{
    cursor:pointer;
  }
`
