import styled from 'styled-components';
import { mediaQueries, themeColors } from '../../theme';

export const EBookingContainer = styled.div`
  background: #F5F5F5;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  margin-bottom: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 0px;
  padding:0px 5px;
  ${mediaQueries.md}{
    padding:20px;
    border-radius: 4px;
  }
  .eBooking-course-details-container{
    .isDesktop{
      display:none !important;
      ${mediaQueries.md}{
        display:flex !important;
      }
    }
    .isMobile{
      display:flex;
      ${mediaQueries.md}{
        display:none;
      }
    }

    &[isLoading="true"]{
      justify-content: center;
      align-items: center;
    }
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    .eBooking-course{
      background: #fff;
      align-items: flex-start;
      border: 1px solid #EDEDED;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
      border-radius: 2px;
      padding:0px;
      height: 100%;
      justify-content: space-between;
      flex-direction: column;
      display: flex;
      ${mediaQueries.md}{
        flex-direction: row;
        padding:20px;
      }
      .eBooking-course-img{
        width:100%;
        margin-right:0px;
        ${mediaQueries.md}{
          width:130px;
          margin-right:10px;
        }
      }
      .eBooking-course-details{
        width: 100%;
        padding: 10px;
        text-align:left;
        padding-top:10px;
        ${mediaQueries.md}{
          padding-top:0px;
        }
        .eBooking-course-title{
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          margin-bottom: 10px;
          align-items: center;
          color: #041016;
        }
        .eBooking-course-authorMessage{
          display: flex;
          margin-bottom: 10px;
          .eBooking-course-message{
            font-family: Lato;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 17px;
            margin-left:10px;
            display: flex;
            align-items: center;
            color: #2D9CDB;
            svg{
              margin-right:10px;
              color: #2D9CDB;
            }
          }
        }
        .eBooking-course-date{
          font-weight: 500;
          margin-bottom: 10px;
          font-size: 12px;
          line-height: 17px;
          display: flex;
          align-items: center;
          letter-spacing: 0.02em;
          color: #4F4F4F;
          svg{
            margin-right:10px;
            color: #2D9CDB;
          }

        }
        .eBooking-course-price{
          font-weight: bold;
          font-size: 20px;
          line-height: 24px;
          display: flex;
          align-items: center;
          color: #EB5757;
          svg{
            margin-right:10px;
          }

        }
      }
      .eBooking-QR{
        display: flex;
        padding: 10px;
        justify-content: center;
        width: 250px;
        flex-direction: column;
        align-items: flex-end;
        .eBooking-course-status{
          margin-bottom:10px;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: 0.02em;
          color: #4F4F4F;
          span{
            font-size: 12px;
            line-height: 17px;
            /* identical to box height */

            letter-spacing: 0.04em;

            color: #EC9F05;
          }
        }
      }
    }
    .eBooking-info{
      background: #fff;
      height:100%;
      border: 1px solid #EDEDED;
      box-sizing: border-box;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.02);
      border-radius: 2px;
      padding:10px;
      ${mediaQueries.md}{
        padding:20px;
      }
      .eBooking-infoItem{
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 17px;
        align-items: center;
        color: #303030;
      }
      .eBooking-anchors{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        width: 100%;
        float: left;
        flex-wrap: wrap;
        margin-bottom: 10px;
        ${mediaQueries.md}{
          width: 50%;
          margin-bottom: 0px;
        }
        a{
          margin-bottom:8px;
          color: #2d9cdb;
          svg{
            margin-right:8px;
          }
        }
        div{
          margin-bottom:8px;
          color: #2d9cdb;
          svg{
            margin-right:8px;
            pointer-events:none;
          }
          path{
            pointer-events:none;
          }
        }
        div:hover{
          cursor:pointer;
        }
        ${mediaQueries.md}{
          flex-direction: row;
          width: 100%;
          float: none;

        }
      }
    }
  }
  .eBooking-navbar{
    margin: 0px -5px;
    ${mediaQueries.md}{
      margin: 0px;
    }
    ul{
      display: flex;
      list-style: none;
      margin: 0;
      width:100%;
      overflow:auto;
      padding: 0;
      &::-webkit-scrollbar {
        display: none;
      }
      li{
        padding: 0px 10px;
        white-space: nowrap;
        border-right: 1px solid #BDBDBD;
        font-size: 14px;
        line-height: 17px;
        font-weight: 600;
        -webkit-letter-spacing: 0.02em;
        -moz-letter-spacing: 0.02em;
        -ms-letter-spacing: 0.02em;
        letter-spacing: 0.02em;
        color: #4F4F4F;
        margin: 10px 0;
        & > div:hover{
          cursor: pointer;
        }
        &:last-child{
          border-right: 0px solid #BDBDBD;
        }
        div.activeLink{
          color: #2D9CDB;
        }
      }
    }
  }
  .custom-tab{
    height: 0;
    transition: max-height 0.15s ease-out;
    overflow: hidden;
    &.active{
      height: auto;
      transition: all 0.25s ease-in;
    }
  }
  .eBooking-schedule-container{
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding:10px 0px;
    ${mediaQueries.md}{
      
    }
    .eBooking-schedule-title{
      justify-content: space-between;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #041016;
      position: relative;
      margin-bottom:20px;
      display: flex;
      align-items: center;
      .eBooking-textClose{
        color: #EB5757;
        font-weight: 600;
        position: absolute;
        right: 0;
        &:hover{
          cursor: pointer;
        }
      }
      div{
        font-size: 14px;
        line-height: 17px;
        margin-bottom:0;
        position:relative;
        letter-spacing: 0.02em;
        color: #303030;
        padding:10px 10px 0px 10px;
      }
    }
    .eBooking-schedule{
      display: flex;
      width: 100%;
      flex-direction: column;
      ${mediaQueries.md}{
        flex-direction: row;
      }
    }
    .eBooking-schedule-content{
      display: flex;
      width:100%;
      padding:12px 0px;
      box-sizing: border-box;
      flex-direction: column;
      ${mediaQueries.md}{
        padding:12px;
      }
      .calendar-content{
        display: flex;
        max-width:600px;
        width:100%;
        overflow: auto;
        justify-content: space-between;
        align-items: flex-start;
      }
      .calendar-details{
        max-height: 260px;
        min-width: 600px;
        overflow: auto;
        display: flex;
        justify-content: flex-start;
        padding:0px 10px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        box-sizing: border-box;
        border-radius: 4px;
        & * {
          width: 100%;
        }
        .days{
          width:100%;
          background:#fff;
          font-size: 16px;
          line-height: 19px;
          display: flex;
          align-items: center;
          color: #2D9CDB;
          padding: 10px;
        }
        .day{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 10px;
          .tag{
            background: #F5F5F5;
            border-radius: 4px;
            padding:3px;
            margin: 0px 5px;
          }
          div {
            font-size: 12px;
            line-height: 17px;
            display: flex;
            align-items: center;
            color: #303030;
            span{
              font-weight: bold;
            }
          }
        }
      }

    }
    .eBooking-venue-container{
      display: flex;
      max-width: 100%;
      width:100%;
      padding:12px 0px;
      align-items: flex-end;
      box-sizing: border-box;
      flex-direction: column;
      ${mediaQueries.md}{
        padding:12px;
        max-width: 300px;
        width:100%;
      }
      .eBooking-venue{
        background: #ffffff;
        display: flex;
        flex-direction: column;
        padding-bottom: 20px;
        margin-right: auto;
        margin-left: 0;
        width:100%;
        .eBooking-venueImg{
          width:100%;
          height:150px;
          background-size: cover !important;
          overflow:hidden;
        }
        img{
          width:100%;
        }
        div{
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.02em;
          color: #303030;
          padding:10px 10px 0px 10px;
        }
        a{
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 0.02em;
          color: #2D9CDB;
          padding:10px 10px 0px 10px;
          width: max-content;
        }
      }
    }
  }
  .eBooking-textContainer{
    padding: 12px;
    .feedback-provided{
      width:100%;
      text-align:left;
    }
    .eBooking-textContainer-title{
      justify-content: space-between;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #041016;
      position: relative;
      margin-bottom:20px;
      display: flex;
      align-items: center;
      .eBooking-textClose{
        color: #EB5757;
        font-weight: 600;
        position: absolute;
        right: 0;
        &:hover{
          cursor: pointer;
        }
      }
      div{
        font-size: 14px;
        line-height: 17px;
        margin-bottom:0;
        position:relative;
        letter-spacing: 0.02em;
        color: #303030;
        padding:10px 10px 0px 10px;
      }
    }
    .eBooking-textContainer-details{
      display: flex;
      width: 100%;
      flex-direction: row;
      flex-wrap: wrap;

      .eBooking-textContainer-element{
        width: 50%;
        display: flex;
        margin-bottom: 20px;
        & > div{
          font-size: 14px;
          line-height: 17px;
          display: flex;
          align-items: center;
          color: #4F4F4F;
          max-width: 130px;
          width: 100%;
          span{
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            /* identical to box height */

            display: flex;
            align-items: center;

            color: #041016;

          }
        }
      }

    }
  }
  .eBooking-textContainer{
    .eBooking-textContainer-title{
      justify-content: space-between;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #041016;
      position: relative;
      margin-bottom:20px;
      display: flex;
      align-items: center;
      .eBooking-textClose{
        color: #EB5757;
        font-weight: 600;
        position: absolute;
        right: 0;
        &:hover{
          cursor: pointer;
        }
      }
      div{
        font-size: 14px;
        line-height: 17px;
        margin-bottom:0;
        position:relative;
        letter-spacing: 0.02em;
        color: #303030;
        padding:10px 10px 0px 10px;
      }
    }
  }

  .myCourses-feedback-container{
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    box-sizing: border-box;
    & > div{
      width:100%;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      display: flex;
      justify-content: space-around;
      color: #4F4F4F;
      padding: 10px 0px;
      &:first-child{
        border-bottom: 1px solid #EDEDED;
        margin-bottom: 20px;
        justify-content: flex-start;
      }
    }
  }
  .myCourses-feedback-row > div{
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
  }
  .myCourses-feedback-textAreas{
    display: flex;
    justify-content: space-between;
    & > div{
      width: 100%;
      padding:15px;
      box-sizing: border-box;
      textarea{
        width: 100%;
      }
    }
  }
  .feedback-submitBtn-err{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
    .feedback-errForm{
      font-size: 14px;
      color: #f00;
      margin: 10px 0;
    }
  }
  .feedback-submitBtn{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 20px;
    button{
      background: #2D9CDB;
      border-radius: 4px;
      text-align: center;
      color: #fff;
      border: 0;
      padding: 10px 20px;
      width: 200px;
    }
  }
`;

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

export const EBookingPage = styled.div`
  .trending-noCourses{
    text-align: center;
    padding-bottom: 30px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    color: #041016;

  }
  .eBooking-message{
    text-align: center;
    padding-bottom: 30px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    color: #041016;
    span{
      color:#2D9CDB;
      margin-right:10px;
    }

  }
`;
