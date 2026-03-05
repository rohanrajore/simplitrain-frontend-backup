import styled from 'styled-components';

export const AccountContainer = styled.div`
.userProfile-section-container{
  .userProfile-section-title{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #041016;
    border-bottom: 1px solid #EDEDED;
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
  .settings-account-section{
    .settings-account-title{
      margin-top: 30px;
      margin-bottom: 15px;
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: #041016;
    }
    ul{
      margin-top: 10px !important;
    }
    p{
      margin-bottom: 30px;
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      letter-spacing: 0.02em;
      line-height: 17px;
      color: #828282;
    }
    .settings-account-btnContainer{
      display:flex;
      .settings-account-btn{
        text-align: center;
        margin-right: 20px;
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 40px;
        color: #2D9CDB;
        border: 1px solid #2D9CDB;
        box-sizing: border-box;
        border-radius: 5px;
        width: 210px;
        height: 40px;
        &:hover{
          background:#2D9CDB;
          color: #ffffff;
          cursor: pointer;
        }
      }
      .settings-account-btnDisabled{
        opacity: 0.5;
        &:hover{
          cursor: default !important;
          color: #2D9CDB !important;
          background: none !important;
        }
      }
      .btnRed{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        color: #EB5757;
        border: 1px solid #EB5757;
        box-sizing: border-box;
        border-radius: 5px;
        &:hover{
          background:#EB5757;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
}
label{
  margin-bottom:16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #041016;
}
select:hover{
  cursor: pointer;
}
.form-control{
  width: 100%;
  height: 45px;
  padding: auto 15px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
`
