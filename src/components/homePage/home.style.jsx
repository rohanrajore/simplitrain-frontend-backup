import styled from 'styled-components';
import { mediaQueries, themeColors } from '../../theme';

export const TrendingContainer = styled.div`
  width:100%;
  position: relative;
  padding: 30px 0;
`;

export const TrendingHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  .trending-title{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    padding-left: 10px;
    color:${themeColors.textDark};
    &::before{
      position: absolute;
      content: "";
      width: 2px;
      height: 21px;
      background: ${themeColors.primary};
      margin-right: 20px;
      left: 0;
    }
  }
`;

export const TrendingCourses = styled.div`
  padding:24px 0px;
  position: relative;
  ${mediaQueries.md}{
    padding:24px 20px;
  }
  .trending-courses{
    width: 100%;
    min-height: 200px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    overflow-x: hidden;
    flex-wrap: nowrap;
    z-index:0;
    margin: 0 0px;
    ${mediaQueries.md}{
      margin: 0 -10px;
    }
  }
  .trending-noCourses{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;

    .loadingImgCenter{
      width:100px;
    }
  }
  .trending-button{
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
    border-radius: 100px;
    width: 35px;
    height: 35px;
    display: flex;
    top:50%;
    font-size: 24px;
    position: absolute;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    z-index:999;
    &.tbLeft{
      left:-10px;
      ${mediaQueries.md}{
        left:0px;
      }
    }
    &.tbRight{
      right:-10px;
      ${mediaQueries.md}{
        right:0px;
      }
    }
  }
`

export const TrendingCategory = styled.div`

  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;
  border-bottom: 1px solid #E8E8E8;
  // align-items: center;
  // -ms-overflow-style: none;  /* IE and Edge */
  // scrollbar-width: none;  /* Firefox */
  .category-list{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-start;
    max-height: 40px;
    position: relative;
    overflow: hidden;
  }
  .category-moreIcon{
    position: absolute;
    right: 10px;
    cursor: pointer;
    top: 10px;
  }
  .moreCategories-container{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-width: 200px;
    min-height: 100px;
    position: absolute;
    right: 0px;
    top: 80px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background-color: #fff;
    border: 0;
    padding-left: 20px;
    padding-top: 20px;
    transition: all .4s linear;
    margin-top: 5px;
    color: #627373;
    z-index: 10;
  }
  .moreCategories-container > .trending-category{
    justify-content: flex-start;
    font-weight: 500;
    padding-bottom:15px;
    font-size: 14px;
    line-height: 17px;
    color: #303030;
    &:hover{
      cursor: pointer;
    }
  }
  .dropdown{
    .dropdown-toggle{
      background:transparent;
      border:0;
      margin-left: 20px;
      width:40px;
      height:40px;
      color: #dcdcdc;
      ::after{
        display:none;
      }
      :focus, :active, :hover{
        outline: none;
        border: none;
        box-shadow: none;
      }
    }
  }

`

export const TrendingCategoryItem = styled.div`
    font-style: normal;
    font-weight: bold;
    white-space: nowrap;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    height:39px;
    cursor: pointer;
    position:relative;
    align-items: center;
    color: #616161;
    margin-right: 20px;
    &::last-child{
      margin-right: 0px;
    }
    &.activeCategory {
      color: #041016;
      border-bottom:4px solid ${themeColors.primary};
    }
`

export const JoinTrainerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100%;
  .join-content{
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
    padding:15px 15px;
    margin:15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mediaQueries.md}{
      padding:70px 30px;
      margin:0;
    }
  }
  ${mediaQueries.md}{
    margin-bottom: 80px;
  }
`

export const JoinTrainerTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 43px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  margin-bottom:40px;
  color: #303030;
  ${mediaQueries.md}{
    font-size: 36px;
  }

`

export const JoinTrainerList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  ${mediaQueries.md} {
    width: 75%;
  }
`

export const JoinTrainerItem = styled.div`
  height: auto;
  width: 49%;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  position:relative;
  overflow: hidden;
  margin-bottom: 20px;
  img{
    width: 100%;
    height: 100%;
  }
  h4{
    position: absolute;
    bottom: 0;
    left:0;
    padding: 12px;
    margin: 0;
    width: 100%;
    text-align: center;
    font-family: Lato;
    font-style: normal;
    font-weight: 800;
    font-size: 18px;
  }
  ${mediaQueries.sm} {
    width: 24%;
    margin-bottom: 1%;
  }
`

export const JoinNewTrainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
  border-radius: 5px;
  display: flex;
  padding:10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 49%;
  text-align: center;
  margin-bottom: 20px;
  img{
    width:50px;
    display:none;
    ${mediaQueries.sm} {
      width: 50px;
      height: auto;
      display:revert;
    }
  }
  h4{
    margin: 15px 0;
    color: #627373;
    font-size:14px;
    ${mediaQueries.sm} {
      width: auto;
      font-size:14px;
      margin: 30px 0;
    }
  }
  .join-button{
    background: #4183c4;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 1px;
    padding: 8px 8px;
    ${mediaQueries.sm} {
      padding: 4px 8px;
      font-size: 12px;
    }
  }
  ${mediaQueries.sm} {
    width: 24%;
    margin-bottom: 1%;
    padding:0px;
    
  }
`
export const BecomeInstructorContainer = styled.div`
  display:flex;
  width:100%;
  .instructor-content{
    background-image: linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) ),url("https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80");
    background-size: cover;
    background-position: top;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding:0;
    padding-top:30px;
    width: 100%;
    position: relative;
    margin: auto;
    margin-bottom: 40px;
    ${mediaQueries.md}{
      width: 90%;
      .instructor-content{
        margin-bottom: 80px;
      }
    }
  }
`

export const BecomeInstructorTitle = styled.div`
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  letter-spacing: 2px;
  ${mediaQueries.sm}{
    font-size: 70px;
  }
`

export const BecomeInstructorButton = styled.div`
  .becomeInstructor-btn{
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    background: #2D9CDB;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
    font-size: 14px;
    margin-bottom: 45px;
    margin-top: 40px;
    padding: 12px 24px;
    ${mediaQueries.sm}{
      font-size: 21px;
      margin-top: 85px;
      padding: 18px 30px;
    }
  }
`
export const BecomeInstructorNumbers = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  display: flex;
  align-items: center;
  width: 100%;

  bottom: 0;
  left: 0;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  ${mediaQueries.sm}{
    flex-direction: row;
  }
`
export const BecomeInstructorNumber = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom:0px;
  .numberTitle{
    font-family: Lato;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    ${mediaQueries.sm}{
      font-size: 20px;
    }
  }
  .numberValue{
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* white */

    color: #FFFFFF;

  }
  ${mediaQueries.sm}{
    margin-bottom:0px;
    line-height: 58px;
    font-size: 48px;
  }
`


export const StudentsReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  .nav{
    background: #FFFFFF !important;
    border: 2px solid #EDEDED !important;
    width: 32px !important;
    height: 32px !important;
    box-sizing: border-box !important;
    padding:0 !important;
    display: flex!important;
    position: absolute;
    justify-content: center!important;
    align-items: center!important;
    margin: 0 0px !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1) !important;
    &[aria-label="Previous Slide"]{
      left:5px;
    }
    &[aria-label="Next Slide"]{
      right:5px;
    }
    svg{
      width: 16px;
      height: 16px;
    }
    ${mediaQueries.md} {
      position: relative;
      margin: 0 -20px!important;
      width: 40px !important;
      height: 40px !important;
      svg{
        width: 20px;
        height: 20px;
      }
    }
  }
`
export const StudentsReviewTitle = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 43px;
  display: flex;
  align-items: center;
  width: 90%;
  position: relative;
  margin: auto;
  color: #041016;
  margin-bottom: 34px;
  ${mediaQueries.md}{
    font-size: 36px;
  }

`
export const StudentsReviewSliderItem = styled.div`
  background: #FFFFFF;
  border: 1px solid #EDEDED;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding:20px;
  margin: auto;
  position: relative;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;
  ${mediaQueries.md} {
    width: 90%;
    margin: auto;
  }
  .row{
    justify-content: center;
    align-items: center;
    & > div{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .studentsReview-img{
      width: 100px;
      height: 100px;
      border-radius: 100%;
      margin-bottom:20px;
    }
    .studentsReview-author{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      margin-bottom:6px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #041016;
    }
    .studentsReview-designation{
      font-family: Lato;
      font-style: italic;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;

      color: #4F4F4F;
    }
    .studentsReview-iconLeft{
      color:rgba(189, 189, 189, 0.5);
      position: absolute;
      left: 0;
      top: 0;
    }
    .studentsReview-iconRight{
      color:rgba(189, 189, 189, 0.5);
      position: absolute;
      bottom: 0;
      margin-left: 30px;
    }
    .studentsReview-text{
      text-align: left;
      font-size: 14px;
      font-weight: 400;
      text-align:center;
      color: black;
      position:relative;
      padding:8px 0px;
      margin-top: auto;
      margin-bottom: auto;
      ${mediaQueries.md}{
        font-size: 16px;
        padding:8px 30px;
        text-align:left;
      }
    }
  }
`
