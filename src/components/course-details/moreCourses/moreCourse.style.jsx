import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const MoreContainer = styled.div`
  position: relative;
  .more-courses-title{
    font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #041016;
    a{
      font-family: Lato;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      /* identical to box height */

      display: flex;
      align-items: center;

      color: #041016;

    }
  }
  .courses-container{
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      height: auto;
      margin-top: 20px;
      &.courses-container-mobile{
        display: flex;
        justify-content: space-around;
        height: auto;
        align-items: center;
        margin-top: 20px;
        display: none;
      }
      &.courses-container-desktop{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        margin-top: 20px;
        overflow-x: hidden;
        padding-right: 10px;
      }
      button.prev-button, button.next-button{
        height: 35px;
        width: 35px;
        color: #4F4F4F;
        border-radius: 100%;
        background: #FFFFFF;
        border: 1px solid #EDEDED;
        box-sizing: border-box;
        box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
        position: absolute;
        z-index:10;
        & svg, path{
          pointer-events: none;
        }
        :focus{
          outline: none;
        }
        :hover{
          cursor: pointer;
          border-color: #EDEDED;
          color:#4F4F4F;
        }
      }
      button.prev-button{
        left: 0px;
        ${mediaQueries.md}{
          left: -17.5px;
        }
      }
      button.next-button{
        right: 0px;
        ${mediaQueries.md}{
          right: -17.5px;
        }
      }
      @media (max-width: 800px) {
        &.courses-container-desktop{
          // display: none;
        }
        &.courses-container-mobile{
          display: flex;
          flex-direction: column;
        }
      }
  }
`;
