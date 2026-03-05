import styled from 'styled-components';
import { mediaQueries } from '../../theme';

export const ImageSlides = styled.div`
  width:100%;
  position: relative;
  
`;

export const ImageSlideshowCards = styled.div`  
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding: 5px;
  ${mediaQueries.md}{
    padding: 20px;
  }
  .container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    ${mediaQueries.md} {
      flex-direction: space-between;
    }
  }
`

export const ImageSlideshowItem = styled.div`  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img{
    margin-right: 20px;
    border: 1px solid #757575;
    box-sizing: border-box;
    width: 50px;
    border-radius: 10px;
    padding: 8px;
  }
  & > div{
    text-align: left;
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
  }
  i{
    margin-right:10px;
    color: #EDEDED;
  }
  h3{
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #EDEDED;
    margin:0;
    ${mediaQueries.md}{
      font-size: 18px;
    }
  }
  p{
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #BFBFBF;
    text-align: left;

    ${mediaQueries.md}{
      font-size: 16px;
    }

  }
  ${mediaQueries.md} {
    flex-direction: row;
    & > div{
      width:60%;
      flex-direction: column;
      text-align:left;
    }
    img{
      width: 60px;
      padding: 15px;
    }
    h3{
      width:100%;
    }
    p{
      text-align: left;
    }
  }
`

