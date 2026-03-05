import styled from 'styled-components';
import { themeColors, mediaQueries, fonts } from '../../theme'; 

export const LoginSignupModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999999;
  justify-content: center;
  align-items: center;
  display: flex;
  .loginSignup-backdrop{
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
    position: absolute;
    top: 0;
    left:0;
  }
`

export const LoginSignupContainer = styled.div`
  box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
  background: #fff;
  z-index: 4;
  max-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .close-modal-button{
    position: absolute;
    z-index: 1000;
    width: 40px;
    height: 40px;
    top: 10px;
    right: 10px;
    background: transparent;
    border: 0;
    padding: 0;
    font-size: 28px;
    opacity: 0.7;
  }
  .login-leftContent{
    height: 100%;
    padding: 20px;
    width: 100%;
    display: none;
    background: #f8f8f8b3;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${mediaQueries.md}{
      display: flex;
    }
    .login-content{
      max-width: 500px;
      width: 100%;
      height:auto;
      padding: 50px 0;
    }
    .auth-logo{
      width: 190px;
      position: absolute;
      top: 30px;
      left: 30px;
      cursor: pointer;
      margin: 0; 
    }
    .left-content-image{
      width: 100%;
      max-width:400px;
      margin-top: 20px;
      cursor: pointer;
    }
    .loginContent-header-tittle{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #123E58;
    }
    .loginContent-itemContainer{
      .loginContent-item{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.02em
        color: #123E58;
        margin-bottom: 10px;
        position: relative;
        padding-left: 26px;
        svg{
          left: 0;
          top: 2px;
          position:absolute;
        }
      }
    }
  }
  .login-rightContent{
    background: #ffffff;
    height: 100%;
    width:100%;
    padding:0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    ${mediaQueries.md}{
      justify-content: center;
      align-items: center;
    }
    .login-content{
      max-width: 500px;
      width: 100%;
      height:100%;
      padding: 50px 0;
      justify-content: center;
      display: flex;
      flex-direction: column;
    }
    .loginContent-header{
      width: 100%;
      display: flex;
      padding: 10px 30px;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      & > div {
        width: 100%;
        text-align: center;
        border-bottom: 2px solid #EDEDED;
        font-family: Lato;
        font-style: normal;
        height: 30px;
        font-weight: bold;
        font-size: 10px;
        line-height: 22px;
        /* identical to box height */

        letter-spacing: 0.02em;
        ${mediaQueries.md}{
          font-size: 14px;
        }
        &.active{
          border-color:${themeColors.primary};
          color:${themeColors.primary};
        }
      }
    }
    .loginContent-body{
      width: 100%;
      display: flex;
      overflow: auto;
      padding:0px 20px 20px;
      ${mediaQueries.md}{
        padding: 10px 30px;
      }
    }
    
  }
`;
