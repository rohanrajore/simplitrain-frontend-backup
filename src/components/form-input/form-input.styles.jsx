import styled, {css} from 'styled-components';
import { themeColors } from '../../theme';

const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${themeColors.textSubtle};
  font-size: 1.1rem;
  padding: 10px;
  display: flex;
  border-radius: 5px;
  border: 1px solid ${themeColors.textSubtle};
  margin: 0.3rem 0;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputButton = styled.button`
    background: ${themeColors.primary} !important;
    color: #fff;
    padding: 10px;
    margin: 5px 0px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    display: block;
    width: 100%;
`;

export const MobileInputWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  margin: 0;
  justify-content: space-between;

  .mobile-input-control {
    padding: 5px 0px;
    height: 40px;
    background: #FFFFFF;
    border:${({ error }) => error ? `1px solid ${themeColors.danger}` : "1px solid #E2E2E2"};

    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #B0B0B0;
      font-size: 16px;
    }
    & > div {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #2D9CDB;
      padding: 0px 0px 0px 5px;
    }
    input {
      display: flex;
      border: none;
      margin-left: 8px;
      font-size: 14px;
      flex-basis: 100%;
      &:focus {
        outline: none;
      }
    }
  }
  .countryCode {
    width: 180px;
    padding: 5px 0px;
    margin-right: 10px;
    .countryCode-wrapper {
      box-sizing: border-box;
      display: flex;
      font-size: 0.8rem;
      padding: 0;
      margin: 0;
      align-items: center;
      justify-content: center;
      select {
        width:100%;
        display: inline-block;
        box-sizing: border-box;
        padding: 0;
        border: none;
        background-color: #fff;
        align-items: center;
        justify-content: center;
        text-align: center;

        &:focus {
          outline: none;

        }

        &::selection {
          color: red;
        }

        option {
          font-size: 0.8rem;
        }
      }

    }
  }
`;

export const SignupWrapperContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  h2 {
    font-size: 1.5rem;
    width:100%;
  }
  p{
    width:100%;
    }
  .signup-span{
    color: #2D9CDB;
    &:hover{
      cursor: pointer;
    }
  }
  .resetPassowrd-faq{
    color: #2D9CDB;
    &:hover{
      cursor: pointer;
    }
    margin-top:30px;
  }
  &.emailOtpSentWrapper{
    text-align:left;
    width:100%;
    margin-top:30px;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      width: 100%;
      text-align:left;
    }
    p{
      margin-bottom:20px;
      width: 100%;
      text-align:left;
    }
    .faqText{
      margin-top:20px;
      margin-bottom:20px;
    }
  }
  &.email-verification-wrapper{
    text-align:center;
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.mobileVerificationWrapper{
    .mobileNumberMessage{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #4F4F4F;
      margin-bottom: 20px;
    }
    .mobileVerificationMessage{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      width: 100%;
      line-height: 24px;
      color: #041016;
      margin-bottom: 20px;
    }
    .faqText{
      margin:20px 0;
    }
    .resendOTPText{
      margin-top:20px;
      button{

      }
    }
  }
`;

export const FormInput = styled.div`
  margin-bottom: 16px;
  position: relative;
  width: 100%;
`

export const FormInputWrapper = styled.div`
    padding: 5px 10px;
    height: 40px;
    background: #FFFFFF;
    border:${({ error }) => error ? `1px solid ${themeColors.danger}` : "1px solid #E2E2E2"};

    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    width: 100%;

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #B0B0B0;
      font-size: 16px;
    }
    & > div {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 28px;
      cursor: pointer;
      letter-spacing: 0.02em;
      color: #2D9CDB;
      padding: 0px 0px 0px 5px;
    }
    input {
      display: flex;
      border: none;
      margin-left: 8px;
      font-size: 14px;
      flex-basis: 100%;
      &:focus {
        outline: none;
      }
    }
`;

export const ErrorMessage = styled.div`
  display: flex;
  background: #F7E6E9;
  width: 100%;
  font-size: ${props => props.large ? "1.2rem" : "0.7rem"};
  color: ${themeColors.danger};
  justify-content:  ${props => props.center ? "center" : "flex-start"};
  text-align: ${props => props.center ? "center" : "left"};
  margin-left: 0;
  padding-left: 10px;
`;
export const SuccessMessage = styled.div`
  display: flex;
  width: 100%;
  background: ${themeColors.success}25;
  font-size: ${props => props.large ? "1.2rem" : "0.7rem"};
  color: ${themeColors.success};
  justify-content:  ${props => props.center ? "center" : "flex-start"};
  text-align: ${props => props.center ? "center" : "left"};
  margin-left: 0;
  padding-left: 10px;
`;

export const FormInputLabel = styled.label`
  color: ${themeColors.textSubtle};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabelStyles}
  }
`;
