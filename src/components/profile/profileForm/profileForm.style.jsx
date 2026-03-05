import styled from 'styled-components';

export const ProfileFormContainer = styled.div`
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
  .locDetails-img-container{
    img{
      width:100%;
      height: 180px !important;
      object-fit: cover;
    }
    .form-group{
      margin-bottom: 0;
    }
    label{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #041016;
    }
    .form-control {
      height: 40px;
      margin-bottom: 20px;
      border-radius: 4px;
      border: 1px solid #EDEDED;
    }
  }
`