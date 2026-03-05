import styled from 'styled-components';

export const OnboardingContainer = styled.div`

  
`

export const WizardSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .wizard-steps{
    height: 510px;
    max-width: 210px;
    border-radius: 5px;
    background: #F5F5F5;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
    .title{
      font-family: Lato;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
  .wizard-sections{
    width: 100%;
    padding: 0px 20px;
    box-sizing: border-box;
    .tab-header{
      border-bottom: 1px solid #E2E2E2;
      padding: 10px 0;
      display: flex;
      margin-bottom: 30px;
      justify-content: space-between;
      align-items: center;
      .step-title{
        font-family: Lato;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        margin:0;
        color: #041016;
      }
      .saveBtn{
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #2D9CDB;
        background: transparent;
        border: 0;
      }
    }
    label{
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      color: #041016;

    }
    .form-group {
      margin-bottom: 2rem;
      position: relative;
      .text-danger{
        position: absolute;
      }
    }
    .form-control{
      height: 40px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #E2E2E2;
      border-radius: 4px;
    }
    
  }
`

export const LocDetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  &.flex-column{
   flex-diraciton:column; 
   .row{
      width: 100%;
   }
  }
  label{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #041016;

  }
  .uplaod-id{
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    & > input{
      border: 1px solid #E2E2E2;
      box-sizing: border-box;
      border-radius: 4px;
    }
    button{
      background: #2D9CDB;
      border-radius: 0px 3px 3px 0px;
      border: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      display: flex;
      align-items: center;
      color: #FFFFFF;
      padding: 10px 24px;
    }
  }
  .termsAndConditions{
    padding: 10px ​!importan;
    p{
      max-height: 200px;
      overflow: auto; 
    }
  }
  .locDetails-img{
    width:210px;
    background-size: cover !important;
    height:156px;
    text-align:center;
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .edit-button{
      background:#00000050;
      position: absolute;
      bottom:10px;
      color:#fff;
      border:0;
      box-shadow:none;
      margin: auto;
      font-family: Lato;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
      letter-spacing: 0em;
      text-align: left;
      padding: 5px 20px;
    }
  }
  .locDetails-content{
    padding-left: 20px;
    width: 100%;
    .Autocomplete{
      .MuiAutocomplete-inputRoot{
        height: 40px;
        border: 1px solid #dedede;
        .PrivateNotchedOutline-root-1.MuiOutlinedInput-notchedOutline{
          border:0;
        }
      }
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
      margin: 0;
    }
    h6{
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
      margin: 0;
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

export const WizardControls = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0;
  &.space-between{
    justify-content: space-between;
  }
  .next-btn, .btn-primary{
    background: #2D9CDB !important;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin:0px 10px;
    line-height: 19px;
    border: 0;
  }
  .btn-skip{
    background: #2D9CDB !important;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    margin:0px 10px;
    line-height: 19px;
    border: 0;
  }
  .btn-default{
    background: #fff;
    border: 1px solid #dedede;
    border-radius: 4px;
    margin:0px 10px;
    font-size: 16px;  
    line-height: 19px;
    padding: 10px 20px;
  }
`

export const SocialMediaContainer = styled.div`
  label.bio-label{
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #041016;
    span{
      color:#2D9CDB;
    }
  }
  textarea.form-control{
    height:auto !important;
  }
  label.WebsiteSocial-label{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    color: #041016;
  }
  .add-field{
    position: absolute;
    top: 0;
    right: 0;
    padding: 0;
    border-radius: 16px;
    svg{
      fill: #2D9CDB;
      width: 25px;
      height: 25px;
    }
  }
  .url-group{
    width:100%;
    display:flex;
    .url-group-input{
      display:flex;
      width: 100%;
    }
    .url-input{
      border-radius: 0px 4px 4px 0px;
    }
    .Autocomplete{
      .MuiAutocomplete-inputRoot{
        height: 40px;
        width: 200px;
        border: 1px solid #dedede;
        border-radius: 4px 0px 0px 4px;
        .PrivateNotchedOutline-root-1.MuiOutlinedInput-notchedOutline{
          border:0;
        }
      }
    }
  }
`