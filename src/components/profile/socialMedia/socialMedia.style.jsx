import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const ProfileSocialMediaContainer = styled.div`
  .userProfile-section-title{
    margin-top:80px;
    .userProfile-section-title{
      margin-bottom:30px;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #041016;
    }
  }
  label{
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
  .moreLinks{
    margin-top: 35px;
    font-weight: 600;
    svg {
      float: right;
      top: 2px;
      position: relative;
      font-size: 22px;
      color: #2D9CDB !important;
    }
  }
  .MuiOutlinedInput-adornedEnd {
    height: 45px;
    border: 1px solid #EDEDED;
    border-radius: 5px;
  }
  .profileMedia-moreIcon{
    &:hover{
      cursor: pointer;
    }
  }
  .profileMedia-removeIcon{
    fill:#EB5757;
    color:#EB5757;
    &:hover{
      cursor:pointer;
    }
    & path{
      pointer-events: none;
    }
  }
  .form-row{
    align-items: center;
    margin-bottom: 20px;
    justify-content: flex-start;
    
    align-items: flex-start;
    &.marginBottom25{
      flex-wrap: nowrap;
    }
    & > svg{
      margin: 15px;
    }
  }
  .Autocomplete{
    .MuiFormControl-root{
      .MuiInputBase-input{
        padding:0;
      }
    }
  }
`
