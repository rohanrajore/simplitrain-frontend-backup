import styled from 'styled-components';
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';
import { themeColors, mediaQueries, fonts } from '../../theme';

// height: 60px;
// width: 100%;
// display: flex;
// flex-wrap: wrap;
// justify-content: space-around;
// border-radius: 5px;
// box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// margin-bottom: 0px;
// background-color: #fff;
// border: 0;
// position: sticky;
// z-index: 58;

// @media (max-width: 1320px) {
// height: auto;
// align-items: center;
// justify-content: space-between;
// }

export const MobileContainer = styled(Container)`
  flex-direction: column !important;
  padding-top:50px;
`

export const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  position:fixed;
  top:0;
  left:0
  z-index:10000000;
  background:${themeColors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top:5px;
  padding-bottom:5px;
  padding-right: 10px;
`

export const HeaderBottom = styled.div`
  width: 100%;
  display: flex;
  padding-top:5px;
  padding-bottom:5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .mobile-content{
    position: relative;
    width: 100%;
    margin-right: 0px;
    box-sizing: border-box;
    padding-right: 40px;
    background: #fff;
    display: flex;
    border-radius: 4px;
    height: 40px;
    input{
      border: 0;
      background: transparent;
      width: 100%;
      padding-left:10px;
      height:40px;
      &:focus{
        outline: none;
      }
    }
    .mobile-inputGroup{
      position: absolute;
      width: 40px;
      height: 40px;
      top: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      color:#898989;
      svg{
        color:#898989;
      }
    }
  }
  .mobile-filterIcon{
    background: ${themeColors.white};
    border-radius: 4px;
    width: 48px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    svg{
      color:#898989;
    }
  }
`


export const TopRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .shoppingCart{
    color: #2D9CDB;
    width: 20px;
    font-size: 18px;
    &:hover{
      color: #2D9CDB;
    }
    &.mobile{
      color: #fff;
      filter: brightness(10);
      fill: #fff;
      width: 16px;
      margin-top: -2px;
    }
  }
  button{
    color: ${themeColors.white};
    position: relative;
    padding: 8px;
    height: 40px;
    font-size: 16px;
    span{
      background: ${themeColors.danger};
      border: 1px solid ${themeColors.white};
      box-sizing: border-box;
      position: absolute;
      top:4px;
      right:0;
      width: 16px;
      height: 16px;
      display: flex;
      border-radius: 100%;
      justify-content: center;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      font-size: 9px;
      color: ${themeColors.white};
    }
  }
  .img-profile{
    width:26px;
    height:26px;
    border-radius:100%;
  }
  .myAccount-dropdown{
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    background: white;
    width: 230px;
    height: auto;
    position: absolute;
    top: 50px;
    right: 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    z-index: 1;
    svg{
      position: absolute;
      top: -18px;
      right: 7px;
      color: #ffffff;
      text-shadow: 0px 0px 10px #8d8d8d;
    }
    img{
      height: 75px;
      width: 75px;
      margin-bottom: 20px;
      pointer-events: none;
    }
    .myAcc-dropdown-btns{
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-bottom: 5px;
      padding-bottom: 10px;
      border-bottom: 1px solid #EDEDED;
      .btn{
        width: 100%;
        margin: 0px 10px;
      }
      .btn-primary{
        background:${themeColors.primary};
        border-color:${themeColors.primary};

      }
      .btn-outline-primary{
        border-color:${themeColors.primary};
        color:${themeColors.primary};
        &:hover{
          background:transparent;
          border-color: #2D9CDB;
          color: #2D9CDB;
        }
      }
    }
    .bookings-button{
      font-family: Lato;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
      color: #303030;
      width: max-content;
      margin-left: 0;
      margin-right: auto;
      text-align: left;
      margin-top: 10px;
    }
  }
  .cart-dropdown{
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
    background: white;
    width: 100%;
    height: auto;
    position: fixed;
    top: 50px;
    right: 0px;
    padding: 0px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    cursor: default;
    svg{
      position: absolute;
      top: -18px;
      right: 7px;
      display:none;
      color: #ffffff;
      text-shadow: 0px 0px 10px #8d8d8d;
    }
    .no-cart{
      padding:20px 25px;
      width: 100%;
      pointer-events: none;
    }
    .no-card-msg{
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
      width: 100%;
      margin-bottom: 10px;
    }
    a{
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #2D9CDB;
      width: 100%;
      margin-bottom: 0px;
      pointer-events: auto;
    }
    .cartCourse-dropdown{
      display: flex;
      width: 100%;
      padding: 10px;
      position:relative;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      cursor: default;
      pointer-events:none;
      .cartCourse-dropdown-image{
        width: 50px;
        height: 50px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
      .cartCourse-remove{
        color: #EB5757;
        background: transparent;
        border: 0;
        font-size: 12px;
        font-weight: 600;
        pointer-events: auto;
      }
      &:after{
        content: "";
        border-bottom: 1px solid #E0E0E0;
        width: 92%;
        position: absolute;
        height: 9px;
        bottom: 0;
      }
      img{
        width: 50px;
        height: auto;
      }
      .cartCourse-dropdown-content{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-left: 10px;
        .cartCourse-dropdown-title{
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          color: #4F4F4F;
        }
        .cartCourse-dropdown-sub{
          font-style: italic;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #828282;
        }
        .cartCourse-dropdown-date{
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #2D9CDB;
        }
        .cartCourse-dropdown-price{
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          position:relative;
          color: #EB5757;
          svg{
            margin-right: 5px;
            position: relative;
            color: #EB5757;
            top: 0;
            right: 0;
          }
        }
      }
    }
    .cart-dropdown-priceSummary{
      width: 100%;
      display: flex;
      position:relative;
      margin: 10px 0;
      justify-content: center;
      pointer-events:none;

      div{
        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
        color: #828282;
        svg{
          position: relative;
          color: #828282;
          font-size: 11px;
          top: 0;
          right: 0;
        }
        &:first-child{
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #4F4F4F;
          svg{
            position: relative;
            color: #4F4F4F;
            font-size: 14px;
            top: 0;
            right: 0;
          }

        }
      }
    }
    .cart-dropdown-moreBackground{
      background: #F5F5F5;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      pointer-events:none;
      .cart-dropdown-btn{
        background: #2D9CDB;
        border-radius: 5px;
        color:#fff;
        width: auto;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        padding: 4px 16px;
        color: #FFFFFF;
        pointer-events: auto;
      }
    }

  }
`

export const HeaderContainer = styled.header`
  width: 100%;
  background: ${themeColors.primary};
  height: 102px;
  padding: 0px 50px;
  box-shadow: 1px 1px 6px #eeeeee;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  margin:0 auto;
  .mobile-menu-button{
    line-height: 20px;
    height: 36px;
    padding: 0px 5px;
    font-size:24px;
    color:${themeColors.white};
  }
  ${mediaQueries.md} {
    height: 80px;
    background: ${themeColors.headerBackground};
  }
  @media (max-width: 1200px) {
    padding: 0px 30px;
  }
  @media (max-width: 991px) {
    padding: 0px 0px;
  }
`;

export const CategorySearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 20px;
  width: 100%;
  margin-right: 20px;
`;

export const CategoryContainer = styled.div`
    width:100%;
    max-width: 600px;
    border-radius: 4px !important;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background:${themeColors.headerSearch};
    margin-left: 20px;
    .header-search-content{
      position: relative;
      width:100%;
      height: 36px;
      &.filteropen{
        background: #fff;
        border: 1px solid #EDEDED;
        border-radius: 4px 0px 0px 0px;
      }
    }
    input{
      border: 0;
      background: transparent;
      width: 100%;
      padding-left:10px;
      padding-right: 40px;
      height:36px;
      &:focus{
        outline: none;
      }
    }
    .header-search-inputGroup{
      position: absolute;
      right: 0;
      top: 0;
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
      & span:hover{
        cursor: pointer;
      }
      .header-search-filterBox{
        font-size: 12px;
        height: 26px;
        background: #fefefe;
        border-radius: 4px;
        font-weight: 600;
        margin-right: 5px;
        box-shadow: 0px 0px 1px 1px #dedede;
        span{
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #e90000;
          margin-right: -10px;
        }
      }
      & > div{
        padding: 0 10px;
        height: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
      }
      
      .header-search-filterIcon{
        cursor: pointer;
      }
    }
    .header-search-btn{
      width: 40px;
      cursor: pointer;
      background: ${themeColors.primary};
      color: ${themeColors.white};
      height: 36px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const SearchFilterContainer = styled.div`
  background: white;
  height: auto;
  width: 100.5%;
  position: absolute;
  min-width: 320px;
  left:-1px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid #EDEDED;
  z-index:1;
  border-radius:0px 0px 4px 4px;
  .search-filter-options{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    pointer-events:none;
    .select-location{
      width: 100%;
      margin: 0 10px;
    }
    & div{
      pointer-events:auto;
    }
  }
  .search-filter-actions{
    display: flex;
    justify-content: flex-end;
    padding: 15px 10px;
    align-items: center;
    flex-direction: row;
    pointer-events: none;
    & button{
      pointer-events: auto;
    }
    .btn-link{
      color:${themeColors.primary};
      padding:8px 20px;
    }
    .btn-primary{
      background:${themeColors.primary};
      border-color:${themeColors.primary};
      padding:8px 20px;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: auto;
  img {
    width: 120px;
    ${mediaQueries.md} {
      width: 130px;
    }
    ${mediaQueries.lg} {
      width: 172px;
    }
  }
`;

export const MenuContainer = styled.nav`
  height: auto;
  display: flex;
  align-items: center;
  margin-left: 20px;
  justify-content: flex-end;
  .becomeInst{
    border: 1px solid ${themeColors.primary};
    box-sizing: border-box;
    border-radius: 4px;
    font-style: normal;
    padding: 10px;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
    white-space: nowrap;
    dispaly:none;
    height: 36px;
    color: ${themeColors.primary};
    align-items: center;
    width: auto;
    justify-content: center;
    ${mediaQueries.md} {
      display: flex;
    }
  }
  .cartIcon{
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
    padding: 0;
    margin-left: 15px;
    margin-right: 15px;
    align-items: center;
    &:hover{cursor:pointer}
    & > div{
      position: absolute !important;
      top: -10px;
      right: 10px;
      .badge-notification{
        font-size: 10px !important;
        padding: 3px 5px !important;
        top: 0 !important;
        right: 0 !important;
        z-index:1000 !important;
        height: 16px !important;
      }
    }
    .shoppingCart{
      color: #2D9CDB;
      width: 20px;
      font-size: 18px;
      &:hover{
        color: #2D9CDB;
      }
      &.mobile{
        color: #fff;
        filter: brightness(10);
        fill: #fff;
        width: 16px;
        margin-top: -2px;
      }
    }
  }
  .cart-dropdown{
    box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
    background: white;
    width: 320px;
    height: auto;
    position: absolute;
    top: 36px;
    right: 10px;
    padding: 0px !important;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    cursor: default;
    svg{
      position: absolute;
      top: -18px;
      right: 7px;
      color: #ffffff;
      text-shadow: 0px 0px 10px #8d8d8d;
    }
    .no-cart{
      padding:20px 25px;
      width: 100%;
      pointer-events: none;
    }
    .no-card-msg{
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #303030;
      width: 100%;
      margin-bottom: 10px;
    }
    a{
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      color: #2D9CDB;
      width: 100%;
      margin-bottom: 0px;
      pointer-events: auto;
    }
    .cartCourse-dropdown{
      display: flex;
      width: 100%;
      padding: 10px;
      position:relative;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      cursor: default;
      pointer-events:none;
      .cartCourse-dropdown-image{
        width: 50px;
        height: 50px;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: center !important;
      }
      .cartCourse-remove{
        color: #EB5757;
        background: transparent;
        border: 0;
        font-size: 12px;
        font-weight: 600;
        pointer-events: auto;
      }
      &:after{
        content: "";
        border-bottom: 1px solid #E0E0E0;
        width: 92%;
        position: absolute;
        height: 9px;
        bottom: 0;
      }
      img{
        width: 50px;
        height: auto;
      }
      .cartCourse-dropdown-content{
        display: flex;
        width: 100%;
        flex-direction: column;
        padding-left: 10px;
        .cartCourse-dropdown-title{
          font-style: normal;
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          color: #4F4F4F;
        }
        .cartCourse-dropdown-sub{
          font-style: italic;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #828282;
        }
        .cartCourse-dropdown-date{
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #2D9CDB;
        }
        .cartCourse-dropdown-price{
          font-weight: bold;
          font-size: 14px;
          line-height: 17px;
          position:relative;
          color: #EB5757;
          svg{
            margin-right: 5px;
            position: relative;
            color: #EB5757;
            top: 0;
            right: 0;
          }
        }
      }
    }
    .cart-dropdown-priceSummary{
      width: 100%;
      display: flex;
      position:relative;
      margin: 10px 0;
      justify-content: center;
      pointer-events:none;

      div{
        font-weight: bold;
        font-size: 13px;
        line-height: 16px;
        color: #828282;
        svg{
          position: relative;
          color: #828282;
          font-size: 11px;
          top: 0;
          right: 0;
        }
        &:first-child{
          font-weight: bold;
          font-size: 16px;
          line-height: 19px;
          color: #4F4F4F;
          svg{
            position: relative;
            color: #4F4F4F;
            font-size: 14px;
            top: 0;
            right: 0;
          }

        }
      }
    }
    .cart-dropdown-moreBackground{
      background: #F5F5F5;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      pointer-events:none;
      .cart-dropdown-btn{
        background: #2D9CDB;
        border-radius: 5px;
        color:#fff;
        width: auto;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        padding: 4px 16px;
        color: #FFFFFF;
        pointer-events: auto;
      }
    }

  }
  .myAcc-relative{
    position: relative;
    .myAccount-box{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      white-space: nowrap;
      align-items: center;
      color: ${themeColors.primary};
      & > div{
        margin-right:8px;
        font-style: normal;
        pointer-events:none;
        font-weight: normal;
        font-size: 14px;

      }
      & svg, path{
        pointer-events:none;
      }
      &:hover{
        cursor: pointer;
      }
    }
    .myAccount-dropdown{
      box-shadow: 0 2px 10px rgba(0,0,0,0.3);
      background: white;
      width: 230px;
      height: auto;
      position: absolute;
      top: 36px;
      right: -5px;
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 15px;
      z-index: 1;
      svg{
        position: absolute;
        top: -18px;
        right: 7px;
        color: #ffffff;
        text-shadow: 0px 0px 10px #8d8d8d;
      }
      img{
        height: 75px;
        width: 75px;
        margin-bottom: 20px;
        pointer-events: none;
      }
      .myAcc-dropdown-btns{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 5px;
        padding-bottom: 10px;
        border-bottom: 1px solid #EDEDED;
        .btn{
          width: 100%;
          margin: 0px 10px;
        }
        .btn-primary{
          background:${themeColors.primary};
          border-color:${themeColors.primary};

        }
        .btn-outline-primary{
          border-color:${themeColors.primary};
          color:${themeColors.primary};
          &:hover{
            background:transparent;
            border-color: #2D9CDB;
            color: #2D9CDB;
          }
        }
      }
      .bookings-button{
        font-family: Lato;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #303030;
        width: max-content;
        margin-left: 0;
        margin-right: auto;
        text-align: left;
        margin-top: 10px;
      }
    }
  }


`;

export const LinkButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;

  outline:none;
  &:hover{
    text-decoration: none;
    outline:none;
  }
`;
