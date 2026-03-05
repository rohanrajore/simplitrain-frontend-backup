import styled from 'styled-components';

export const InstructorCourseCardContainer = styled.div`
   width: 100%;
  .instructorCourseCard-container{
    width: 90%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    border: 1px solid rgba(79, 79, 79, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 5px;
    margin-bottom: 20px;
    color:#818487;
    padding: 20px;
    @media (min-width:320px) and (max-width:767px) {
      width:100%;
    }
  }
  .instructorCourseCard-container img{
    height: 151px;
    width: 100%;
    margin-right: 20px;
    @media (min-width:320px) and (max-width:767px) {
      height: auto;
      width: 80%;
      margin-right: 0px;
      margin-bottom:10px;
    }
  }
  .course-content{
    width:100%;
  }
  .instructorCourseCard-container .course-info{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .course-info > .course-title > a{
    color:black;
  }
  .course-info > .course-title > a:hover{
    color:#2c9cdb;
  }
  .course-title{
    font-weight: 800;
    font-size: 16px;
    line-height: 150%;
    color: #041016;
  }
  .course-created{
    font-size: 14px;
    line-height: 17px;
    color: #828282;
    display: flex;
    margin-top: 8px;
  }
  .course-created > div:last-child{
    margin-left: 25px;
  }
  .course-classes{
    width: 70%;
    display: flex;
    color: #008cb6;
    justify-content: space-between;
  }
  .instructorCourseCard-container .buttons-container{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .buttons-container > div:last-child{
    margin-top: 10px;
  }

  .course-button{
    width: 100%;
    height: 37px;
    border: 1px solid #2D9CDB;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom:10px;
    color: #2D9CDB;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .course-button:hover{
    background-color: #2D9CDB;
    color: #fafafa;
    cursor: pointer;
    transition: 0.3s;
  }
  .course-button-link{
    color: #018cb0;
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .course-button-link:hover{
    background-color: #018cb0;
    color: #fafafa;
  }
  .instDash-scheduledBatch{
    border: 1px solid #c4c8c4;
    border-radius: 5px;
    padding: 7px;
    margin-top: 15px;
  }
  .instDash-batchStats{
    display: flex;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    margin-bottom:15px;
    font-size: 14px;
    line-height: 17px;
    color: #4F4F4F;
    span{
      padding-right:5px;
    }
  }
  .instDash-stars{
    display: flex;
    align-items: flex-start;
    font-weight: bold;
    font-size: 14px !important;
    color: #828282;
  }
  .instDash-stars > svg{
    color: #EDC26B;
    width: 16px;
    height: 16px;
  }
  .instDash-stars > svg:last-child{
    margin-right: 10px;
  }
  .instDash-batchStats span{
    color: #041016;
    font-weight: bold;
  }
  .instDash-batchStats> div:first-child{
    margin-right: 27px;
    display: flex;
  }
  .instDash-batchStats> div:last-child{
    margin-left: 50px;
  }
`

