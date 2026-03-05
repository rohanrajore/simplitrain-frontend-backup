import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

// display: flex;
//   justify-content: space-between;
//   border-bottom: 1px solid #EDEDED;
//   a{
//     display: inline-flex;
//     width: auto;
//     padding:10px;
//     font-family: Lato;
//     font-style: normal;
//     font-weight: 500;
//     font-size: 14px;
//     line-height: 17px;
//     display: flex;
//     align-items: center;
//     color: #4F4F4F;
//     &.activeLink{
//       font-weight: 900; 
//     }
//   }

export const CourseNavHeader = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 40px;
  background: white;
  padding: 20px 0;
  z-index: 10;
  ${mediaQueries.md}{
    top: 0;
  }
  .toolbar__navigation-items{
    ul{
      list-style: none;
      display: flex;
      width: 100%;
      justify-content: flex-start;
      padding: 0;
      border-bottom: 1px solid #EDEDED;
      margin: 0;
      overflow:auto;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;
      ::-webkit-scrollbar {
        display: none;
      }
      li{
        position: relative;
        cursor: pointer;
        a{
          font-family: Lato;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          display: flex;
          padding:8px 20px;
          align-items: center;
          color: #4F4F4F;
          &.activeLink{
            font-weight: 900; 
            color:#2D9CDB;
            &::after{
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              background: #2D9CDB;
              bottom: 0;
              left: 0;
            }
          }
        }
       
      }
    }
  }
`;
