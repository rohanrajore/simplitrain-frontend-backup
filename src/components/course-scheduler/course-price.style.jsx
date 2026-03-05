import styled from 'styled-components';

export const CoursePriceTopForm = styled.div`

.mb15{
  margin-bottom: 15px !important;
}
.schedule-title {
  border-bottom: 1px solid #EDEDED;
  color: #041016;
  font-weight: 800;
  font-size: 16px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-bottom: 10px;
  width: 100%;
}
.course-price-title-label {
  margin-bottom: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #041016;
}
.form-control{
  height: 50px;
  margin-bottom:15px;
}
.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] {
  padding: 7.4px;
  height: 50px;
  margin-bottom: 15px;
}
.add-more-coupons-flex {
  margin-bottom: 15px;
}
.course-price-coupon-content {
  display: flex;
  width: 100%;
  @media (max-width: 480px) {
    flex-direction: column;
  }
  .row{
    @media (max-width: 480px) {
      flex-direction: column;
    }
  }
}
.MuiIconButton-colorPrimary {
  color: #2D9CDB;
  float: right;
  position: relative;
  top: -10px;
}
.MuiSvgIcon-root{
  width: 30px;
  height: 30px;
}
.react-date-picker{
  width: 100%;
}
.react-date-picker__wrapper{
  margin-bottom: 15px;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 4px;
  height: 50px;
  width: 100%;
}

`

