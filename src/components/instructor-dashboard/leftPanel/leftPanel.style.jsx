import styled from 'styled-components';

export const LeftPanelWrapper = styled.div`
  .left-container{
    background-color: #F5F5F5;
    height: 650px;
    color: #4F4F4F;
    font-family: "Lato", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 25px 0;
    width: 210px;
    margin-right: 20px;
    @media (min-width:320px) and (max-width: 767px) {
      display: none;
    } 
  }
  .left-container ul{
    list-style-type: none;
    padding: 0;
    width: 100%;
  }
  .left-container li{
    margin: 5px 0;
    font-size: 14px;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  .left-container span{
    font-weight: bold;
    color: #041016;
    font-size: 14px;
    margin-left: 20px;
  }
  .link{
    text-decoration: none;
    color: #818487;
    padding-left: 20px;
    width: 100% !important;
  }
  .link:hover{
    color:#008cb6;
    cursor: pointer;
  }
  .link-active-instrDash{
    background: #2D9CDB;
  }
  .link-active-instrDash >div{
    color: white !important;
  }
  .link-active-instrDash >a{
    color: white !important;
  }
`

