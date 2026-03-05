import styled from 'styled-components';
import { themeColors, mediaQueries, fonts } from '../../../theme';

export const ProfileIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-notification{
    cursor: pointer;
    .bellIconDiv, .heartIconDiv{
      padding:0 15px;
      position: relative;
      & > div{
        position: absolute !important;
        top: -10px;
        right: 10px;
      }
    }
    .badge-notification{
      font-size: 10px !important;
      padding: 3px 5px !important;
      top: 0 !important;
      right: 0 !important;
      z-index:1000 !important;
      height: 16px !important;
    }
  }
  .img-profile{
    width: 26px;
    height: 26px;
    margin-right:5px;
    border-radius:100%;
    ${mediaQueries.md}{
      width: 36px;
      height: 36px;
      margin-right:0px;
    }
  }
  .myAccount-box{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
  }
  .profile-img-accountBox{
    display: flex;
    margin-left: 10px;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #041016;
    & > div{
      padding: 0 3px;
      white-space: nowrap;
    }
    svg{
      color: #979797;
    }
  }
  .heartIconDiv{
    color: #ffffff;
    filter: brightness(10);
    ${mediaQueries.md}{
      color: #15aabf;
      filter: brightness(1);
    }
  }
  .shoppingCart{
    color: #ffffff;
    filter: brightness(10);
    margin-right: 5px;
    width: 35px;
    ${mediaQueries.md}{
      color: #15aabf;
      filter: brightness(1);
    }
  }
  .cartIcon:hover .badge-notification{
    background: #018cb0 !important;
    z-index:1000 !important;
  }
`;
