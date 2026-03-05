import styled from 'styled-components';

export const LeftPanelContainer = styled.div`
    position: sticky;
    top: 30px;
  .userProfile-leftPanel{
    margin-bottom:30px;
    width: 100%;
    height: auto;
    background: #F5F5F5;
    padding:20px;
    ul{
      padding:0;
      span{
        display:inline-block;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 24px;
        color: #303030;
      }
      li{
        list-style: none;
        margin-top: 30px;
        a{
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          color: #303030;
          &:hover{
            cursor: pointer;
          }
        }
        .profile-link-active{
          color:#2D9CDB;
          position: relative;
          &:before {
            position: absolute;
            content: '';
            height: 35px;
            width: 4.7px;
            background: #2D9CDB;
            top: -10px;
            left: -20px;
          }
        }
      }
    }
  }
`
