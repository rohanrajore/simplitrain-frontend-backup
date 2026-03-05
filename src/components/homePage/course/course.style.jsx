import styled from "styled-components";
import { themeColors } from "../../../theme";


const CourseCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  max-width:320px;
  min-width: 270px;
  width:300px;
  align-items: center;
  justify-content: space-between;
  color: #627373;
  margin: 10px;
  box-sizing: border-box;
  position: relative;
  transition: left 0.3s;
`

const CourseCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  img{
    width:100%;
    height: 119.25px;
  }
`

const CourseDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  min-height: 229.953px !important;
  a{
    width: max-content;
    max-width: 100%;
  }
  .trendingCourse-title{
    color: #041016;
    font-size: 16px;
    height: 40px;
    font-weight: 700;
    overflow:hidden;
    position:relative;
    // &::after{
    //   content: "...";
    //   position: absolute;
    //   bottom: 0;
    // }
  }
  .trendingCourse-item{
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 10px;
    color: #4F4F4F;
    svg{
      width:18px;
      color:#828282;
    }
    span{
      margin-left: 5px;
    }
    &.trendingCourse-link{
      color:${themeColors.primary};

    }
  }
`

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  padding:0px 20px 20px 20px;


  .trendingCourse-Price{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-decoration-line: line-through;
    color: #828282;
    svg{
      width: 8px;
    }
  }
  .trendingCourse-actualPrice{
    color: ${themeColors.danger};
    font-weight: 600;
    svg{
      width: 10px;
    }
  }

  .trendingCourse-cart-disabled{
    opacity: 0.5 !important;
    pointer-events: none !important;
    background:${themeColors.primary};
    border-radius: 4px;
    color:#ffffff;
    padding: 8px 8px;
    border:0;
    box-shadow:none;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
  .trendingCourse-cart{
    background:${themeColors.primary};
    border-radius: 4px;
    color:#ffffff;
    padding: 8px 8px;
    border:0;
    box-shadow:none;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

export { CourseCard, CourseCover, CourseDetail, CourseFooter };

// .trendingCourse-container{
//   min-width: 275px;
//   width: 290px;
//   border-radius: 5px;
//   box-shadow: 0 2px 10px rgba(0,0,0,0.3);
//   height: 370px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin: 10px 15px;
//   color: #627373;
// }
// .trendingCourse-container:hover{
//    color: #627373;
//    box-shadow: 0 5px 15px rgba(0,0,0,0.7);
// }
// .trendingCourse-img{
//   width: 100%;
//   height: 130px;
//   border-radius: 5px;
// }
// .trendingCourse-footer{
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 45px;
//   width: 100%;
//   font-size: 19px;
//   font-weight: bold;
//   padding-left: 5%;
//   padding-right: 5%;
// }
// .trendingCourse-actualPrice{
//   color:#4183c4;
// }
// .trendingCourse-cart{
//   background: #4183c4;
//   color: white;
//   font-size: 16px;
//   border-radius: 5px;
//   padding: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
// .trendingCourse-cart:hover{
//   cursor: pointer;
//   background: #1e70bf;
// }
// .trendingCourse-details{
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 90%;
//   height: 50%;
// }
// .trendingCourse-item{
//   display: flex;
//   align-items: flex-start;
//   color: #627373;
// }
// .trendingCourse-link:hover{
//   color: #4183c4;
// }
// .trendingCourse-title{
//   font-weight: bold;
//   font-size: 18px;
//   margin-left: 1px;
//   height: 100%;
//   color: black;
// }
// .trendingCourse-title:hover{
//   color: #4183c4;
// }
// .insideCart{
//   color: #4183c4;
//   background: none;
// }
// .insideCart{
//   pointer-events: none;
// }
