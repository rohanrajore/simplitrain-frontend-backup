import styled from 'styled-components';
import { themeColors, mediaQueries, fonts } from '../../../theme';

export const HeaderDropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 225px;
  position: absolute;
  right: 8px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 30%);
  background-color: #fff;
  border: 0;
  height: 1px;
  opacity: 0;
  transition: all .4s linear;
  margin-top: 5px;
  padding: 20px;
  z-index: 1000;
  ${mediaQueries.md}{
    right: 20px;
  }
  svg{
    position: absolute;
    top: -18px;
    color: #ffffff;
    right: 18px;
  }
  &.show-anim {
    opacity: 1;
    height: auto;
  }
  &.hide-anim{
    display: none;
  }
  .profileDropDown-user{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:10px;
    .img-profile{
      width: 45px;
      height: 45px;
      border-radius:100%;
    }
    .profileDropDown-userInfo{
      margin-left: 10px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.02em;
      color: #303030;
      h4{
        font-weight: 600;
        margin: 0
      }
      p{
        font-weight: 300;
      }
    } 
  }
  hr{
    width: 100%;
    margin: 0;
    margin-top: 16px;
  }
  .link-grey{
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #303030;
    display: inline-block;
    padding: 0;
    margin-top: 8px;
    font-weight: 500;
  }
  .link-red{
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.02em;
    color: #EB5757;
    margin-top: 8px;
  }
  .link-box{
    padding: 10px;
    border: 1px solid #2D9CDB;
    box-sizing: border-box;
    border-radius: 4px;
    width: 100%;
    text-align: center;
    margin: 20px auto 0 auto;
  }
`;
