import styled from 'styled-components';
import { mediaQueries, themeColors } from '../../theme';

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  ${mediaQueries.md}{
    width: 95%;
  }
  .buttonWrapper{
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .socialButtonsText{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
    }
    .googleBtn{
      background-color: transparent !important;
      box-shadow:none !important;
    }
    .facebookBtn{
      background: transparent !important;
      border: 0 !important;
    }
    .linkedInBtn{
      background: transparent !important;
    }
  } 
  .orText{
    img{
      width:100%;
    }
  }
  .login-form{
    padding:20px 0;

    .loginOptionsBox{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      .rememberMe{
        display: flex;
        justify-content: center;
        align-items: center;
        input{
          margin-right:5px;
        }
        label{
          margin:0;
          font-size: 12px;
        }
      }
      .forgot{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 17px;
        color: #2D9CDB;
      }
    }
    .emailLoginBtn{
      background: #2D9CDB;
      border-radius: 5px;
      margin: 10px 0;
      width: 100%;
    }
    .termsText{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4F4F4F;

    }
  }
`;

export const LoginTitle = styled.h2`
  margin: 10px 0;
`;

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 300px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 5px;
  background: #eee;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
  }
  .buttonWrapper{
    display: flex;
    flex-direction: row;
    
    button{
      height: 50px;
    }
    
    .facebookBtn{
      height: 50px;
    }
    
  }
/*  button {
    background: green;
    color: #fff;
    padding: 10px;
    margin: 5px;
    width: 150px;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
  }*/
`;

export const StyledInput = styled.input`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 200px;
  box-sizing: border-box;
`;
