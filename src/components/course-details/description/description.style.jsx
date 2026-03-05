import styled from 'styled-components';
import { mediaQueries } from '../../../theme';

export const DescriptionContainer = styled.div`
  padding:20px 0;
  .description-text{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    color: #041016;
  }
  .description-expand{
    background: #F5F5F5;
    padding:15px 0px;
    ${mediaQueries.md}{
      padding:20px;
    }
  }
`;
