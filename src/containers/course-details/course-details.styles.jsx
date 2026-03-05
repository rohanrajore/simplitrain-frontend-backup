import styled from 'styled-components';

export const CourseDetailsContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom:100px;
  .trending-noCourses{
    margin-left: 0px;
    text-align: left;
    color: #a1a1a1;
    padding: 20px;
    font-style: italic;
    letter-spacing: 1px;
  }
`;

export const Breadcrumbs = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding: 16px 0;
  line-height: 19px;
  color: #4F4F4F;
`
export const CourseDetailTop = styled.div`
  background:#F4FAFD;
  .row{
    align-items: center;
  }
  .card-image{
    width: 100%;
    height: 279px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 20px;
    svg{
      color: #2D9CDB;
      background: #fff;
      border-radius: 100px;
      border: 0;
    }
  }
`

export const CourseDetailBottom = styled.div`
  padding-top: 10px;
  padding-bottom:30px;
`

export const MoreCoursesContainer = styled.div`
  
`


