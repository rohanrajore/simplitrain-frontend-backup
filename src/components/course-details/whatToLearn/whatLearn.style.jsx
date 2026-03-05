import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const CourseDetailSection = styled.div`
  padding: 20px 0;
  .course-detail-title{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    margin-bottom:16px;
    align-items: center;
    color: #041016;
  }
  .course-detail-content{
    background: #F5F5F5;
    padding:30px 20px 20px 20px;
    display: flex;
    width: 100%;
    
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
    .learn-elem{
      width: 100%;
      position: relative;
      padding-left: 24px;
      margin-bottom: 15px;
      text-align: left;
      padding-right: 10px;
      ${mediaQueries.md}{
        width: 50%;
      }
      svg{
        position: absolute;
        left: 0;
        top: 5px;
      }
    }
  }
`;
