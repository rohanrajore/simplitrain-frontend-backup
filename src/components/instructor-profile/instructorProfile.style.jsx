import styled from 'styled-components';

export const InstructorProfileContainer = styled.div`

`

export const InstructorProfileContent = styled.div`

  h4{
    margin-bottom:20px;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    align-items: center;
    color: #041016;
  }
  .InstructorBox{
    border: 1px solid #E5E5E5;
    margin-bottom:30px;
    height: 100%;
  }
  .userProfile{
    height: 132px;
    text-align: center;
    background: linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%);
    border: 1px solid #F2F2F2;
    box-sizing: border-box;
    img{
      width: 139px;
      height: 139px;
      border-radius: 100%;
      position: relative;
      bottom: -22px;
    }
  }

  .instructorValues{
    margin-top:50px;
    padding: 0 20px;
    .instructorVal{
      margin-top: 7px;
      margin-bottom:20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #4F4F4F;
      img{
        margin-right: 15px;
      }
    }
  }

  .instructorMsg{
    color:#fff;
    margin-top: 7px;
    font-weight: 500;
    font-size: 14px;
    background: #2D9CDB;
    border-radius: 5px;
    text-align: center;
    height: 35px;
    line-height: 35px;
  }

  .socialNetwork {
    text-align: center;
    margin-top: 42px;
    margin-bottom: 42px;
    padding-left: 20px;
    padding-right: 20px;
    a{
      padding:0px 5px;
      font-size: 20px;
      line-height: 36px;
    }
  }

  .instructorDetail{
    border: 1px solid #E5E5E5;
    padding:20px;
    min-height:420px;
    height: 100%;
    .instructor-name{
      margin-bottom:6px;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #2D9CDB;
    }
    .instructor-role{
      margin-bottom:20px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #000000;
    }
    .instructor-description{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 150%;
      letter-spacing: 0.02em;
      color: #303003;
    }
  }



`

export const PageTitleRow = styled.div`
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

export const CoursesGridContainer = styled.div`
  #react-paginate-instructor-profile{
     margin-top:30px;
    .instructor-profile-courses{
      display: flex;
      margin: 0px -10px;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .pagination-container{
    text-align: center;
    margin: 30px 0;
    li{
      list-style:none;
      display:inline-block;
      margin: 0px 5px;
    }
  }
`
