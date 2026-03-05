import styled from 'styled-components';

export const OnsiteVenueStyle = styled.div`

.filters-header{
  background-color: #dde7ee;
  margin: 10px 0;
}

`

export const OnsiteIndexStyle = styled.div`

.filters-header{
  background-color: #dde7ee;
  margin:0;
}
.onsite-venue #select-sort {
  padding-left: 90px;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 28px;
  color: #4F4F4F;
}
.onsite-venue #select-participants, .onsite-venue #select-sort {
  display: inline-block;
  border-radius: 4px;
  padding-left: 190px;
  padding-right: 25px;
  border: 1px solid #E2E2E2;
  line-height: 28px;
  @media (max-width: 480px) {
    text-align: right;
  }
}
.onsite-venue .onsite-list-item {
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid rgba(79, 79, 79, 0.15);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 5%);
  @media (max-width: 480px) {
    padding: 10px;
  }
}
.onsite-venue .onsite-list-item .pricing{
  width: 100%;
  display: inline-block;
}
.photos{
  img{
    width: 100%;
    border-radius: 4px;
    height: 205px;
    object-fit: cover;
  }
}
.onsite-venue .onsite-list-item .photos{
  margin-right: 0;
}
.onsite-venue .onsite-list-item .photos .thumbs .p-more{
  position: absolute;
  bottom: 0px;
  right: -6px;
  width: 65px;
  height: 65px;
  font-size: 20px;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  padding-top: 15px;
  cursor: pointer;
  border-radius: 4px;
}
.onsite-list-item{
  h5{
    font-size: 16px;
    color: #041016;
    font-style: normal;
    font-weight: 800;
    clear: both;
    margin-bottom: 12px !important;
    width: 85%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 480px) {
      width: 75%;
    }
  }
}
.onsite-list-item{
  p{
    font-size:14px;
    color: #4F4F4F;
    font-style: normal;
  }
}
.onsite-venue .onsite-list-item .amenities span {
  display: table-cell;
  padding-right: 15px;
  padding-bottom: 10px;
  padding-top: 10px;
  color: #4F4F4F;
  @media (max-width: 480px) {
    padding-right: 0px;
  }
}
.onsite-venue .onsite-list-item .amenities {
  flex-grow: 1;
  display: table;
  width: 100%;
}
.itemRow {
  display: flex;
  justify-content: space-between;
  @media (max-width: 480px) {
    margin-top:15px;
  }
}
.onsite-venue .onsite-list-item .amenities .show-more {
  cursor: pointer;
  color: #2d8cff;
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
}
.onsite-venue .onsite-list-item .pricing span {
  margin-bottom: 10px;
  display: inline-block;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: #041016;
}
.onsite-venue .onsite-list-item .pricing button{
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  padding:10px 30px;
  background: #2D9CDB;
  border: 1px solid #2D9CDB;
  box-sizing: border-box;
  border-radius: 4px;
  height:36px;
  margin-top:30px;
  @media (max-width: 480px) {
    margin-left: 30px;
  }   
}
.onsite-venue .onsite-list-item .heart-relativeIcon {
  position: absolute;
  right: 0;
  color: #2D9CDB;
  @media (max-width: 480px) {
    bottom: 10px;
  }
}
.priceRightBox{
  border-left: 1px solid #EDEDED;
  padding-left: 15px;
  height: 100%;
  @media (max-width: 480px){
    border-left: none;
    padding-left: 0;
  }
}
.onsite-venue .onsite-list-item .info {
  display: flex;
  height: 100%;
}
.onsite-venue .paginate-container .round-effect{
  color: #4F4F4F;
}
.onsite-venue .paginate-container .active {
  background: #2D9CDB;
  color: #fff;
  border-radius: 4px;
}
.onsite-venue .paginate-container .round-effect:hover {
  text-decoration: none;
  background: #1e5799;
  border-radius: 4px;
  color: #FFF;
}
.MuiInput-root {
  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 15px;
  }
}

`


export const ScheduleVenueStyle = styled.div`

.venue-container{
  margin-top:20px;
}
.css-yk16xz-control{
  background-color: #2D9CDB;
  border-color: #2D9CDB;
}
.css-1uccc91-singleValue{
  color:#fff;
}
.css-6q0nyr-Svg{
  fill: #fff;
}
.css-yk16xz-control:hover{
  border-color: #2D9CDB;
}
.onsite-venue .onsite-filters .filters-searchInput{
  padding: 2px 15px;
  border: 1px solid #EDEDED;
  border-radius: 4px;
  width: 45%;
  position: relative;
  height: 42px;
  @media (max-width: 480px) {
    padding: 2px 5px;
    width: 100%;
    height:45px;
  }
}
.onsite-venue .onsite-filters .filters-searchInput input{
  width: 70%;
}
.onsite-venue .onsite-filters .filters-searchInput .filters-locateMe{
  background: transparent;
  border-radius: 0;
  height: auto;
  color: #898989;
  position: absolute;
  right: 0px;
}
.onsite-venue .onsite-filters button {
  height: 40px;
  border-radius: 4px;
  border: solid 1px #2D9CDB;
  padding: 5px 25px;
  background-color: #2D9CDB;
  color: #fff;
  @media (max-width: 480px) {
    padding: 5px 15px;
  }
}
.onsite-venue .onsite-filters .input-checkbox {
  display: table-cell;
  padding-right: 15px;
  padding-bottom: 0;
}
.onsite-venue .onsite-filters .input-checkbox label {
  font-weight: 400;
  margin-bottom: 0;
  position: relative;
  top: -2px;
  left: 5px;
}
.onsite-venue .onsite-filters .w50-btnContainer .onsiteSecondBtn {
  width: auto;
  padding: 14px 50px;
  height: auto;
  border-radius: 5px;
  font-size: 16px;
  letter-spacing: 0.3px;
}
.onsite-venue .onsite-filters .w50-btnContainer .onsiteFirstBtn {
  background: none;
  color: #000;
  height: auto;
  padding: 14px 30px;
  font-size: 16px;
  letter-spacing: 0.3px;
}
.MuiSlider-root{
  color:#2D9CDB;
}
.select-location {
  height: 40px;
  width: 200px;
  border-radius: 10px;
  @media (max-width: 480px) {
    width:140px;
  }
}
.onsite-list-item p{
  @media (max-width: 480px) {
    font-size: 13px;
  }
}

`

export const OnsiteListItemStyle = styled.div`



`

export const OnSiteDetailStyle = styled.div`

.detail-title-first{
  .detail-title-first-top{
    .detail-title-text{
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      color: #041016;
      margin: 0;
    }
  }
  p{
    margin-top: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #676767;
    a{
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #2D9CDB;
    }
  }
}

.detail-title-second-reviews{
  .svg-inline--fa.fa-w-18 {
    width: 1.5em;
      .star-rating{
        svg{
          color: #FF9800;
        }
      }
  }
  div{
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #2D9CDB;
  }
}
.onsite-venue .detail-title-second-rating {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: #1e88e5;
  margin-left: 10px;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
}
.hotelRating{
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  padding: 6px 15px;
  margin-left: 10px;
  color: #EB5757;
  border: 1px solid #EB5757;
  box-sizing: border-box;
  border-radius: 20px;
  @media (max-width: 480px) {
    font-size: 10px;
    padding: 5px;
  }
}
.onsiteItem-mainImg{
  width: 100%;
  max-width: 1100px;
  height: 311px !important;
  margin-top: 21px !important;
  border-radius: 4px;
  object-fit: cover;
}

.onsiteItem-imgContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  .onsiteItem-imgThumbnail{
    width: 95px;
    height: 95px;
    margin: 0;
    border-radius: 4px;
    &:hover{
      width: 95px;
      height: 95px;
    }
    @media (max-width: 480px) {
      width: 40px;
      height: 40px;
    }
  }
}

.onsite-about{
    margin-top: 50px;
    margin-bottom: 50px !important;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #4F4F4F;
    border-top: 1px solid #CACACA;
    padding-top: 50px;
    border-bottom: 1px solid #CACACA;
    padding-bottom: 50px;
}
.onsiteItem-header5{
  margin: 0 !important;
  margin-bottom: 30px !important;
  border-left: 3px solid #2196f3;
  padding-left: 10px;
  font-style: normal;
  font-weight: bold !important;
  font-size: 24px !important;
  line-height: 29px;
  color: #041016 !important;
}

.onsite-amenities{
  li{
    margin-bottom: 10px !important;
    .onsite-amenities-additional{
      font-size: 12px;
    }
  }
  .amenities-title{ 
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #041016;
    margin-bottom: 20px !important;
  }
}

.onsite-venue .onsite-detail .venue-order {
  width: 260px;
  border-radius: 4px;
  padding: 20px;
  position: relative;
  right: 0;
  background: #E5E5E5;
}

.hostReview{
  background:#F5F5F5;
  padding: 40px 10px;
  margin-bottom: 100px;
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
  .venue-host-photo{
    img{
      border-radius: 50%;
      width: 95px;
      height: 95px;
      margin-bottom: 10px;
    }
    .userName{
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #4F4F4F;
    }
  }
  .detailsText{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #303030;
    .description-more{
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #2D9CDB;
    }
  }
  .venue-host{
    margin: 0 !important;
  }
}

.property-surroundings{
  margin-bottom: 100px;
  ul{
    padding: 0;
    li{
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 180%;
      color: #4F4F4F;
    }
    .title{
      margin-bottom: 10px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      display: flex;
      align-items: center;
      color: #303030;
    }
  }
}

.qa-seeMore{
  height:36px;
  display: inline-block;
  padding: 0px 60px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 36px;
  text-align: center;
  color: #2D9CDB;
  border: 1px solid #2D9CDB;
  box-sizing: border-box;
  border-radius: 5px;
}

.onsiteItemHouseRules{
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  padding: 40px 30px;
  margin-bottom:100px;
  @media (max-width: 480px) {
    margin-bottom:30px;
  }
}

.houseRuleTitle{
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #041016;
}

.onsiteItemRule{
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #303030;
  margin-bottom: 30px;
}

.mb-100{
  margin-bottom:100px;
}

`

export const VenueReviewsStyle = styled.div`

.review-img{
  img{
    width: 56px;
    height: 56px;
  }
}

`

export const VenuOrderStyle = styled.div`

.venueOrder{
  background: #E5E5E5;
  width: 100%;
  padding: 15px;
  margin-bottom:50px;
  table{
    width:100%;
    td{
      padding:8px 0;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
    }
  }
  .border-top{
    border-top: 1px solid rgba(79,79,79,0.15) !important;
  }
  button, .qa-ask-submit{
    text-align: center;
    background: #2D9CDB;
    border-radius: 4px;
    width: 100%;
    border: none;
    padding: 10px;
    color: #fff;
    margin: 12px 0;
  }
}

`







