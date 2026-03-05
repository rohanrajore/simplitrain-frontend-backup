import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const InfoContainer = styled.div`
  width: 100%;
  height: auto;
  .info-content{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding:20px 0;
    .info-buttons{
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            font-weight: bold;
            height: 30px;
            width: auto;
            margin-right: 10px;
            border: none;
            border-radius: 5px;
            cursor:unset;
            color:white;
            :hover{
              cursor: unset;
            }
        }
        .info-btn-1{ background: #EB575799}
        .info-btn-2{ background: #EC9F0599}
        .info-btn-3{ background: #619E9499}
    }
    .info-title{
        font-family: Lato;
        font-style: normal;
        font-weight: 800;
        font-size: 26px;
        line-height: 32px;
        margin-bottom:16px;
        color: #303030;
        ${mediaQueries.md}{
          font-size: 32px;
          line-height: 38px;         
        }
      }
      .info-subtitle{
        font-family: Lato;
        font-style: normal;
        font-weight: normal;
        margin-bottom:30px;
        font-size: 18px;
        line-height: 22px;

        color: #303030;
        ${mediaQueries.md}{
          margin-bottom:46px;
        }

      }
      .row{
            width:100%;
            margin-bottom: 14px;
            font-family: Lato;
            align-items: flex-start;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            /* identical to box height */
            color: #303030;
            
            .info-schedule-first{
              display: flex;
            }
            .info-scroll-link{
                font-family: Lato;
                font-style: normal;
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;

                /* blue */

                color: #2D9CDB;

            }
            .info-icon{
                color:#EB5757;
                margin-right:6px;
            }
      }
      .info-schedule{
        div{
          margin-bottom:15px;
          ${mediaQueries.md}{
            margin-bottom:0px;
          }

        }
        svg{
          width:16px;
          height:16px;
        }
      }
      .info-scroll-link{
        svg{
          width:16px;
          height:16px;
        }
      }
      .info-location{
        div{
          margin-bottom:15px;
          ${mediaQueries.md}{
            margin-bottom:0px;
          }

        }
        svg{
          width:16px;
          height:16px;
        }
      }
  }
`;
