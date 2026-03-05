import styled from 'styled-components';

export const CalenderContainer = styled.div`
.userProfile-section-container{
   margin-top:80px;
  .userProfile-section-title{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #041016;
    margin-bottom: 15px;
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
        margin-bottom:30px;
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
.form-control{
  width: 100%;
  height: 45px;
  padding: 15px;
  border: 1px solid #EDEDED;
  border-radius: 5px;
}
`