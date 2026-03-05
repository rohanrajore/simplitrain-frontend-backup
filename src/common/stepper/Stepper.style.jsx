import styled from 'styled-components';

export const StepperContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  ul{
    list-style: none;
    margin: 0;
    position: relative;
    padding: 0;
    &:after {
      content: "";
      position: absolute;
      width: 2px;
      height: 80%;
      background: #ABD7F1;
      top: 15px;
      left: 10px;
      z-index: 0;
    }
    li{
      padding:10px;
      padding-left:30px;
      position:relative;
      display: flex;
      margin-bottom: 15px;
      z-index: 1;
      align-items: center;
      justify-content: flex-start;
      .text{
        font-family: Lato;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: left;
        color: #4F4F4F;
      }
      .number{
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 100%;
        background: #ffffff;
        display: flex;
        font-style: normal;
        font-weight: 400;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        left: 0;
        border: 1px solid #2D9CDB;
        color: #2D9CDB;
      }
      &.current{
        .number{
          color: #ffffff;
          background: #2D9CDB;
        }
      }
    }
  }
`