import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  .btnRow{
    border-top: 1px solid #EDEDED;
    margin-bottom: 150px;
    position: -webkit-sticky; /* Safari */
    position: sticky;
    bottom: 10px;
    background:#fff;
    height: max-content;
  }
  .userProfile-btn{
    margin-right: 0;
    margin-left: auto;
    text-align: center;
    line-height: 40px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    width: 210px;
    height: 40px;
    background: #2D9CDB;
    border-radius: 4px;
    margin-top:15px;
    &:hover{
      cursor: pointer;
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
  .breadcrumb {
    background: transparent;
    margin-bottom: 0;
    padding:0;
    .breadcrumb-item{
      a{
        color:#fff;
        img{
          margin-right:5px;
          position:relative;
          top:-3px;
        }
      }
    }
    .active {
      color: #fff;
    }
    .breadcrumb-item+.breadcrumb-item::before{
      color: #ffffff;
    }
  }
`
